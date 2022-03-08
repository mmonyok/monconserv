import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import express from 'express';
import http from 'http';
import { authorization } from './utils/auth.js';
import { typeDefs, resolvers } from './schemas/index.js';
import { db } from './config/connection.js';
// import { fileURLToPath } from 'url';
// import { dirname } from 'path';
import * as path from 'path';
const PORT = process.env.PORT || 3001;
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

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

  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  // if (process.env.NODE_ENV === "production") {
  //   app.use(express.static("build"));
  //   app.get("*", (req, res) => {
  //     res.sendFile(path.resolve(__dirname,  "build", "index.html"));
  //   });
  // }
  
  // app.get('*', (req, res) => {
  //   res.sendFile(__dirname, '../client/public/index.html');
  // });

  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
  }
  
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });

  db.once('open', () => {
    httpServer.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    });
  });
}

startApolloServer(typeDefs, resolvers);