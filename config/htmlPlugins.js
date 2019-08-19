const fs = require("fs")
const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

const generateHtmlPlugins = (templateDir) => {
  const templateFiles = fs.readdirSync(path.resolve(__dirname, templateDir))
  return templateFiles.map(item => {
    const parts = item.split(".")
    const name = parts[0]
    const extension = parts[1]
    return new HtmlWebpackPlugin({
      filename: `./pages/${name}.html`,
      template: path.resolve(__dirname, `${templateDir}/${name}.${extension}`),
      chunks: [
        name,
        "common"
      ],
      inject: "body",
      chunksSortMode: "dependency"
    })
  })
}

const htmlPlugins = generateHtmlPlugins("../source/pages")
module.exports = htmlPlugins