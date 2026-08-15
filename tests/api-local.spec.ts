import { test, expect } from '@playwright/test';

test.describe('Pruebas en API Propia', () => {
  const BASE_URL = 'http://localhost:3000';

  test('GET /users - Obtener lista de usuarios', async ({ request }) => {
    const response = await request.get(`${BASE_URL}/users`);
    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(Array.isArray(body)).toBeTruthy();
  });

  test('POST /users - Crear usuario en API propia', async ({ request }) => {
    const response = await request.post(`${BASE_URL}/users`, {
      data: {
        name: 'QA User',
        email: 'qauser@example.com',
      },
    });

    expect(response.status()).toBe(201);
    const body = await response.json();
    expect(body).toHaveProperty('id');
  });
});