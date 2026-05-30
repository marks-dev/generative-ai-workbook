export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");

  return {
    pathPrefix: "/generative-ai-workbook/",
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
}
