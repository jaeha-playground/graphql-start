import getAllPosts from './posts.model';

const graphqlPostsResolver = {
  Query: {
    posts: () => {
      // console.log('parent>>', parent);
      // console.log('args>>', args);
      // console.log('context>>', context);
      // console.log('info>>', info);

      return getAllPosts();
    },
  },
};

export default graphqlPostsResolver;
