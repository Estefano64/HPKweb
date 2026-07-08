// Servidor de produccion para Railway.
// - Redirige www.hpkinv.com -> https://hpkinv.com (301, conservando la ruta).
// - Sirve el sitio estatico generado por Astro en /dist.
import http from 'node:http';
import handler from 'serve-handler';

const PORT = process.env.PORT || 3000;

// Dominio canonico (sin www). Se puede sobreescribir con la variable CANONICAL_HOST.
const CANONICAL_HOST = process.env.CANONICAL_HOST || 'hpkinv.com';

const server = http.createServer((req, res) => {
  const host = (req.headers.host || '').toLowerCase().split(':')[0];

  // Redireccion www -> dominio canonico, conservando ruta y query string.
  if (host.startsWith('www.')) {
    const location = `https://${CANONICAL_HOST}${req.url || '/'}`;
    res.writeHead(301, { Location: location });
    res.end();
    return;
  }

  // Sirve los archivos estaticos de /dist (mismo comportamiento que `serve dist`).
  return handler(req, res, { public: 'dist' });
});

server.listen(PORT, () => {
  console.log(`Servidor estatico escuchando en el puerto ${PORT}`);
});
