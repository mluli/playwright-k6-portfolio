import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '10s', target: 10 }, // Sube a 10 usuarios virtuales en 10 segundos
    { duration: '20s', target: 10 }, // Mantiene 10 usuarios por 20 segundos
    { duration: '10s', target: 0 },  // Baja a 0 usuarios
  ],
  thresholds: {
    http_req_duration: ['p(95)<800'], // 95% de las peticiones en < 800ms
  },
};

export default function () {
  const res = http.get('https://reqres.in/api/users?page=1');
  check(res, {
    'status es 200': (r) => r.status === 200,
  });
  sleep(1);
}