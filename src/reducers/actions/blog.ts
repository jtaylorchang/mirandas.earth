import { GET_POSTS, GET_POSTS_SUCCESS, GET_POSTS_FAILURE, SET_HOVER } from '@reducers/blog';
import { TPost } from '@backend/blog';
import { images } from '@constants';

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

export const getPosts = () => {
  return (dispatch) => {
    dispatch(gettingPosts());

    dispatch(
      getPostsSuccess({
        posts: [
          {
            _id: 0,
            category: 'Welcome',
            date: 'June 17, 2020',
            title: "Welcome to Miranda's Earth",
            description:
              "My name is Miranda Johnson. My Junior year of college, I decided I wanted to do more for our Earth. I changed my major, started living more sustainably, and advocating for change in my community. We all have a role to play in saving our planet and this is my story of why sustainability is important to me. I hope you enjoy the content of Miranda's Earth!",
            body: [
              { type: 'paragraph', paragraph: 'Text goes here' },
              { type: 'image', image: { attribution: 'todo', source: '' } },
              { type: 'paragraph', paragraph: 'Text goes here' }
            ],
            image: {
              attribution: 'Miranda Johnson',
              source: images.WelcomeToMirandasEarth
            }
          },
          {
            _id: 1,
            category: 'Food & Wellness',
            date: 'June 17, 2020',
            title: 'The Perks of Being Vegetarian',
            description:
              "There is a lot of misinformation out there claiming you need to eat meat to improve your physical fitness and build muscles. I've been a vegetarian for quite a few years now and I'm sharing some tips on how to stay motivated and substitute out animal products.",
            body: [
              { type: 'paragraph', paragraph: 'Text goes here' },
              { type: 'image', image: { attribution: 'todo', source: '' } },
              { type: 'paragraph', paragraph: 'Text goes here' }
            ],
            image: {
              attribution: 'Miranda Johnson',
              source: images.ThePerksOfBeingVegetarian
            }
          },
          {
            _id: 2,
            category: 'Food & Wellness',
            date: 'June 17, 2020',
            title: 'How to Advocate For Change',
            description:
              'Fixing the problems with our planet is going to be hard, really hard! So how do we go about getting help? Read my ideas on how to get involved in your community and advocate for yourself and your future!',
            body: [
              { type: 'paragraph', paragraph: 'Text goes here' },
              { type: 'image', image: { attribution: 'todo', source: '' } },
              { type: 'paragraph', paragraph: 'Text goes here' }
            ],
            image: {
              attribution: 'Miranda Johnson',
              source: images.HowToAdvocateForChange
            }
          }
        ],
        featuredPost: {
          _id: 0,
          category: 'Welcome',
          date: 'June 17, 2020',
          title: "Welcome to Miranda's Earth",
          description:
            "My name is Miranda Johnson. My Junior year of college, I decided I wanted to do more for our Earth. I changed my major, started living more sustainably, and advocating for change in my community. We all have a role to play in saving our planet and this is my story of why sustainability is important to me. I hope you enjoy the content of Miranda's Earth!",
          body: [
            { type: 'paragraph', paragraph: 'Text goes here' },
            { type: 'image', image: { attribution: 'todo', source: '' } },
            { type: 'paragraph', paragraph: 'Text goes here' }
          ],
          image: {
            attribution: 'Miranda Johnson',
            source: images.WelcomeToMirandasEarth
          }
        }
      })
    );
  };
};

export const setFeatured = (post: TPost) => {
  return {
    type: SET_HOVER,
    post
  };
};
