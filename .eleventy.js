module.exports = function(eleventyConfig){
  eleventyConfig.addPassthroughCopy('./src/admin/config.yml')

  return {
    dir: {
      input: 'src',
      output: 'public'
    }
  }
}