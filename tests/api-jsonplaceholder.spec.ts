import { test, expect } from '@playwright/test';

test.describe('Pruebas - JSONPlaceholder API', () => {

  test('POST /users - Crear usuario', async ({ request }) => {
    const response = await request.post('https://jsonplaceholder.typicode.com/users', {
      data: {
        name: 'QA Tester',
        username: 'qatester',
        email: 'qa@example.com'
      }
    });

    expect(response.status()).toBe(201);
    
    const body = await response.json();
    expect(body).toHaveProperty('id');
  });

  test('GET /users - Validar lista de usuarios', async ({ request }) => {
    const response = await request.get('https://jsonplaceholder.typicode.com/users');
    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(Array.isArray(body)).toBeTruthy();
  });

});