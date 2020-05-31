import { ContentfulClientApi } from 'contentful';

import { GET_POSTS, GET_POSTS_SUCCESS, GET_POSTS_FAILURE, INIT_CLIENT } from '@reducers/blog';
import { TPost, createContentfulClient, getBlogPosts } from '@backend/blog';
import { images } from '@constants';

export const initClient = () => {
  return {
    type: INIT_CLIENT,
    client: createContentfulClient()
  };
};

const gettingPosts = () => {
  return {
    type: GET_POSTS
  };
};

const getPostsSuccess = (data) => {
  return {
    type: GET_POSTS_SUCCESS,
    posts: data.posts,
    featuredPost: data.featuredPost
  };
};

const getPostsFailure = (error) => {
  return {
    type: GET_POSTS_FAILURE,
    error
  };
};

export const getPosts = (client: ContentfulClientApi) => {
  return (dispatch) => {
    if (client === null) return;

    dispatch(gettingPosts());

    getBlogPosts(client).then((res) => {
      dispatch(getPostsSuccess({ posts: res }));
    });
  };
};
