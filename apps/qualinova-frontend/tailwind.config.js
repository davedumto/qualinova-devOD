/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'gray-text-700': '#F8FAFC',
        'gray-border-800': '#27272A',
        'gray-text-50': '#FAFAFA',
        'gray-text-400': '#A1A1AA',
        'secondary-button-bg': '#2563EB',
        'black-text': '#18181B',
        'dark-blue-text': '#94A3B8',
        'dark-blue-border': '#1E293B',
        'success-light': '#DFFCE6',
        'success-dark': '#256532',
        'error-light': '#DBCDB8',
        'error-dark': '#923208',
      },
    },
  },
  plugins: [],
};
