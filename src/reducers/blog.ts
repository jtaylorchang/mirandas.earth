import { TPost } from '@backend/blog';

export const GET_POSTS = 'GET_POSTS';
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
export const GET_POSTS_FAILURE = 'GET_POSTS_FAILURE';

export const SET_HOVER = 'SET_HOVER';

export interface TBlogState {
  isGettingPosts: boolean;
  getPostsError: boolean;
  getPostsErrorMessage: string;

  posts: TPost[];
  featuredPost: TPost;
}

const initialState: TBlogState = {
  isGettingPosts: false,
  getPostsError: false,
  getPostsErrorMessage: '',

  posts: [],
  featuredPost: null
};

export default (state = initialState, action: any): TBlogState => {
  switch (action.type) {
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
        posts: action.posts,
        featuredPost: action.featuredPost
      };
    case GET_POSTS_FAILURE:
      return {
        ...state,
        isGettingPosts: false,
        getPostsError: true,
        getPostsErrorMessage: action.error.message
      };
    case SET_HOVER:
      return {
        ...state,
        featuredPost: action.post
      };
    default:
      return state;
  }
};
