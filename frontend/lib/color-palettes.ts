/**
 * Color Palettes
 * 
 * Multiple color schemes for both light and dark modes.
 * Select your preferred palette in config.ts
 */

export type ColorPalette = {
    light: {
        bgPrimary: string;
        bgSecondary: string;
        bgTertiary: string;
        textPrimary: string;
        textSecondary: string;
        textMuted: string;
        accent: string;
        accentHover: string;
        accentLight: string;
        border: string;
        borderMuted: string;
    };
    dark: {
        bgPrimary: string;
        bgSecondary: string;
        bgTertiary: string;
        textPrimary: string;
        textSecondary: string;
        textMuted: string;
        accent: string;
        accentHover: string;
        accentLight: string;
        border: string;
        borderMuted: string;
    };
};

export const colorPalettes = {
    // Default: Professional Indigo (Current)
    indigo: {
        name: 'Professional Indigo',
        description: 'Clean, professional look with indigo accents',
        light: {
            bgPrimary: '#F8FAFC',
            bgSecondary: '#FFFFFF',
            bgTertiary: '#F1F5F9',
            textPrimary: '#111827',
            textSecondary: '#6B7280',
            textMuted: '#9CA3AF',
            accent: '#6366F1',
            accentHover: '#4F46E5',
            accentLight: '#818CF8',
            border: '#E5E7EB',
            borderMuted: '#F3F4F6',
        },
        dark: {
            bgPrimary: '#0F1115',
            bgSecondary: '#161A23',
            bgTertiary: '#1C2230',
            textPrimary: '#F9FAFB',
            textSecondary: '#9CA3AF',
            textMuted: '#6B7280',
            accent: '#818CF8',
            accentHover: '#6366F1',
            accentLight: '#A5B4FC',
            border: '#374151',
            borderMuted: '#1F2937',
        },
    },

    // Ocean: Teal/Cyan theme
    ocean: {
        name: 'Ocean Blue',
        description: 'Refreshing ocean-inspired teal and cyan tones',
        light: {
            bgPrimary: '#F0FDFA',
            bgSecondary: '#FFFFFF',
            bgTertiary: '#CCFBF1',
            textPrimary: '#134E4A',
            textSecondary: '#0F766E',
            textMuted: '#5EEAD4',
            accent: '#14B8A6',
            accentHover: '#0D9488',
            accentLight: '#2DD4BF',
            border: '#99F6E4',
            borderMuted: '#CCFBF1',
        },
        dark: {
            bgPrimary: '#042F2E',
            bgSecondary: '#134E4A',
            bgTertiary: '#115E59',
            textPrimary: '#F0FDFA',
            textSecondary: '#99F6E4',
            textMuted: '#5EEAD4',
            accent: '#2DD4BF',
            accentHover: '#14B8A6',
            accentLight: '#5EEAD4',
            border: '#0F766E',
            borderMuted: '#115E59',
        },
    },

    // Sunset: Warm orange/amber theme
    sunset: {
        name: 'Sunset Warmth',
        description: 'Warm and inviting amber and orange hues',
        light: {
            bgPrimary: '#FFFBEB',
            bgSecondary: '#FFFFFF',
            bgTertiary: '#FEF3C7',
            textPrimary: '#78350F',
            textSecondary: '#92400E',
            textMuted: '#D97706',
            accent: '#F59E0B',
            accentHover: '#D97706',
            accentLight: '#FBBF24',
            border: '#FDE68A',
            borderMuted: '#FEF3C7',
        },
        dark: {
            bgPrimary: '#1C1917',
            bgSecondary: '#292524',
            bgTertiary: '#44403C',
            textPrimary: '#FEF3C7',
            textSecondary: '#FDE68A',
            textMuted: '#FCD34D',
            accent: '#FBBF24',
            accentHover: '#F59E0B',
            accentLight: '#FDE68A',
            border: '#78350F',
            borderMuted: '#57534E',
        },
    },

    // Purple: Royal purple theme
    purple: {
        name: 'Royal Purple',
        description: 'Bold and creative purple gradient',
        light: {
            bgPrimary: '#FAF5FF',
            bgSecondary: '#FFFFFF',
            bgTertiary: '#F3E8FF',
            textPrimary: '#581C87',
            textSecondary: '#7C3AED',
            textMuted: '#A78BFA',
            accent: '#A855F7',
            accentHover: '#9333EA',
            accentLight: '#C084FC',
            border: '#E9D5FF',
            borderMuted: '#F3E8FF',
        },
        dark: {
            bgPrimary: '#1E1B4B',
            bgSecondary: '#312E81',
            bgTertiary: '#3730A3',
            textPrimary: '#FAF5FF',
            textSecondary: '#DDD6FE',
            textMuted: '#C4B5FD',
            accent: '#C084FC',
            accentHover: '#A855F7',
            accentLight: '#DDD6FE',
            border: '#6366F1',
            borderMuted: '#4C1D95',
        },
    },

    // Emerald: Fresh green theme
    emerald: {
        name: 'Emerald Fresh',
        description: 'Natural and energetic emerald green',
        light: {
            bgPrimary: '#F0FDF4',
            bgSecondary: '#FFFFFF',
            bgTertiary: '#DCFCE7',
            textPrimary: '#14532D',
            textSecondary: '#166534',
            textMuted: '#22C55E',
            accent: '#10B981',
            accentHover: '#059669',
            accentLight: '#34D399',
            border: '#BBF7D0',
            borderMuted: '#DCFCE7',
        },
        dark: {
            bgPrimary: '#022C22',
            bgSecondary: '#064E3B',
            bgTertiary: '#065F46',
            textPrimary: '#F0FDF4',
            textSecondary: '#A7F3D0',
            textMuted: '#6EE7B7',
            accent: '#34D399',
            accentHover: '#10B981',
            accentLight: '#6EE7B7',
            border: '#047857',
            borderMuted: '#065F46',
        },
    },

    // Rose: Modern pink/rose theme
    rose: {
        name: 'Modern Rose',
        description: 'Elegant rose and pink tones',
        light: {
            bgPrimary: '#FFF1F2',
            bgSecondary: '#FFFFFF',
            bgTertiary: '#FFE4E6',
            textPrimary: '#881337',
            textSecondary: '#9F1239',
            textMuted: '#FB7185',
            accent: '#F43F5E',
            accentHover: '#E11D48',
            accentLight: '#FB7185',
            border: '#FECDD3',
            borderMuted: '#FFE4E6',
        },
        dark: {
            bgPrimary: '#1F1315',
            bgSecondary: '#2D1B1E',
            bgTertiary: '#3F2832',
            textPrimary: '#FFF1F2',
            textSecondary: '#FECDD3',
            textMuted: '#FDA4AF',
            accent: '#FB7185',
            accentHover: '#F43F5E',
            accentLight: '#FECDD3',
            border: '#9F1239',
            borderMuted: '#4C0519',
        },
    },

    // Slate: Minimal monochrome
    slate: {
        name: 'Minimal Slate',
        description: 'Clean monochrome with subtle blue undertones',
        light: {
            bgPrimary: '#F8FAFC',
            bgSecondary: '#FFFFFF',
            bgTertiary: '#F1F5F9',
            textPrimary: '#0F172A',
            textSecondary: '#475569',
            textMuted: '#94A3B8',
            accent: '#334155',
            accentHover: '#1E293B',
            accentLight: '#64748B',
            border: '#E2E8F0',
            borderMuted: '#F1F5F9',
        },
        dark: {
            bgPrimary: '#0F172A',
            bgSecondary: '#1E293B',
            bgTertiary: '#334155',
            textPrimary: '#F8FAFC',
            textSecondary: '#CBD5E1',
            textMuted: '#94A3B8',
            accent: '#94A3B8',
            accentHover: '#CBD5E1',
            accentLight: '#E2E8F0',
            border: '#475569',
            borderMuted: '#334155',
        },
    },

    // Cyber: High-contrast cyberpunk
    cyber: {
        name: 'Cyber Neon',
        description: 'High-contrast cyberpunk aesthetic with neon accents',
        light: {
            bgPrimary: '#FAFAFA',
            bgSecondary: '#FFFFFF',
            bgTertiary: '#F4F4F5',
            textPrimary: '#09090B',
            textSecondary: '#3F3F46',
            textMuted: '#71717A',
            accent: '#EC4899',
            accentHover: '#DB2777',
            accentLight: '#F472B6',
            border: '#E4E4E7',
            borderMuted: '#F4F4F5',
        },
        dark: {
            bgPrimary: '#000000',
            bgSecondary: '#0A0A0A',
            bgTertiary: '#18181B',
            textPrimary: '#00FF9F',
            textSecondary: '#00D9FF',
            textMuted: '#A1A1AA',
            accent: '#FF00FF',
            accentHover: '#EC4899',
            accentLight: '#F0ABFC',
            border: '#27272A',
            borderMuted: '#18181B',
        },
    },
    dracula: {
        name: 'Dracula',
        description: 'Dark editor style palette with purple and pink accents',
        light: {
            bgPrimary: '#F8F8F2',
            bgSecondary: '#FFFFFF',
            bgTertiary: '#F1F1F0',
            textPrimary: '#282A36',
            textSecondary: '#44475A',
            textMuted: '#6272A4',
            accent: '#BD93F9',
            accentHover: '#A679F5',
            accentLight: '#D6ACFF',
            border: '#E6E6E6',
            borderMuted: '#F1F1F0',
        },
        dark: {
            bgPrimary: '#282A36',
            bgSecondary: '#303341',
            bgTertiary: '#383A59',
            textPrimary: '#F8F8F2',
            textSecondary: '#E2E2DC',
            textMuted: '#BD93F9',
            accent: '#FF79C6',
            accentHover: '#FF92D0',
            accentLight: '#BD93F9',
            border: '#44475A',
            borderMuted: '#303341',
        },

    },
    nord: {
        name: 'Nord Arctic',
        description: 'Calm nordic palette with cool blues and subtle contrast',
        light: {
            bgPrimary: '#ECEFF4',
            bgSecondary: '#FFFFFF',
            bgTertiary: '#E5E9F0',
            textPrimary: '#2E3440',
            textSecondary: '#4C566A',
            textMuted: '#6B7280',
            accent: '#5E81AC',
            accentHover: '#4C6E91',
            accentLight: '#81A1C1',
            border: '#D8DEE9',
            borderMuted: '#E5E9F0',
        },
        dark: {
            bgPrimary: '#2E3440',
            bgSecondary: '#3B4252',
            bgTertiary: '#434C5E',
            textPrimary: '#ECEFF4',
            textSecondary: '#D8DEE9',
            textMuted: '#A3AAB7',
            accent: '#81A1C1',
            accentHover: '#5E81AC',
            accentLight: '#88C0D0',
            border: '#4C566A',
            borderMuted: '#3B4252',
        },
    },
    materialBlue: {
        name: 'Material Blue',
        description: 'Clean material design blue palette',
        light: {
            bgPrimary: '#F5F7FA',
            bgSecondary: '#FFFFFF',
            bgTertiary: '#E3F2FD',
            textPrimary: '#1A237E',
            textSecondary: '#3949AB',
            textMuted: '#7986CB',
            accent: '#3F51B5',
            accentHover: '#303F9F',
            accentLight: '#5C6BC0',
            border: '#C5CAE9',
            borderMuted: '#E8EAF6',
        },
        dark: {
            bgPrimary: '#0D1117',
            bgSecondary: '#161B22',
            bgTertiary: '#1F2937',
            textPrimary: '#E3F2FD',
            textSecondary: '#90CAF9',
            textMuted: '#64B5F6',
            accent: '#3F51B5',
            accentHover: '#5C6BC0',
            accentLight: '#90CAF9',
            border: '#374151',
            borderMuted: '#1F2937',
        },
    },
    github: {
        name: 'GitHub',
        description: 'Inspired by GitHub UI colors',
        light: {
            bgPrimary: '#F6F8FA',
            bgSecondary: '#FFFFFF',
            bgTertiary: '#F3F4F6',
            textPrimary: '#24292F',
            textSecondary: '#57606A',
            textMuted: '#8C959F',
            accent: '#0969DA',
            accentHover: '#0550AE',
            accentLight: '#218BFF',
            border: '#D0D7DE',
            borderMuted: '#EAECEF',
        },
        dark: {
            bgPrimary: '#0D1117',
            bgSecondary: '#161B22',
            bgTertiary: '#21262D',
            textPrimary: '#E6EDF3',
            textSecondary: '#8B949E',
            textMuted: '#6E7681',
            accent: '#2F81F7',
            accentHover: '#1F6FEB',
            accentLight: '#58A6FF',
            border: '#30363D',
            borderMuted: '#21262D',
        },
    },
    mint: {
  name: 'Mint Fresh',
  description: 'Soft mint greens with clean UI feel',
  light: {
    bgPrimary: '#F6FFFA',
    bgSecondary: '#FFFFFF',
    bgTertiary: '#E6FFF5',
    textPrimary: '#064E3B',
    textSecondary: '#047857',
    textMuted: '#10B981',
    accent: '#14B8A6',
    accentHover: '#0D9488',
    accentLight: '#5EEAD4',
    border: '#A7F3D0',
    borderMuted: '#D1FAE5',
  },
  dark: {
    bgPrimary: '#022C22',
    bgSecondary: '#064E3B',
    bgTertiary: '#065F46',
    textPrimary: '#ECFDF5',
    textSecondary: '#A7F3D0',
    textMuted: '#6EE7B7',
    accent: '#14B8A6',
    accentHover: '#0D9488',
    accentLight: '#5EEAD4',
    border: '#065F46',
    borderMuted: '#064E3B',
  },
}
} as const;

export type ColorPaletteName = keyof typeof colorPalettes;

// Helper to get palette colors
export function getPaletteColors(paletteName: ColorPaletteName): ColorPalette {
    return colorPalettes[paletteName];
}
