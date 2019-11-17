const fs = require("fs")
const path = require("path")
const getFilesFromDir = require("./getFilesFromDir.js")

const entry = getFilesFromDir("./source/pages/", [".html"]).reduce( (obj, filePath) => {
  const entryChunkName = filePath.replace(path.extname(filePath), "").replace("source/pages/", "")
  const entryPath = "./" + filePath.replace("pages/", "scripts/").replace(/[a-z0-9|.]+$/, entryChunkName + ".js")
  if (fs.existsSync(entryPath)) {
	  obj[entryChunkName] = "./" + filePath.replace("/pages/", "/scripts/").replace(/[a-z0-9|.]+$/, entryChunkName + ".js")
  }
  return obj
}, {})

entry.common = "./source/scripts/common.js"

module.exports = entry