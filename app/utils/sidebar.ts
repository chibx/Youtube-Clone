export type Subscription = {
  name: string;
  channelId: string;
  imageUrl: string;
  newContent: boolean;
};

export type DefaultItem = {
  title: string;
  url: string;
  icon: Component;
};

export type MoreFromYT = Omit<DefaultItem, "newContent">;
