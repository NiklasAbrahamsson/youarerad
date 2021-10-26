const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = {
  swcMinify: true,
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ]
  },
  experimental: { esmExternals: true },
  reactStrictMode: true,
  env: {
    BASE_URL: process.env.BASE_URL,
  },

  eslint: {
    ignoreDuringBuilds: true,
  },

  images: {
    domains: ['res.cloudinary.com', 'pbs.twimg.com', 'abs.twimg.com'],
  },
  i18n: {
    locales: ['en-US'],
    defaultLocale: 'en-US',
  },
}
// https://securityheaders.com
const ContentSecurityPolicy = `
  default-src 'self';
  frame-src 'self' https://checkout.stripe.com https://js.stripe.com https://hooks.stripe.com https://www.linkedin.com;
  script-src 'self' 'unsafe-eval' 'unsafe-inline' https://checkout.stripe.com https://js.stripe.com https://cdn.usefathom.com/ https://app.usefathom.com/#site=2251799817005464;
  child-src *.youtube.com *.google.com;
  style-src 'self' 'unsafe-inline' *.googleapis.com;
  media-src 'self' *.cloudinary.com ;
  img-src 'self' *.cloudinary.com https://*.stripe.com data: abs.twimg.com https://pbs.twimg.com ton.twimg.com platform.twitter.com https://syndication.twitter.com https://cdn.usefathom.com/ https://app.usefathom.com/#site=2251799817005464;
  connect-src * https://api.stripe.com https://checkout.stripe.com;
  font-src 'self';
`
const securityHeaders = [
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy.replace(/\n/g, ''),
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin',
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options
  {
    key: 'X-Frame-Options',
    value: 'DENY',
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-DNS-Prefetch-Control
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains; preload',
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Feature-Policy
  // Opt-out of Google FLoC: https://amifloced.org/
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
  },
]
