# Playwright + k6 Portfolio

![CI](https://github.com/mluli/playwright-k6-portfolio/actions/workflows/playwright.yml/badge.svg)

Proyecto de portfolio QA que combina **pruebas de API con Playwright (TypeScript)** y **pruebas de carga con k6**, ejecutadas automáticamente en **GitHub Actions**.

## Qué cubre

### Pruebas de API (Playwright)
| Archivo | API | Qué valida |
|---|---|---|
| `api-jsonplaceholder.spec.ts` | JSONPlaceholder | Endpoints públicos de ejemplo |
| `api-pokemon.spec.ts` | PokeAPI | Status 200, datos de un recurso (`ditto`) y lista con `limit=10` |
| `api-users.spec.ts` | ReqRes | Creación de usuario (201) y lista de usuarios |
| `api-reqres.spec.ts` | ReqRes (con API key) | Acceso autenticado mediante header `x-api-key` |
| `api-local.spec.ts` | API propia (`json-server`) | GET y POST sobre `/users` |

### Pruebas de rendimiento (k6)
- Archivo: `tests/performance/load-test.js`
- Escenario: sube a 10 usuarios virtuales en 10 s, los mantiene 20 s y baja a 0 en 10 s.
- Umbral (threshold): el 95 % de las peticiones debe responder en menos de 800 ms.
- Check: status 200 sobre `GET /api/users?page=1`.

## Tecnologías
Playwright · TypeScript · Node.js · k6 · json-server · GitHub Actions

## Cómo ejecutarlo

```bash
git clone https://github.com/mluli/playwright-k6-portfolio.git
cd playwright-k6-portfolio
npm ci

# 1) Levantar la API propia (en otra terminal)
npm run start:api

# 2) Pruebas de API
npx playwright test
npx playwright show-report

# 3) Prueba de carga (requiere k6 instalado)
k6 run tests/performance/load-test.js
```

> El test `api-reqres.spec.ts` necesita una API key en la variable de entorno `REQRES_API_KEY`.
> En CI se lee desde los *secrets* del repositorio.

## Pipeline de CI
El workflow `.github/workflows/playwright.yml` se ejecuta en cada push y pull request a `main`:
1. Instala dependencias y navegadores.
2. Levanta la API propia con `json-server`.
3. Ejecuta las pruebas de Playwright.
4. Guarda el reporte HTML como artefacto (30 días).
5. Instala k6 y ejecuta la prueba de carga.
6. Guarda los resultados de k6 como artefacto.

## Autora
Luciana Diaz · QA Engineer · https://www.linkedin.com/in/marialucianadiaz/
