import { test, expect } from '@playwright/test';

test.describe('Pruebas - ReqRes API Privada', () => {
  // Leemos la API Key desde las variables de entorno de GitHub Actions o local
  const rawKey = process.env.REQRES_API_KEY || '';
  const apiKey = rawKey.trim() || 'TU_API_KEY_LOCAL';
  const URL = 'https://reqres.in/api/collections/products/records?project_id=45988';

  test('GET /collections/products/records - Obtener productos con autenticación', async ({ request }) => {
    // Diagnóstico seguro: informa la forma de la key, nunca su valor
    console.log(
      `REQRES_API_KEY -> largo=${rawKey.length}, empieza con pub_=${rawKey.startsWith('pub_')}, solo ASCII visible=${/^[\x21-\x7E]+$/.test(rawKey)}`
    );

    const response = await request.get(URL, {
      headers: {
        'x-api-key': apiKey,
        'X-Reqres-Env': 'prod',
      },
    });

    // Si no responde 200, mostramos el motivo en el log de CI
    if (response.status() !== 200) {
      const body = await response.text();
      console.log(`Status ${response.status()}: ${body.slice(0, 300)}`);
    }

    expect(response.status()).toBe(200);
  });
});
