/** @type {import('tailwindcss').Config} */
const baseConfig = {
  darkMode: 'class',
  theme: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
    },
  },
  plugins: [require('tailwindcss-animate')],
};

/**
 * @param {Partial<import('tailwindcss').Config>} config
 * @returns {import('tailwindcss').Config}
 */
module.exports = function preset(config = {}) {
  return {
    ...baseConfig,
    ...config,
    theme: {
      ...baseConfig.theme,
      ...(config.theme || {}),
      colors: {
        ...baseConfig.theme.colors,
        ...(config.theme?.colors || {}),
      },
      borderRadius: {
        ...baseConfig.theme.borderRadius,
        ...(config.theme?.borderRadius || {}),
      },
    },
    plugins: [...(baseConfig.plugins || []), ...(config.plugins || [])],
  };
}; 