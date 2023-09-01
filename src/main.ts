import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'graphql';

const app = express();

const schema = buildSchema(`
  type Query {
    posts: [Post]
    comments: [Comment]
  }

  type Post {
    id: ID!
    title: String!
    description: String!
    comments: [Comment]
  }

  type Comment {
    id: ID!
    text: String!
    likes: Int
  }
`);

const root = {
  posts: [
    {
      id: 'post1',
      title: 'first post',
      description: 'first post description',
      comments: [
        {
          id: 'comment1',
          text: 'first comment',
          likes: 1,
        },
      ],
    },
    {
      id: 'post2',
      title: 'second post',
      description: 'second post description',
      comments: [],
    },
  ],
  comments: [
    {
      id: 'comment1',
      text: 'first comment',
      likes: 1,
    },
  ],
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
