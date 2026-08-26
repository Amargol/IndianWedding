import type { WeddingWebsite } from "../types/WeddingSchema";

export type TemplateProps = {
  wedding: WeddingWebsite;
};

export type TemplateDefinition = {
  slug: string;
  name: string;
  subtitle: string;
  description: string;
  palette: [string, string, string];
  previewImage: string;
  component: React.ComponentType<TemplateProps>;
};
