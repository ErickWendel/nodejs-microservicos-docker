const Hapi = require('hapi')
const server = new Hapi.Server();
server.connection({
    port: 5000
})
server.route({
    method: 'GET',
    path: '/',
    handler: (req, reply) => reply({
        message: "Hello Docker!"

    })
})

server.start(() => {
    console.log('Rodando employeee!!!')
})

