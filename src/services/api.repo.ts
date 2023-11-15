import { Character } from '../model/characters';

export class ApiRepo {
  apiUrl = 'http://localhost:3000/characters';

  async getCharacters(): Promise<Character[]> {
    const response = await fetch(this.apiUrl);
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    return response.json();
  }

  async updateCharacter(
    id: Character['id'],
    updateCharacter: Partial<Character>
  ): Promise<Character> {
    const finalUrl = `${this.apiUrl}/${id}`;
    const response = await fetch(finalUrl, {
      method: 'PATCH',
      body: JSON.stringify(updateCharacter),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    return response.json();
  }
}
