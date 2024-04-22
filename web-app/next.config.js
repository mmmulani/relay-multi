/** @type {import('next').NextConfig} */
const path = require("path");
const webpack = require("webpack");

function graphQLRewrite() {
  // This plugin works around an issue with Next.js's Relay support.
  // Next.js's Relay plugin will convert the code like:
  //   const userFragment = graphql`...`
  // into:
  //   const userFragment = import('<artifactDirectory>/UserFragment.graphql.ts')
  // which works for Next.js projects with a single Relay folder. However, in our setup we have Relay files in
  // @cv/shared-web, with generated artifacts in that folder as well.
  // This plugin will rewrite the import statements for those graphql usages to match the correct artifactDirectory.
  return new webpack.NormalModuleReplacementPlugin(/\.graphql\.ts$/, (resource) => {
    const repoRoot = path.resolve(__dirname, '..'); // relay-multi/
    const sourceFile = resource.contextInfo.issuer; // relay-multi/shared/TestComponent.tsx

    const fileProjectDir = sourceFile.slice(repoRoot.length).split('/')[1]; // shared
    const currentRequest = path.resolve(resource.request); // relay-multi/<some dir>/__generated__/TestComponent_country.graphql.ts
    const fileName = path.basename(currentRequest); // TestComponent_country.graphql.ts

    const correctGraphQLPath = path.resolve(repoRoot, fileProjectDir, '__generated__', fileName);
    resource.request = correctGraphQLPath;
  });
}

const nextConfig = {
  compiler: {
    relay: {
      src: './',
      artifactDirectory: './__generated__',
      language: 'typescript',
    },
  },
  webpack: (config) => {
    config.plugins.push(graphQLRewrite());
    return config;
  },
};

module.exports = nextConfig;
