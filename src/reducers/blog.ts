import { ContentfulClientApi } from 'contentful';

import { TPost } from '@backend/blog';

export const INIT_CLIENT = 'INIT_CLIENT';

export const GET_POSTS = 'GET_POSTS';
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
export const GET_POSTS_FAILURE = 'GET_POSTS_FAILURE';

export interface TBlogState {
  isGettingPosts: boolean;
  getPostsError: boolean;
  getPostsErrorMessage: string;

  client: ContentfulClientApi;
  posts: TPost[];
}

const initialState: TBlogState = {
  isGettingPosts: false,
  getPostsError: false,
  getPostsErrorMessage: '',

  client: null,
  posts: []
};

export default (state = initialState, action: any): TBlogState => {
  switch (action.type) {
    case INIT_CLIENT:
      return {
        ...state,
        client: action.client
      };
    case GET_POSTS:
      return {
        ...state,
        isGettingPosts: true,
        getPostsError: false,
        getPostsErrorMessage: ''
      };
    case GET_POSTS_SUCCESS:
      return {
        ...state,
        isGettingPosts: false,
        posts: action.posts
      };
    case GET_POSTS_FAILURE:
      return {
        ...state,
        isGettingPosts: false,
        getPostsError: true,
        getPostsErrorMessage: action.error.message
      };
    default:
      return state;
  }
};
