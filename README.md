# Playwright + k6 Portfolio

Proyecto de portfolio QA que combina **pruebas de API con Playwright (TypeScript)** y **pruebas de carga con k6**, ejecutadas en **GitHub Actions**.

## Alcance

Proyecto de práctica contra APIs públicas y una API local (`json-server`). No incluye pruebas de UI; las pruebas de interfaz están en el repositorio `qa-automation-portfolio`.

## Qué cubre

### Pruebas de API (Playwright)

| Archivo | API | Qué valida |
|---|---|---|
| `api-jsonplaceholder.spec.ts` | JSONPlaceholder | Peticiones a la API pública de JSONPlaceholder |
| `api-pokemon.spec.ts` | PokeAPI | Status 200, datos del recurso `ditto` y lista con `limit=10` |
| `api-users.spec.ts` | ReqRes | Creación de usuario (201) y lista de usuarios (200) |
| `api-reqres.spec.ts` | ReqRes con API key | GET de usuarios autenticado con el header `x-api-key` (200) |
| `api-local.spec.ts` | API propia (`json-server`) | GET y POST sobre `/users` |

### Pruebas de rendimiento (k6)

- Archivo: `tests/performance/load-test.js`
- Escenario: sube a 10 usuarios virtuales en 10 s, los mantiene 20 s y baja a 0 en 10 s.
- Umbral (threshold): el 95 % de las peticiones responde en menos de 800 ms (`p(95) < 800`).
- Check: status 200 en `GET https://reqres.in/api/users?page=1`.

## Tecnologías

Playwright · TypeScript · Node.js · k6 · json-server · GitHub Actions

## Cómo ejecutarlo

Requisitos: Node.js (LTS) y k6 instalado para la prueba de carga.

```bash
git clone https://github.com/mluli/playwright-k6-portfolio.git
cd playwright-k6-portfolio
npm ci
npx playwright install --with-deps

# 1) Levantar la API propia (en otra terminal)
npm run start:api

# 2) Pruebas de API
npx playwright test
npx playwright show-report

# 3) Prueba de carga
k6 run tests/performance/load-test.js
```

El test `api-reqres.spec.ts` necesita una API key en la variable de entorno `REQRES_API_KEY` (por ejemplo, `export REQRES_API_KEY=tu_clave`). Sin ella, ese test falla. En CI se lee desde los secrets del repositorio.

## Pipeline de CI

El workflow `.github/workflows/playwright.yml` se ejecuta en cada push y pull request a `main` o `master`:

1. Descarga el código y configura Node.js (LTS).
2. Instala dependencias con `npm ci`.
3. Levanta la API propia con `json-server`.
4. Instala los navegadores de Playwright.
5. Ejecuta las pruebas de Playwright.
6. Guarda el reporte HTML como artefacto (30 días).
7. Instala k6 y ejecuta la prueba de carga, con salida JSON.
8. Guarda los resultados de k6 como artefacto.

## Autora

Luciana Diaz · QA Engineer · [LinkedIn](https://www.linkedin.com/in/marialucianadiaz/)
