import type { WeddingWebsite } from "../../../types/WeddingSchema";

export type SaanjhStylePreset = {
  id: string;
  name: string;
  primary: string;
  accent: string;
  paper: string;
  ink: string;
  typography: "editorial" | "romantic" | "modern";
  surface: "silk" | "parchment" | "dusk" | "gulal";
  imageTreatment: "natural" | "soft" | "jewel" | "monochrome";
  effect: "petals" | "fireflies" | "sparkle" | "rangoli" | "none";
};

export const saanjhStylePresets: SaanjhStylePreset[] = [
  {
    id: "emerald-palace",
    name: "Emerald Palace",
    primary: "#173f35",
    accent: "#cf9145",
    paper: "#f8f1e6",
    ink: "#17251f",
    typography: "editorial",
    surface: "silk",
    imageTreatment: "jewel",
    effect: "fireflies",
  },
  {
    id: "gulabi-garden",
    name: "Gulabi Garden",
    primary: "#6d2438",
    accent: "#e2a65a",
    paper: "#fff2ec",
    ink: "#3d1d25",
    typography: "romantic",
    surface: "gulal",
    imageTreatment: "soft",
    effect: "petals",
  },
  {
    id: "midnight-sangeet",
    name: "Midnight Sangeet",
    primary: "#192442",
    accent: "#e0b965",
    paper: "#f4efe5",
    ink: "#182034",
    typography: "editorial",
    surface: "dusk",
    imageTreatment: "jewel",
    effect: "sparkle",
  },
  {
    id: "marigold-morning",
    name: "Marigold Morning",
    primary: "#813a20",
    accent: "#f0ae35",
    paper: "#fff4dc",
    ink: "#3d271c",
    typography: "modern",
    surface: "parchment",
    imageTreatment: "natural",
    effect: "rangoli",
  },
  {
    id: "lotus-twilight",
    name: "Lotus Twilight",
    primary: "#49304f",
    accent: "#d6a29c",
    paper: "#f7efee",
    ink: "#302332",
    typography: "romantic",
    surface: "silk",
    imageTreatment: "soft",
    effect: "petals",
  },
  {
    id: "ivory-heirloom",
    name: "Ivory Heirloom",
    primary: "#31312c",
    accent: "#b58b55",
    paper: "#f5f0e6",
    ink: "#292823",
    typography: "editorial",
    surface: "parchment",
    imageTreatment: "monochrome",
    effect: "none",
  },
];

function stableIndex(value: string) {
  return [...value].reduce((total, character) => total + character.charCodeAt(0), 0) % saanjhStylePresets.length;
}

export function styleForWedding(wedding: WeddingWebsite): SaanjhStylePreset {
  const preset = saanjhStylePresets[stableIndex(wedding.id)];
  return {
    ...preset,
    primary: wedding.settings?.primaryColor ?? preset.primary,
    accent: wedding.settings?.secondaryColor ?? preset.accent,
  };
}
