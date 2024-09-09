const CleanCSS = require("clean-css");
const htmlmin = require("html-minifier-terser");

module.exports = function (eleventyConfig) {
    eleventyConfig.addFilter("cssmin", function (code) {
        return new CleanCSS({}).minify(code).styles;
    });

    eleventyConfig.addTransform("htmlmin", function (content) {
        console.log(this.page.outputPath);
		if ((this.page.outputPath || "").endsWith(".html")) {
			let minified = htmlmin.minify(content, {
				useShortDoctype: true,
				removeComments: true,
				collapseWhitespace: true,
			});
			return minified;
		}
        console.log("not html");

		// If not an HTML output, return content as-is
		return content;
	});

    return {
        
    }
}