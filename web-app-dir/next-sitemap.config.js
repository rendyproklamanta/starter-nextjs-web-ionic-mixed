const Metadata = require('./configs/metadata');

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: Metadata.url,
  generateRobotsTxt: true, // (optional)
  // ...other options
  autoLastmod: false,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
};
