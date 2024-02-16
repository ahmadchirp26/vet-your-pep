const config = {
  schema: "http://localhost:5000/graphql",
  documents: ["./src/**/*.{ts,tsx}"],
  generates: {
    "./src/__generated__/": {
      preset: "client",
    },
  },
};

export default config;
