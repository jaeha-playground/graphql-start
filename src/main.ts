import express from 'express';
import { graphqlHTTP } from 'express-graphql';

const app = express();

const PORT = 4000;
app.listen(PORT, async () => {
  console.log(`Server is running on ${PORT}`);
});
