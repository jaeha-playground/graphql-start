import express from 'express';
import path from 'path';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { ApolloServer } from 'apollo-server-express';
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
  server.applyMiddleware({ app, path: '/graphql' });

  const PORT = 4000;
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}/graphql`);
  });
};

// .graphql로 끝나는 모든파일 불러오기

startApolloServer();
