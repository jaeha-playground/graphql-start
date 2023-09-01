import getAllComments from './comments.model';

const graphqlCommentsResolver = {
  Query: {
    comments: () => {
      return getAllComments();
    },
  },
};

export default graphqlCommentsResolver;
