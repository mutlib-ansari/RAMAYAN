// /** @type {import('tailwindcss').Config} */

// module.exports = {
//   content: ["./src/**/*.{html,js}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{html,js}"],
//   theme: {
//     container: {
//       center: true,
//       padding: {
//         DEFAULT: '1rem',
//         xl: '1rem', // Adjust padding at the xl breakpoint
//       },
//       screens: {
//         xl:'1560px', // Set custom width for xl breakpoint
//       },
//     },
//   },
// }

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{html,js}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }


// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   safelist: [
//     '!duration-[0ms]',
//     '!delay-[0ms]',
//     'html.js :where([class*="taos:"]:not(.taos-init))'
//   ],
//   content: {
//     // Add paths to all files where Tailwind classes are used.
//     files: ["./src/**/*.{html,js}"],
//     transform: (content) => content.replace(/taos:/g, ''), // Removes the 'taos:' prefix for animations
//   },
//   theme: {
//     extend: {
//       // You can add any theme extensions or customizations here.
//     },
//   },
//   plugins: [
//     require('taos/plugin') // Adds the TAOS plugin for scroll animations
//   ],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"], // Adjust paths to match your project structure
  theme: {
    
    extend: {
      // container: {
      //   center: true,
      // },
      keyframes: {
        fadeRight: {
          '0%': { opacity: '0', transform: 'translateX(-100%)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeLeft: {
          '0%': { opacity: '0', transform: 'translateX(100%)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      animation: {
        fadeRight: 'fadeRight 0.5s ease-out',
        fadeLeft: 'fadeLeft 0.5s ease-out',
      },
    },
  },
  plugins: [],
};

