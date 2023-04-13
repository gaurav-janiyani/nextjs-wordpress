/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['localhost', 'localhost/nextwp/', 'http://localhost/nextwp', 'http://localhost/nextwp/wp-content/uploads'],
    // remotePatterns: [
    //   {
    //     protocol: 'http',
    //     hostname: 'localhost/nextwp/',
    //     port: '',
    //     pathname: 'localhost/nextwp/**',
    //   }
    // ]
    // domains: [
    //   process.env.WORDPRESS_API_URL.match(/(?!(w+)\.)\w*(?:\w+\.)+\w+/)[0], // Valid WP Image domain.
    //   '0.gravatar.com',
    //   '1.gravatar.com',
    //   '2.gravatar.com',
    //   'secure.gravatar.com',
    // ],
  }
}

module.exports = nextConfig
