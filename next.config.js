// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('node:path');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
// const nextConfig = {
// 	experimental: {
// 		appDir: true,
// 	}, sassOptions: {
// 		includePaths: [path.join(__dirname, 'styles')],
// 	},
// }

module.exports = withBundleAnalyzer({
  webpack: (config, { isServer }) => {
    // Add a new loader for Markdown files
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    });
    // Add an alias for the 'components' directory
    config.resolve.alias['components'] = path.join(__dirname, 'components');

    // Customize the output configuration for server bundles
    if (isServer) {
      config.output.libraryTarget = 'commonjs2';
    }

    return config;
  },
  experimental: {
    appDir: true,
	isr:true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
});
