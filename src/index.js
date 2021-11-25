const { ApolloServer } = require('apollo-server');

const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const userAPI = require('./dataSources/userApi');
const purchaseAPI = require('./dataSources/purchaseApi');
const rentalAPI = require('./dataSources/rentalApi');
const authentication = require('./utils/authentication');

const server = new ApolloServer({
    context: authentication,
    typeDefs,
    resolvers,
    dataSources: () => ({
        userAPI     : new userAPI(),
        purchaseAPI : new purchaseAPI(),
        rentalAPI   : new rentalAPI(),
    }),
    introspection: true,
    playground   : true
});

server.listen(process.env.PORT || 4000).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
}); 