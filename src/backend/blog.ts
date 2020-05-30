export interface TMinimumBodyElement {
  type: string;
}

export interface TAttributedImage {
  attribution: string;
  source: string;
}

export interface TImageElement extends TMinimumBodyElement {
  type: 'image';
  image: TAttributedImage;
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
  title: string;
  description: string;
  body: TBodyElement[];
  image?: TAttributedImage;
}
