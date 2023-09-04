import express from 'express';
import path from 'path';
import { json } from 'body-parser';
import cors from 'cors';

import { makeExecutableSchema } from '@graphql-tools/schema';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';

import { loadFilesSync } from '@graphql-tools/load-files';

const loadedTypes = loadFilesSync('**/*', {
  extensions: ['graphql'],
});
const loadedResolvers = loadFilesSync(path.join(__dirname, '**/*.resolvers.ts'));

const startApolloServer = async () => {
  const app = express();

  const schema = makeExecutableSchema({
    typeDefs: loadedTypes,
    resolvers: loadedResolvers,
  });

  const server = new ApolloServer({ schema });

  await server.start();

  app.use(
    '/graphql',
    cors(),
    json(),
    expressMiddleware(server, {
      context: async ({ req }) => ({ token: req.headers.token }),
    })
  );

  const PORT = 4000;
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}/graphql`);
  });
};

// .graphql로 끝나는 모든파일 불러오기

startApolloServer();
