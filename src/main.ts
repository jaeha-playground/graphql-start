import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'graphql';

const app = express();

const schema = buildSchema(`
  type Query {
    description: String
  }
`);

const root = {
  description: 'hello world',
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
