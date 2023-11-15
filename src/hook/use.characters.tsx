import { useCallback, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { ApiRepo } from '../services/api.repo';
import { Character } from '../model/characters';
import {
  loadCharactersThunk,
  updateCharacterThunk,
} from '../slice/characters.thunk';
import { AppDispatch } from '../store/characters.store';

export function useCharacters() {
  const dispatch = useDispatch<AppDispatch>();
  const repo = useMemo(() => new ApiRepo(), []);

  const loadCharacters = useCallback(async () => {
    try {
      dispatch(loadCharactersThunk(repo));
    } catch (error) {
      console.log((error as Error).message);
    }
  }, [dispatch, repo]);

  const updateCharacter = async (
    id: Character['id'],
    character: Partial<Character>
  ) => {
    try {
      dispatch(
        updateCharacterThunk({
          id,
          repo,
          updatedCharacter: character,
        })
      );
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  return {
    loadCharacters,
    updateCharacter,
  };
}
