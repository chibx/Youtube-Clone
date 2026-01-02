import type { DefineComponent } from "vue";

export const LazyOpenSidebar = defineAsyncComponent(
    () => import("@/components/sidebar/OpenSidebar.vue")
);
export const LazyClosedSidebar = defineAsyncComponent(
    () => import("@/components/sidebar/ClosedSidebar.vue")
);
export const LazyMobileSearch = defineAsyncComponent(
    async () => import("@/components/header/MobileSearch.vue")
);
export const LazyDesktopSearch = defineAsyncComponent(
    async () => import("@/components/header/DesktopSearch.vue")
);

export function loadAsyncComp(comp: Component) {
    return (comp as any).__asyncLoader?.();
}
