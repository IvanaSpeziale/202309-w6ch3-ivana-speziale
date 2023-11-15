import { createAsyncThunk } from '@reduxjs/toolkit';
import { ApiRepo } from '../services/api.repo';
import { Character } from '../model/characters';

export const loadCharactersThunk = createAsyncThunk<Character[], ApiRepo>(
  'characters/load',
  async (repo) => {
    const characters = await repo.getCharacters();
    return characters;
  }
);

export const updateCharacterThunk = createAsyncThunk<
  Character,
  {
    repo: ApiRepo;
    id: Character['id'];
    updatedCharacter: Partial<Character>;
  }
>('characters/update', async ({ repo, id, updatedCharacter }) => {
  const finalCharacter = await repo.updateCharacter(id, updatedCharacter);
  return finalCharacter;
});
