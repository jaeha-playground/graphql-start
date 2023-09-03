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

const addNewComment = (id: string, text: string) => {
  const newComment = {
    id,
    text,
    likes: 0,
  };

  graphqlCommentsModel.push(newComment);
  return newComment;
};

const commentsModel = {
  getAllComments,
  getCommentsByLikes,
  addNewComment,
};

export default commentsModel;
