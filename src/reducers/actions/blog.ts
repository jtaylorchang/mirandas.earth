import { GET_POSTS, GET_POSTS_SUCCESS, GET_POSTS_FAILURE } from '@reducers/blog';

const gettingPosts = () => {
  return {
    type: GET_POSTS
  };
};

const getPostsSuccess = (data) => {
  return {
    type: GET_POSTS_SUCCESS,
    posts: data.posts
  };
};

const getPostsFailure = (error) => {
  return {
    type: GET_POSTS_FAILURE,
    error
  };
};

export const getPosts = () => {
  return (dispatch) => {
    dispatch(gettingPosts());
  };
};
