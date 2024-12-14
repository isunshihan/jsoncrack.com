/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://jsonformat.help",
  exclude: ["/widget"],
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
  },
  additionalPaths: async (config) => {
    const paths = [
      // 主页面
      { loc: "/", priority: 1.0, changefreq: "daily" },
      { loc: "/docs", priority: 0.8, changefreq: "weekly" },
      { loc: "/editor", priority: 0.9, changefreq: "daily" },
      { loc: "/tools/json-schema", priority: 0.8, changefreq: "weekly" },
      
      // Legal pages
      { loc: "/legal/privacy", priority: 0.5, changefreq: "monthly" },
      { loc: "/legal/terms", priority: 0.5, changefreq: "monthly" },

      // Converter pages
      { loc: "/converter/csv-to-json", priority: 0.7, changefreq: "weekly" },
      { loc: "/converter/csv-to-xml", priority: 0.7, changefreq: "weekly" },
      { loc: "/converter/csv-to-yaml", priority: 0.7, changefreq: "weekly" },
      { loc: "/converter/json-to-csv", priority: 0.7, changefreq: "weekly" },
      { loc: "/converter/json-to-xml", priority: 0.7, changefreq: "weekly" },
      { loc: "/converter/json-to-yaml", priority: 0.7, changefreq: "weekly" },
      { loc: "/converter/xml-to-csv", priority: 0.7, changefreq: "weekly" },
      { loc: "/converter/xml-to-json", priority: 0.7, changefreq: "weekly" },
      { loc: "/converter/xml-to-yaml", priority: 0.7, changefreq: "weekly" },
      { loc: "/converter/yaml-to-csv", priority: 0.7, changefreq: "weekly" },
      { loc: "/converter/yaml-to-json", priority: 0.7, changefreq: "weekly" },
      { loc: "/converter/yaml-to-xml", priority: 0.7, changefreq: "weekly" },

      // Type conversion pages
      { loc: "/type/csv-to-go", priority: 0.7, changefreq: "weekly" },
      { loc: "/type/csv-to-kotlin", priority: 0.7, changefreq: "weekly" },
      { loc: "/type/csv-to-rust", priority: 0.7, changefreq: "weekly" },
      { loc: "/type/csv-to-typescript", priority: 0.7, changefreq: "weekly" },
      { loc: "/type/json-to-go", priority: 0.7, changefreq: "weekly" },
      { loc: "/type/json-to-kotlin", priority: 0.7, changefreq: "weekly" },
      { loc: "/type/json-to-rust", priority: 0.7, changefreq: "weekly" },
      { loc: "/type/json-to-typescript", priority: 0.7, changefreq: "weekly" },
      { loc: "/type/xml-to-go", priority: 0.7, changefreq: "weekly" },
      { loc: "/type/xml-to-kotlin", priority: 0.7, changefreq: "weekly" },
      { loc: "/type/xml-to-rust", priority: 0.7, changefreq: "weekly" },
      { loc: "/type/xml-to-typescript", priority: 0.7, changefreq: "weekly" },
      { loc: "/type/yaml-to-go", priority: 0.7, changefreq: "weekly" },
      { loc: "/type/yaml-to-kotlin", priority: 0.7, changefreq: "weekly" },
      { loc: "/type/yaml-to-rust", priority: 0.7, changefreq: "weekly" },
      { loc: "/type/yaml-to-typescript", priority: 0.7, changefreq: "weekly" },
    ];

    return paths;
  },
};
