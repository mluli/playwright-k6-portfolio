import { test, expect } from '@playwright/test';

test.describe('API Testing Avanzado - Flujo de Usuarios', () => {
  let userId: number;

  test('POST /api/users - Crear usuario y validar schema', async ({ request }) => {
    const response = await request.post('https://reqres.in/api/users', {
      data: { name: 'María Luciana Diaz', job: 'QA Automation Engineer' },
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      timeout: 30000
    });

    // Log para debugging si falla
    if (response.status() !== 201) {
      const body = await response.text();
      console.log(`❌ Error: Status ${response.status()}`);
      console.log(`Respuesta: ${body}`);
    }

    expect(response.status()).toBe(201);
    const body = await response.json();

    expect(body).toHaveProperty('id');
    expect(body.name).toBe('María Luciana Diaz');
  });

  test('GET /api/users - Validar lista de usuarios', async ({ request }) => {
    const response = await request.get('https://reqres.in/api/users?page=1', {
      headers: {
        'Accept': 'application/json'
      },
      timeout: 30000
    });

    // Log para debugging si falla
    if (response.status() !== 200) {
      const body = await response.text();
      console.log(`❌ Error: Status ${response.status()}`);
      console.log(`Respuesta: ${body}`);
    }

    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(Array.isArray(body.data)).toBeTruthy();
  });
});
