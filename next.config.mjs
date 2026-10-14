const bp = process.env.NEXT_PUBLIC_BASE_PATH || '';
export default { output: 'export', trailingSlash: true, basePath: bp, assetPrefix: bp || undefined, images: { unoptimized: true }, reactStrictMode: true, experimental: { inlineCss: true } };
