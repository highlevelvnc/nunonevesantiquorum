import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Fixa o root para evitar deteção de lockfiles fora do projeto.
  outputFileTracingRoot: __dirname,
};

export default nextConfig;
