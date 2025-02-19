


// const { nextui } = require("@nextui-org/theme");

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./app/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/**/*.{js,ts,jsx,tsx,mdx}",
//     "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   darkMode: "class",
//   plugins: [
//     nextui({
//       themes: {
//         light: {
//           colors: {
//             default: {
//               50: "#f5f7fa",
//               100: "#e4e7eb",
//               200: "#cbd2d9",
//               300: "#9aa5b1",
//               400: "#7b8794",
//               500: "#616e7c",
//               600: "#52606d",
//               700: "#3e4c59",
//               800: "#323f4b",
//               900: "#1f2933",
//               foreground: "#1f2933",
//               DEFAULT: "#9aa5b1",
//             },
//             primary: {
//               50: "#e3f8ff",
//               100: "#b3ecff",
//               200: "#81defd",
//               300: "#5ed0fa",
//               400: "#40c3f7",
//               500: "#2bb0ed",
//               600: "#1992d4",
//               700: "#127fbf",
//               800: "#0b69a3",
//               900: "#035388",
//               foreground: "#ffffff",
//               DEFAULT: "#2bb0ed",
//             },
//             secondary: {
//               50: "#e3fdf5",
//               100: "#c2f2e9",
//               200: "#8ce9d9",
//               300: "#57d9c4",
//               400: "#38c2ad",
//               500: "#2d9c91",
//               600: "#247f77",
//               700: "#1a645e",
//               800: "#0e4845",
//               900: "#003f3c",
//               foreground: "#ffffff",
//               DEFAULT: "#57d9c4",
//             },
//             success: {
//               50: "#effcf6",
//               100: "#c6f7e2",
//               200: "#8eecb6",
//               300: "#65d6ad",
//               400: "#3ebd93",
//               500: "#27ab83",
//               600: "#199473",
//               700: "#147d64",
//               800: "#0c6b58",
//               900: "#014d40",
//               foreground: "#ffffff",
//               DEFAULT: "#27ab83",
//             },
//             warning: {
//               50: "#fffbea",
//               100: "#fff3c4",
//               200: "#fce588",
//               300: "#fadb5f",
//               400: "#f7c948",
//               500: "#f0b429",
//               600: "#de911d",
//               700: "#cb6e17",
//               800: "#b44d12",
//               900: "#8d2b0b",
//               foreground: "#000000",
//               DEFAULT: "#f7c948",
//             },
//             danger: {
//               50: "#ffe3e3",
//               100: "#ffbdbd",
//               200: "#ff9b9b",
//               300: "#f86a6a",
//               400: "#ef4e4e",
//               500: "#e12d39",
//               600: "#cf1124",
//               700: "#ab091e",
//               800: "#8a041a",
//               900: "#610316",
//               foreground: "#ffffff",
//               DEFAULT: "#e12d39",
//             },
//             background: "#ffffff",
//             foreground: "#1f2933",
//           },
//         },
//         dark: {
//           colors: {
//             default: {
//               50: "#1f2933",
//               100: "#323f4b",
//               200: "#3e4c59",
//               300: "#52606d",
//               400: "#616e7c",
//               500: "#7b8794",
//               600: "#9aa5b1",
//               700: "#cbd2d9",
//               800: "#e4e7eb",
//               900: "#f5f7fa",
//               foreground: "#ffffff",
//               DEFAULT: "#616e7c",
//             },
//             primary: {
//               50: "#035388",
//               100: "#0b69a3",
//               200: "#127fbf",
//               300: "#1992d4",
//               400: "#2bb0ed",
//               500: "#40c3f7",
//               600: "#5ed0fa",
//               700: "#81defd",
//               800: "#b3ecff",
//               900: "#e3f8ff",
//               foreground: "#ffffff",
//               DEFAULT: "#2bb0ed",
//             },
//             secondary: {
//               50: "#003f3c",
//               100: "#0e4845",
//               200: "#1a645e",
//               300: "#247f77",
//               400: "#2d9c91",
//               500: "#38c2ad",
//               600: "#57d9c4",
//               700: "#8ce9d9",
//               800: "#c2f2e9",
//               900: "#e3fdf5",
//               foreground: "#ffffff",
//               DEFAULT: "#57d9c4",
//             },
//             success: {
//               50: "#014d40",
//               100: "#0c6b58",
//               200: "#147d64",
//               300: "#199473",
//               400: "#27ab83",
//               500: "#3ebd93",
//               600: "#65d6ad",
//               700: "#8eecb6",
//               800: "#c6f7e2",
//               900: "#effcf6",
//               foreground: "#ffffff",
//               DEFAULT: "#27ab83",
//             },
//             warning: {
//               50: "#8d2b0b",
//               100: "#b44d12",
//               200: "#cb6e17",
//               300: "#de911d",
//               400: "#f0b429",
//               500: "#f7c948",
//               600: "#fadb5f",
//               700: "#fce588",
//               800: "#fff3c4",
//               900: "#fffbea",
//               foreground: "#000000",
//               DEFAULT: "#f7c948",
//             },
//             danger: {
//               50: "#610316",
//               100: "#8a041a",
//               200: "#ab091e",
//               300: "#cf1124",
//               400: "#e12d39",
//               500: "#ef4e4e",
//               600: "#f86a6a",
//               700: "#ff9b9b",
//               800: "#ffbdbd",
//               900: "#ffe3e3",
//               foreground: "#ffffff",
//               DEFAULT: "#e12d39",
//             },
//             background: "#1f2933",
//             foreground: "#ffffff",
//           },
//         },
//       },
//       layout: {
//         fontSize: {
//           tiny: "0.75rem",
//           small: "0.875rem",
//           medium: "1rem",
//           large: "1.125rem",
//         },
//         lineHeight: {
//           tiny: "1rem",
//           small: "1.25rem",
//           medium: "1.5rem",
//           large: "1.75rem",
//         },
//         radius: {
//           small: "0.5rem",
//           medium: "0.75rem",
//           large: "0.875rem",
//         },
//         borderWidth: {
//           small: "1px",
//           medium: "2px",
//           large: "3px",
//         },
//         disabledOpacity: "0.5",
//         dividerWeight: "1",
//         hoverOpacity: "0.9",
//       },
//     }),
//   ],
// };


const { nextui } = require("@nextui-org/theme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    },
  },
  darkMode: "class",
  plugins:[
    nextui()
  ]
  // plugins: [
  //   nextui({
  //     themes: {
       
  //       light: {
  //         colors: {
  //           default: {
  //             50: "#f3f4f6",
  //             100: "#e5e7eb",
  //             200: "#d1d5db",
  //             300: "#9ca3af",
  //             400: "#6b7280",
  //             500: "#4b5563",
  //             600: "#374151",
  //             700: "#1f2937",
  //             800: "#111827",
  //             900: "#0f172a",
  //             foreground: "#1f2937",
  //             DEFAULT: "#9ca3af",
  //           },
  //           primary: {
  //             50: "#e3f2fd",
  //             100: "#bbdefb",
  //             200: "#90caf9",
  //             300: "#64b5f6",
  //             400: "#42a5f5",
  //             500: "#2196f3",
  //             600: "#1e88e5",
  //             700: "#1976d2",
  //             800: "#1565c0",
  //             900: "#0d47a1",
  //             foreground: "#ffffff",
  //             DEFAULT: "#2196f3",
  //           },
  //           secondary: {
  //             50: "#f3e5f5",
  //             100: "#e1bee7",
  //             200: "#ce93d8",
  //             300: "#ba68c8",
  //             400: "#ab47bc",
  //             500: "#9c27b0",
  //             600: "#8e24aa",
  //             700: "#7b1fa2",
  //             800: "#6a1b9a",
  //             900: "#4a148c",
  //             foreground: "#ffffff",
  //             DEFAULT: "#9c27b0",
  //           },
  //           success: {
  //             50: "#e8f5e9",
  //             100: "#c8e6c9",
  //             200: "#a5d6a7",
  //             300: "#81c784",
  //             400: "#66bb6a",
  //             500: "#4caf50",
  //             600: "#43a047",
  //             700: "#388e3c",
  //             800: "#2e7d32",
  //             900: "#1b5e20",
  //             foreground: "#ffffff",
  //             DEFAULT: "#4caf50",
  //           },
  //           warning: {
  //             50: "#fffde7",
  //             100: "#fff9c4",
  //             200: "#fff59d",
  //             300: "#fff176",
  //             400: "#ffee58",
  //             500: "#ffeb3b",
  //             600: "#fdd835",
  //             700: "#fbc02d",
  //             800: "#f9a825",
  //             900: "#f57f17",
  //             foreground: "#000000",
  //             DEFAULT: "#ffeb3b",
  //           },
  //           danger: {
  //             50: "#ffebee",
  //             100: "#ffcdd2",
  //             200: "#ef9a9a",
  //             300: "#e57373",
  //             400: "#ef5350",
  //             500: "#f44336",
  //             600: "#e53935",
  //             700: "#d32f2f",
  //             800: "#c62828",
  //             900: "#b71c1c",
  //             foreground: "#ffffff",
  //             DEFAULT: "#f44336",
  //           },
  //           background: "#ffffff",
  //           foreground: "#1f2937",
  //         },
  //       },
  //       dark: {
  //         colors: {
  //           default: {
  //             50: "#1f2937",
  //             100: "#374151",
  //             200: "#4b5563",
  //             300: "#6b7280",
  //             400: "#9ca3af",
  //             500: "#d1d5db",
  //             600: "#e5e7eb",
  //             700: "#f3f4f6",
  //             800: "#f9fafb",
  //             900: "#ffffff",
  //             foreground: "#ffffff",
  //             DEFAULT: "#9ca3af",
  //           },
  //           primary: {
  //             50: "#0d47a1",
  //             100: "#1565c0",
  //             200: "#1976d2",
  //             300: "#1e88e5",
  //             400: "#2196f3",
  //             500: "#42a5f5",
  //             600: "#64b5f6",
  //             700: "#90caf9",
  //             800: "#bbdefb",
  //             900: "#e3f2fd",
  //             foreground: "#ffffff",
  //             DEFAULT: "#2196f3",
  //           },
  //           secondary: {
  //             50: "#4a148c",
  //             100: "#6a1b9a",
  //             200: "#7b1fa2",
  //             300: "#8e24aa",
  //             400: "#9c27b0",
  //             500: "#ab47bc",
  //             600: "#ba68c8",
  //             700: "#ce93d8",
  //             800: "#e1bee7",
  //             900: "#f3e5f5",
  //             foreground: "#ffffff",
  //             DEFAULT: "#9c27b0",
  //           },
  //           success: {
  //             50: "#1b5e20",
  //             100: "#2e7d32",
  //             200: "#388e3c",
  //             300: "#43a047",
  //             400: "#4caf50",
  //             500: "#66bb6a",
  //             600: "#81c784",
  //             700: "#a5d6a7",
  //             800: "#c8e6c9",
  //             900: "#e8f5e9",
  //             foreground: "#ffffff",
  //             DEFAULT: "#4caf50",
  //           },
  //           warning: {
  //             50: "#f57f17",
  //             100: "#f9a825",
  //             200: "#fbc02d",
  //             300: "#fdd835",
  //             400: "#ffeb3b",
  //             500: "#ffee58",
  //             600: "#fff176",
  //             700: "#fff59d",
  //             800: "#fff9c4",
  //             900: "#fffde7",
  //             foreground: "#000000",
  //             DEFAULT: "#ffeb3b",
  //           },
  //           danger: {
  //             50: "#b71c1c",
  //             100: "#c62828",
  //             200: "#d32f2f",
  //             300: "#e53935",
  //             400: "#f44336",
  //             500: "#ef5350",
  //             600: "#e57373",
  //             700: "#ef9a9a",
  //             800: "#ffcdd2",
  //             900: "#ffebee",
  //             foreground: "#ffffff",
  //             DEFAULT: "#f44336",
  //           },
  //           background: "#1f2937",
  //           foreground: "#ffffff",
  //         },
  //       },
  //     },
  //     layout: {
  //       fontSize: {
  //         tiny: "0.75rem",
  //         small: "0.875rem",
  //         medium: "1rem",
  //         large: "1.125rem",
  //       },
  //       lineHeight: {
  //         tiny: "1rem",
  //         small: "1.25rem",
  //         medium: "1.5rem",
  //         large: "1.75rem",
  //       },
  //       radius: {
  //         small: "0.5rem",
  //         medium: "0.75rem",
  //         large: "0.875rem",
  //       },
  //       borderWidth: {
  //         small: "1px",
  //         medium: "2px",
  //         large: "3px",
  //       },
  //       disabledOpacity: "0.5",
  //       dividerWeight: "1",
  //       hoverOpacity: "0.9",
  //     },
  //   }),
  // ],
};
