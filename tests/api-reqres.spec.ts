import { test, expect } from '@playwright/test';

test.describe('Pruebas - ReqRes API Privada', () => {
  // Leemos la API Key desde las variables de entorno de GitHub Actions o local
  const apiKey = process.env.REQRES_API_KEY || 'TU_API_KEY_LOCAL';
  const BASE_URL = 'https://bright-grove-api-187.reqres.in/api';

  test('GET /users - Obtener usuarios con autenticación', async ({ request }) => {
    const response = await request.get(`${BASE_URL}/users`, {
      headers: {
        'x-api-key': apiKey,
      },
    });

    expect(response.status()).toBe(200);
  });
});