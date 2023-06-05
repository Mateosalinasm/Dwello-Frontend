/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      lineHeight: {
        '11': '2.5rem',
        '12': '3rem',
        '14': '3.5rem',
        '16': '4rem',
        '18': '4.5rem',
        '20': '5rem',
        '22': '5.5rem',
        '24': '6rem',
        '26': '6.5rem',
        '28': '7rem',
        '30': '7.5rem',
        '32': '8rem',
        '34': '8.5rem',
        '36': '9rem',
        '38': '9.5rem',
        '40': '10rem',
      },
      scale: {
        '175': '1.75',
        '200': '2',
        '225': '2.25',
        '250': '2.5',
        '275': '2.75',
        '300': '3',
        '325': '3.25',
        '350': '3.5',
        '375': '3.75',
        '400': '4',
        '425': '4.25',
        '450': '4.5',
        '475': '4.75',
        '500': '5',
        '525': '5.25',
        '550': '5.5',
        '575': '5.75',
        '600': '6',
        '625': '6.25',
        '650': '6.5',
      },
      backdropBlur: {
        xs: '2px',
      },
      width: {
        '100': '28rem',
        '128': '32rem',
        '136': '40rem',
        '150': '50rem',
        '256': '64rem',

      }
    },
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
      '6xl': '3.812rem',
      '7xl': '4.929rem',
      '8xl': '6rem',
      '9xl': '8rem',
      '10xl': '10rem',
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography')
  ],
}

