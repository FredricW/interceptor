const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');
const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  // prefix: 'i-',
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  darkMode: ['class', 'i-dark'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--i-border))',
        input: 'hsl(var(--i-input))',
        ring: 'hsl(var(--i-ring))',
        background: 'hsl(var(--i-background))',
        foreground: 'hsl(var(--i-foreground))',
        primary: {
          DEFAULT: 'hsl(var(--i-primary))',
          foreground: 'hsl(var(--i-primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--i-secondary))',
          foreground: 'hsl(var(--i-secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--i-destructive))',
          foreground: 'hsl(var(--i-destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--i-muted))',
          foreground: 'hsl(var(--i-muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--i-accent))',
          foreground: 'hsl(var(--i-accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--i-popover))',
          foreground: 'hsl(var(--i-popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--i-card))',
          foreground: 'hsl(var(--i-card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--i-radius)',
        md: 'calc(var(--i-radius) - 2px)',
        sm: 'calc(var(--i-radius) - 4px)',
      },
      fontFamily: {
        sans: ['var(--i-font-sans)', ...fontFamily.sans],
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--i-radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--i-radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
