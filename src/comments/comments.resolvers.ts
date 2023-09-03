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
  Mutation: {
    addNewComment: (_: any, args: any) => {
      const { id, text } = args;
      return commentsModel.addNewComment(id, text);
    },
  },
};

export default graphqlCommentsResolver;
