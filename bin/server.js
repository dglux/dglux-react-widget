const Hapi = require('hapi');

const server = Hapi.server({
  port: 8423,
  host: 'localhost',

  routes: {cors: true }
});

const init = async () => {
  await server.register(require('inert'));

  server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
      directory: {
        path: './www'
      }
    },
    config: {
      cors: {
        origin: ['*'],
        credentials: true
      }
    },
  });

  await server.start();
  console.log('Server running at:', server.info.uri);
};

init();
