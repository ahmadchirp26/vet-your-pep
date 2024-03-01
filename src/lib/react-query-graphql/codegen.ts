const config = {
  schema: process.env.NEXT_PUBLIC_SERVER_GRAPHQL_URL,
  documents: ["./src/**/*.{ts,tsx}"],
  generates: {
    "./src/__generated__/": {
      preset: "client",
    },
  },
};

export default config;
