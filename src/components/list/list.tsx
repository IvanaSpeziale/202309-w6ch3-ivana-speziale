import { useEffect } from 'react';
import { Card } from '../card/card';
import { RootState } from '../../store/characters.store';
import { useSelector } from 'react-redux';
import { useCharacters } from '../../hook/use.characters';

export function List() {
  const { characters } = useSelector(
    (state: RootState) => state.charactersState
  );
  const { loadCharacters } = useCharacters();

  useEffect(() => {
    loadCharacters();
  }, [loadCharacters]);

  return (
    <>
      {characters.length > 0 && (
        <ul className="characters-list row list-unstyled">
          {characters.map((item) => (
            <Card info={item} key={item.id}></Card>
          ))}
        </ul>
      )}
    </>
  );
}
