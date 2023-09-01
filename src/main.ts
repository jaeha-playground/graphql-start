import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { loadFilesSync } from '@graphql-tools/load-files';

import graphqlPostsModel from './posts/posts.model';
import graphqlCommentsModel from './comments/comments.model';

const app = express();

// .graphql로 끝나는 모든파일 불러오기
const loadedTypes = loadFilesSync('**/*', {
  extensions: ['graphql'],
});

const schema = makeExecutableSchema({
  typeDefs: loadedTypes,
});

const root = {
  posts: graphqlPostsModel,
  comments: graphqlCommentsModel,
};
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
  })
);

const PORT = 4000;
app.listen(PORT, async () => {
  console.log(`Server is running on http://localhost:${PORT}/graphql`);
});
