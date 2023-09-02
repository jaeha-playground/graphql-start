import postsModel from './posts.model';

const graphqlPostsResolver = {
  Query: {
    posts: () => {
      // console.log('parent>>', parent);
      // console.log('args>>', args);
      // console.log('context>>', context);
      // console.log('info>>', info);

      return postsModel.getAllPosts();
    },
    post: (_: any, args: any) => {
      return postsModel.getPostById(args.id);
    },
  },
};

export default graphqlPostsResolver;
