import {
  ClockIcon,
  Gamepad2Icon,
  HistoryIcon,
  HomeIcon,
  MusicIcon,
  NewspaperIcon,
  PlayCircleIcon,
  PlaySquareIcon,
  ThumbsUpIcon,
  TrophyIcon,
} from "lucide-vue-next";
import PlaylistIcon from "~/components/svg/PlaylistIcon.vue";
import YTKidsIcon from "~/components/svg/YTKidsIcon.vue";
import YTMusicIcon from "~/components/svg/YTMusicIcon.vue";
import YTPremiumIcon from "~/components/svg/YTPremiumIcon.vue";
import YTStudioIcon from "~/components/svg/YTStudioIcon.vue";
import type { DefaultItem, MoreFromYT } from "./sidebar";

export const sidebarHeader: DefaultItem[] = [
  {
    title: "Home",
    url: "/",
    icon: HomeIcon,
  },
  {
    title: "Shorts",
    url: "/shorts",
    icon: PlayCircleIcon,
  },
];

export const forYou: (userId?: string) => DefaultItem[] = (userId?: string) => {
  return [
    {
      title: "History",
      url: "/history",
      icon: HistoryIcon,
    },
    {
      title: "Playlist",
      url: "/playlist",
      icon: PlaylistIcon,
    },
    {
      title: "Watch Later",
      url: "/playlist/later",
      icon: ClockIcon,
    },
    {
      title: "Liked Videos",
      url: "/playlist/liked",
      icon: ThumbsUpIcon,
    },
    {
      title: "Your Videos",
      url: userId ? `/channel/${userId}/videos` : "",
      icon: PlaySquareIcon,
    },
  ];
};

export const toExplore: DefaultItem[] = [
  {
    title: "Music",
    url: "#",
    icon: MusicIcon,
  },
  {
    title: "Gaming",
    url: "#",
    icon: Gamepad2Icon,
  },
  {
    title: "News",
    url: "#",
    icon: NewspaperIcon,
  },
  {
    title: "Sports",
    url: "#",
    icon: TrophyIcon,
  },
];

export const moreFromYT: MoreFromYT[] = [
  {
    title: "Youtube Premium",
    url: "/premium",
    icon: YTPremiumIcon,
  },
  {
    title: "Youtube Studio",
    url: "/studio",
    icon: YTStudioIcon,
  },
  {
    title: "Youtube Music",
    url: "#",
    icon: YTMusicIcon,
  },
  {
    title: "Youtube Kids",
    url: "#",
    icon: YTKidsIcon,
  },
];
