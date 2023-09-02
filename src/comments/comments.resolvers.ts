import commentsModel from './comments.model';

const graphqlCommentsResolver = {
  Query: {
    comments: () => {
      return commentsModel.getAllComments();
    },
    commentsByLikes: (_: any, args: any) => {
      return commentsModel.getCommentsByLikes(args.minLikes);
    },
  },
};

export default graphqlCommentsResolver;
