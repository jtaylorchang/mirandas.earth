import moment from 'moment';

import { TBodyElement, TPost } from '@backend/blog';
import { log } from '@services/logService';

export const isImageElement = (element: TBodyElement) => {
  return element.type === 'image';
};

export const isParagraphElement = (element: TBodyElement) => {
  return element.type === 'paragraph';
};

export const isQuoteElement = (element: TBodyElement) => {
  return element.type === 'quote';
};

export const parseEntryBody = (entryBody: any): TBodyElement[] => {
  const body = [];

  return body;
};

export const parseEntry = (entry: any): TPost => {
  const post = {
    _id: entry.sys.id,
    category: entry.fields.category,
    date: moment(entry.fields.date).format('LL'),
    dateRaw: entry.fields.date,
    dateMoment: moment(entry.fields.date),
    title: entry.fields.title,
    description: entry.fields.description,
    body: entry.fields.body,
    image: entry.fields.image
      ? {
          url: entry.fields.image.fields.file.url
        }
      : null,
    featured: entry.fields.featured === true
  };

  return post;
};

export const parseEntries = (entries: any): TPost[] => {
  const posts = [];

  for (const entry of entries.items) {
    posts.push(parseEntry(entry));
  }

  posts.sort((a, b) => (a.dateMoment.isBefore(b.dateMoment) ? 1 : -1));

  return posts;
};
