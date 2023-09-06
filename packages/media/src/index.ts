import type { Widget } from "@easyblocks/core";
import { mockMediaPicker } from "./mediaPicker";

export { fetchEasyblocksMediaResources } from "./index.react-server";

export const easyblocksImageWidget: Widget = {
  id: "@easyblocks/image",
  label: "Easyblocks",
  component: () => mockMediaPicker("image"),
};

export const easyblocksVideoWidget: Widget = {
  id: "@easyblocks/video",
  label: "Easyblocks",
  component: () => mockMediaPicker("video"),
};