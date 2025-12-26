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

// Could be codes
export enum NotificationsType {
    CommentLike = "cmt_lk",
    CommentRep = "cmt_rp",
}

export type YTNotification = {
    type: NotificationsType;
    picture?: string;
    avatarImg?: string;
    avatarName?: string; // used to populate the initials in case of no image
    title: string;
    date: Date | string;
    /** Account name causing the notification */
    actor?: string;
};

export type Categories = {
    cmp: [string, weight: number][]
    opt: [string, weight: number][]
}