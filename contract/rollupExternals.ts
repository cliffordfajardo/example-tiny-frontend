export const rollupExternals = {
  external: ["react"],
  output: {
    globals: {
      react: "React",
    },
  },
};
