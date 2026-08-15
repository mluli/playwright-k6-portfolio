import { test, expect } from '@playwright/test';

test.describe('Pruebas - PokeAPI', () => {

  test('GET /pokemon/ditto - Validar datos de Ditto', async ({ request }) => {
    const response = await request.get('https://pokeapi.co/api/v2/pokemon/ditto');
    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body.name).toBe('ditto');
    expect(body).toHaveProperty('id');
  });

  test('GET /pokemon - Validar lista de Pokémon', async ({ request }) => {
    const response = await request.get('https://pokeapi.co/api/v2/pokemon?limit=10');
    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(Array.isArray(body.results)).toBeTruthy();
    expect(body.results.length).toBe(10);
  });

});