/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: 'https://www.zgirdan.dev',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  exclude: [],
  robotsTxtOptions: {
    additionalSitemaps: [`https://www.zgirdan.dev/server-sitemap.xml`],
  },
}
config.robotsTxtOptions.policies = [{ userAgent: '*', allow: '/' }]

module.exports = config
