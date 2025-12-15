import type { Subscription } from "~/utils/sidebar";

const MockChannelId = "x123456X";

function randomSubscriptions(): Subscription[] {
  const subs: Subscription[] = [];
  for (let i = 0; i < 15; i++) {
    subs.push({
      name: "John Hammond",
      newContent: Math.random() > 0.5 ? true : false,
      channelId: MockChannelId,
      imageUrl: "/yt-thumb.webp",
    });
  }

  return subs;
}

export const useUser = defineStore("user", () => {
  const subs = ref(randomSubscriptions());

  return {
    subs,
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUser, import.meta.hot));
}
