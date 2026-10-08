import { Caveat, Dancing_Script } from "next/font/google";
import { ColorScheme } from "./types/shared";

/**
 * "system" - follows the user's system appearance
 * "light" - forces your website to always use light theme
 * "dark" - forces your website to always use dark theme
 */
export const THEME: "system" | "light" | "dark" = "dark";

/**
 * Your App Store App ID without the 'id' prefix.
 * You can find it in your App Store Connect.
 * Go to your app -> App Information -> Apple ID.
 *
 * Example: "6502667826"
 */
export const APP_ID = "6475875255";

/**
 * Custom fonts for 'whimsical' and 'cursive' font styles.
 * Default system font is used for all other font styles.
 * See https://nextjs.org/docs/app/getting-started/fonts#google-fonts
 */
export const WHIMSICAL_FONT = Caveat({ subsets: ["latin"] });
export const CURSIVE_FONT = Dancing_Script({ subsets: ["latin"] });

export const MATERIAL_SYMBOLS = [
  "send",
  "check_circle",
  "star",
  "mail",
  "open_in_new",
  "open_in_full",
  "play_arrow",
  "pause",
  "lock",
  "target",
  "menu",
  "close",
] as const;

// Neutral
export const COLORS: ColorScheme = {
  LIGHT: {
    "text-primary": "#101b2c",
    "text-secondary": "rgba(37, 58, 87, 0.7)",
    "fill-0": "#ffffff",
    "fill-1": "#f1f6ff",
    "fill-2": "#e4edfb",
    "fill-3": "#d1def2",
    "accent-brand": "#3478f6",
    "accent-orange": "#f58a4a",
    "accent-green": "#34C759",
    "accent-red": "#FF3B30",
    "accent-blue": "#007AFF",
    "accent-indigo": "#5856D6",
    "accent-mint": "#00C7BE",
    "accent-purple": "#AF52DE",
    "accent-pink": "#FF2D55",
  },
  DARK: {
    "text-primary": "#f1f6ff",
    "text-secondary": "rgba(190, 207, 232, 0.72)",
    "fill-0": "#0a1220",
    "fill-1": "#0e1727",
    "fill-2": "#17243a",
    "fill-3": "#263750",
    "accent-brand": "#3478f6",
    "accent-orange": "#ff9a4a",
    "accent-green": "#30D158",
    "accent-red": "#FF453A",
    "accent-blue": "#0A84FF",
    "accent-indigo": "#5E5CE6",
    "accent-mint": "#63E6E2",
    "accent-purple": "#BF5AF2",
    "accent-pink": "#FF375F",
  }
} as const;

export const MAX_RELEASE_NOTES_PER_PAGE = 5;

export const IS_WAITLIST_ENABLED = false;
