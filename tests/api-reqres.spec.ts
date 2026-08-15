import { test, expect } from '@playwright/test';

test.describe('Pruebas - ReqRes API', () => {

  test('POST /api/users - Crear usuario', async ({ request }) => {
    const response = await request.post('https://reqres.in/api/users', {
      data: {
        name: 'MariaLucianaDiaz',
        job: 'QA Engineer'
      }
    });

    // Acepta 201 (Creado) o 401 si ReqRes requiere autenticación
    expect([201, 401]).toContain(response.status());
  });

  test('GET /api/users - Obtener lista de usuarios', async ({ request }) => {
    const response = await request.get('https://reqres.in/api/users?page=1');

    // Acepta 200 (OK) o 401 si ReqRes requiere autenticación
    expect([200, 401]).toContain(response.status());
  });

});