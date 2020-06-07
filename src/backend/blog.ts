import * as Contentful from 'contentful';

import { parseEntries } from '@services/blogService';

export interface TMinimumBodyElement {
  type: string;
}

export interface TAttributedImage {
  attribution: string;
  source: any;
}

export interface TImage {
  url: string;
}

export interface TImageElement extends TMinimumBodyElement {
  type: 'image';
  image: TImage;
}

export interface TParagraphElement extends TMinimumBodyElement {
  type: 'paragraph';
  paragraph: string;
}

export interface TQuoteElement extends TMinimumBodyElement {
  type: 'quote';
  quote: string;
}

export interface TLink {
  label: string;
  url: string;
}

export interface TLinkElement extends TMinimumBodyElement {
  type: 'link';
  link: TLink;
}

export type TBodyElement = TImageElement | TParagraphElement | TQuoteElement | TLinkElement | any;

export interface TPost {
  _id: number;
  category: string;
  date: string;
  dateRaw?: string;
  title: string;
  description: string;
  body: TBodyElement[];
  image?: TImage;
  featured?: boolean;
}

export interface TPostDict {
  [key: string]: TPost;
}

export const CONTENTFUL_SPACE_ID = 'z7ovr59r2hn9';
export const CONTENTFUL_ACCESS_TOKEN = 'zamo1PQqCll72aR2N0y6z5q1zQ1rA6AB187aQ7OPMxY';
export const CONTENTFUL_BLOG_TYPE = 'blogPost';

export const createContentfulClient = (): Contentful.ContentfulClientApi => {
  return Contentful.createClient({
    space: CONTENTFUL_SPACE_ID,
    accessToken: CONTENTFUL_ACCESS_TOKEN
  });
};

export const getBlogPosts = async (client: Contentful.ContentfulClientApi): Promise<TPost[]> => {
  try {
    const entries = await client.getEntries({ content_type: CONTENTFUL_BLOG_TYPE, limit: 200 });

    return parseEntries(entries);
  } catch (error) {
    return [];
  }
};
