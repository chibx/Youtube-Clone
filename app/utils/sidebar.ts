export type Subscription = {
  title: string;
  url: string;
  imageUrl: string;
  newContent: boolean;
};

export type DefaultItem = {
  title: string;
  url: string;
  icon: Component;
};

export type MoreFromYT = Omit<Subscription, 'newContent'>