import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'neon-pink': "var(--neon-pink)",
        'neon-blue': "var(--neon-blue)",
        'neon-purple': "var(--neon-purple)",
        'dark-bg': "var(--dark-bg)",
        'darker-bg': "var(--darker-bg)",
      },
      boxShadow: {
        'neon': '0 0 5px var(--neon-pink), 0 0 20px var(--neon-pink)',
        'neon-strong': '0 0 10px var(--neon-pink), 0 0 30px var(--neon-pink)',
      },
    },
  },
  plugins: [],
} satisfies Config;
