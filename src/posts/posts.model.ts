const graphqlPostsModel = [
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
];

const getAllPosts = () => {
  return graphqlPostsModel;
};

const getPostById = (id: string) => graphqlPostsModel.find((post) => post.id === id);

const addNewPost = (id: string, title: string, description: string) => {
  const newPost = {
    id,
    title,
    description,
    comments: [],
  };

  graphqlPostsModel.push(newPost);
  return newPost;
};

const postsModel = {
  getAllPosts,
  getPostById,
  addNewPost,
};

export default postsModel;
