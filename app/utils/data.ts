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
import type { TrackOpTypes } from "vue";
import PlaylistIcon from "~/components/svg/PlaylistIcon.vue";

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

export const ToExplore: DefaultItem[] = [
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
]

export const moreFromYT: MoreFromYT[] = [
    {
        title: "Youtube Premium",
        url: "/premium",
        imageUrl: "",
    },
    {
        title: "Youtube Studio",
        url: "/studio",
        imageUrl: "",
    },
    {
        title: "Youtube Music",
        url: "#",
        imageUrl: "",
    },
    {
        title: "Youtube Kids",
        url: "#",
        imageUrl: "",
    }
]