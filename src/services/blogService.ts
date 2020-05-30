import { TBodyElement } from '@backend/blog';

export const isImageElement = (element: TBodyElement) => {
  return element.type === 'image';
};

export const isParagraphElement = (element: TBodyElement) => {
  return element.type === 'paragraph';
};

export const isQuoteElement = (element: TBodyElement) => {
  return element.type === 'quote';
};
