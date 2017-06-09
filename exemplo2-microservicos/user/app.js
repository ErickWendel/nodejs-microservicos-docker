const Hapi = require('hapi')
const server = new Hapi.Server();
server.connection({
    port: 3000
})
server.route({
    method: 'GET',
    path: '/',
    handler: (req, reply) => reply({
        message: "Hello Docker!"
    })
})

server.start(() => {
    console.log('Rodando user!!!')
})

