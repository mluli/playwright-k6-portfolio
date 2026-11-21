import { test, expect } from '@playwright/test';

test.describe('Pruebas - ReqRes API Privada', () => {
  // Leemos la API Key desde las variables de entorno de GitHub Actions o local
  const apiKey = process.env.REQRES_API_KEY || 'TU_API_KEY_LOCAL';
  const URL = 'https://reqres.in/api/collections/products/records?project_id=45988';

  test('GET /collections/products/records - Obtener productos con autenticación', async ({ request }) => {
    const response = await request.get(URL, {
      headers: {
        'x-api-key': apiKey,
        'X-Reqres-Env': 'prod',
      },
    });

    expect(response.status()).toBe(200);
  });
});
