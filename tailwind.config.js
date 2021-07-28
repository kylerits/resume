module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  mode: 'jit',
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: [{
            p: {
              fontFamily: theme('fontFamily.serif'),
              marginTop: '0px',
              fontSize: theme('fontSize.lg'),
              '&:not(last-child)': {
                marginBottom: theme('spacing.8'),
              },
            },
            a: {
              color: theme('colors.red.700'),
              fontWeight: 'bold',
              transition: 'all 300ms',
              '&:hover': {
                color: theme('colors.red.800'),
              }
            }
          }]
        },
        lg: {
          css: [{
            h1: {
              marginBottom: '0px',
            },
            p: {
              'lead': {
                'lead': {
                  marginTop: '0px',
                },
              }
            }
          }]
        }
      }),
      colors: {
        gray: {
          100: '#f7fafc',
          200: '#edf2f7',
          300: '#e2e8f0',
          400: '#cbd5e0',
          500: '#a0aec0',
          600: '#718096',
          700: '#4a5568',
          800: '#2d3748',
          900: '#1a202c',
        },
        red: {
          100: '#FFF2F2',
          200: '#FFE0E1',
          300: '#FCBFC2',
          400: '#FA9B9F',
          500: '#F27D83',
          600: '#EC5B62',
          700: '#D83C44',
          800: '#CA2830',
          900: '#A6161D',
        },
        orange: {
          100: '#fffaf0',
          200: '#feebc8',
          300: '#fbd38d',
          400: '#f6ad55',
          500: '#ed8936',
          600: '#dd6b20',
          700: '#c05621',
          800: '#9c4221',
          900: '#7b341e',
        },
        yellow: {
          100: '#fffff0',
          200: '#fefcbf',
          300: '#faf089',
          400: '#f6e05e',
          500: '#ecc94b',
          600: '#d69e2e',
          700: '#b7791f',
          800: '#975a16',
          900: '#744210',
        },
        green: {
          100: '#EDFBF6',
          200: '#DCF7ED',
          300: '#BFE9D9',
          400: '#95CEB8',
          500: '#7EB09D',
          600: '#6B9686',
          700: '#517165',
          800: '#374E46',
          900: '#131C19',
        },
        teal: {
          100: '#e6fffa',
          200: '#b2f5ea',
          300: '#81e6d9',
          400: '#4fd1c5',
          500: '#38b2ac',
          600: '#319795',
          700: '#2c7a7b',
          800: '#285e61',
          900: '#234e52',
        },
        blue: {
          100: '#ebf8ff',
          200: '#bee3f8',
          300: '#90cdf4',
          400: '#63b3ed',
          500: '#4299e1',
          600: '#3182ce',
          700: '#2b6cb0',
          800: '#2c5282',
          900: '#2a4365',
        },
        indigo: {
          100: '#EDF6F8',
          200: '#EDF6F8',
          300: '#DFEEF1',
          400: '#CADDE0',
          500: '#ADC2C6',
          600: '#8BA2A6',
          700: '#63777B',
          800: '#3B4A4D',
          900: '#202A2C',
        },
        purple: {
          100: '#faf5ff',
          200: '#e9d8fd',
          300: '#d6bcfa',
          400: '#b794f4',
          500: '#9f7aea',
          600: '#805ad5',
          700: '#6b46c1',
          800: '#553c9a',
          900: '#44337a',
        },
        pink: {
          100: '#fff5f7',
          200: '#fed7e2',
          300: '#fbb6ce',
          400: '#f687b3',
          500: '#ed64a6',
          600: '#d53f8c',
          700: '#b83280',
          800: '#97266d',
          900: '#702459',
        },
        facebook: '#3B5998',
        twitter: '#1DA1F2',
        instagram: '#C13584',
        linkedin: '#0077B5',
      },
      fontFamily: {
        sans: [
          'Cabin',
          'museo-sans',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
        serif: [
          'EBGaramond',
          'Georgia',
          'Cambria',
          '"Times New Roman"',
          'Times',
          'serif',
        ],
        mono: [
          'Menlo',
          'Monaco',
          'Consolas',
          '"Liberation Mono"',
          '"Courier New"',
          'monospace',
        ],
      },
    },
    container: {
      center: true,
      padding: '1rem',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
