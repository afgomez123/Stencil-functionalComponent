import type { Components, JSX } from "../types/components";

interface PersonalCard extends Components.PersonalCard, HTMLElement {}
export const PersonalCard: {
  prototype: PersonalCard;
  new (): PersonalCard;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
