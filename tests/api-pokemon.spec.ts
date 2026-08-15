import { test, expect } from '@playwright/test';

test.describe('Pruebas de lectura - PokeAPI', () => {
  test('Obtener información de Pikachu', async ({ request }) => {
    const response = await request.get('https://pokeapi.co/api/v2/pokemon/pikachu');
    expect(response.status()).toBe(200);
    
    const body = await response.json();
    expect(body.name).toBe('pikachu');
  });
});