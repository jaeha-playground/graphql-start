const graphqlCommentsModel = [
  {
    id: 'comment1',
    text: 'first comment',
    likes: 1,
  },
  {
    id: 'comment2',
    text: 'second comment',
    likes: 10,
  },
  {
    id: 'comment3',
    text: 'third comment',
    likes: 20,
  },
];

const getAllComments = () => {
  return graphqlCommentsModel;
};

const getCommentsByLikes = (minLikes: number) => {
  return graphqlCommentsModel.filter((comment) => {
    return comment.likes >= minLikes;
  });
};

const commentsModel = {
  getAllComments,
  getCommentsByLikes,
};

export default commentsModel;
