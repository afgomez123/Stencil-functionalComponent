import type { Components, JSX } from "../types/components";

interface WebtrainingVideoPlayer extends Components.WebtrainingVideoPlayer, HTMLElement {}
export const WebtrainingVideoPlayer: {
  prototype: WebtrainingVideoPlayer;
  new (): WebtrainingVideoPlayer;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
