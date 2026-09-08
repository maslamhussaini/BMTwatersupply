const config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/page.tsx",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#003B73",
        secondary: "#0077B6",
        accent: "#00A3E0",
        navy: "#0A1628",
      },
    },
  },
};

export default config;
