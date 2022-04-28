export type children = string | element | element[];

export interface element {
  name?: string;
  tag: string;
  attributes?: any;
  children: children;
}

export interface scheme {
  page: {
    children: children;
  };
}
