module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: 'We Three Travel - a families travel blog', // Navigation and Site Title
  titleAlt: 'We Three Travel', // Title for JSONLD
  description: 'A travel blog that focuses on budget sustainable international travel with a family',
  headline: 'Writing and publishing content for We Three Travel', // Headline for schema.org JSONLD
  url: 'https://www.wethreetravel.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  logo: '/logos/logo-1024.png', // Used for SEO
  ogLanguage: 'en_US', // Facebook Language

  // JSONLD / Manifest
  favicon: 'src/favicon.png', // Used for manifest favicon generation
  shortName: 'W3T', // shortname for manifest. MUST be shorter than 12 characters
  author: 'Randallonius', // Author for schemaORGJSONLD
  themeColor: '#3D63AE',
  backgroundColor: '#EBEDF2',

  twitter: '', // Twitter Username
  facebook: '', // Facebook Site Name
  instagram: '', // Instagram handle
  googleAnalyticsID: '',

  skipNavId: 'reach-skip-nav', // ID for the "Skip to content" a11y feature
}
