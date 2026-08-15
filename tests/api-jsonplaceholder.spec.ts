import { test, expect } from '@playwright/test';

test.describe('Pruebas de escritura - JSONPlaceholder', () => {
  test('Crear una nueva publicación (POST)', async ({ request }) => {
    const response = await request.post('https://jsonplaceholder.typicode.com/posts', {
      data: {
        title: 'Mi test de Playwright',
        body: 'Contenido de prueba',
        userId: 1
      }
    });

    expect(response.status()).toBe(201);
    const body = await response.json();
    expect(body).toHaveProperty('id');
  });
});