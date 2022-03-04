import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import express from 'express';
import http from 'http';
import { authorization } from './utils/auth.js';
import { typeDefs, resolver } from './schemas/index.js';
import { db } from './config/connection.js';
const PORT = process.env.PORT || 3001;

async function startApolloServer(typeDefs, resolvers) {
  const app = express();
  const httpServer = http.createServer(app);
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    context: authorization,
  });
  await server.start();
  server.applyMiddleware({ app });

  httpServer.use(express.urlencoded({ extended: true }));
  httpServer.use(express.json());

  if (process.env.NODE_ENV === 'production') {
    httpServer.use(express.static(path.join(__dirname, '../client/build')));
  }

  httpServer.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });

  // db.once('open', () => {
    httpServer.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    });
  // });
}

startApolloServer(typeDefs, resolver);