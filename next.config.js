/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
const env = await import("./src/env.js");

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: env.env.NEXT_PUBLIC_AWS_S3_FILE_HOST,
        protocol: "https",
      },
    ],
  },
};

export default config;
