/**
 * Theme Utilities
 * 
 * Generates CSS variables based on selected color palette
 */

import { colorPalettes, type ColorPaletteName } from './color-palettes';

export function generateThemeCSS(paletteName: ColorPaletteName): string {
  const palette = colorPalettes[paletteName];

  return `
    :root {
      /* ${palette.name} - Light Mode */
      --bg-primary: ${palette.light.bgPrimary};
      --bg-secondary: ${palette.light.bgSecondary};
      --bg-tertiary: ${palette.light.bgTertiary};
      
      --text-primary: ${palette.light.textPrimary};
      --text-secondary: ${palette.light.textSecondary};
      --text-muted: ${palette.light.textMuted};
      
      --accent: ${palette.light.accent};
      --accent-hover: ${palette.light.accentHover};
      --accent-light: ${palette.light.accentLight};
      
      --border: ${palette.light.border};
      --border-muted: ${palette.light.borderMuted};
    }

    .dark {
      /* ${palette.name} - Dark Mode */
      --bg-primary: ${palette.dark.bgPrimary};
      --bg-secondary: ${palette.dark.bgSecondary};
      --bg-tertiary: ${palette.dark.bgTertiary};
      
      --text-primary: ${palette.dark.textPrimary};
      --text-secondary: ${palette.dark.textSecondary};
      --text-muted: ${palette.dark.textMuted};
      
      --accent: ${palette.dark.accent};
      --accent-hover: ${palette.dark.accentHover};
      --accent-light: ${palette.dark.accentLight};
      
      --border: ${palette.dark.border};
      --border-muted: ${palette.dark.borderMuted};
    }
  `;
}
