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
//     extend: {},
//   },
//   plugins: [],
// }
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        xl: '3rem', // Adjust padding at the xl breakpoint
      },
      screens: {
        xl: '1360px', // Set custom width for xl breakpoint
      },
    },
  },
}
