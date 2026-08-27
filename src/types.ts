import type { WeddingWebsite } from "../types/WeddingSchema";

export type WeddingPage =
  | "home"
  | "story"
  | "events"
  | "details"
  | "gallery";

export type TemplateProps = {
  wedding: WeddingWebsite;
  page: WeddingPage;
};

export type TemplateDefinition = {
  slug: string;
  name: string;
  description: string;
  component: React.ComponentType<TemplateProps>;
};
