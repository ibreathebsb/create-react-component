const fs = require('fs-extra')
const path = require('path')
const log = require('./utils').log

const REPLACE = /__REPLACE__/g
/**
 *
 * @param {string} lang
 * @param {string} type
 * @param {string} componentName
 */
module.exports = (lang, type, componentName) => {
  log.info(`Creating ${componentName}...`)
  const tempalteDir = path.join(__dirname, `template/${lang}/${type}`)
  const cwd = process.cwd()
  const componentDir = path.join(cwd, componentName)
  // check if file exist
  try {
    if (fs.existsSync(componentDir)) {
      log.error(`${componentDir} already exists!`)
      return
    }
  } catch (e) {
    log.error(e.message)
    return
  }
  // mkdir
  try {
    fs.mkdirpSync(componentDir)
  } catch (e) {
    log.error(`Can't create directory ${componentDir}`)
    return
  }
  // create and write
  const templateNames = [`__REPLACE__.${lang}x`, `__REPLACE__.scss`, `index.${lang}`]
  try {
    templateNames.forEach(
      (file) => {
        const newFileName = file.replace(REPLACE, componentName)
        const src = path.resolve(tempalteDir, file)
        const dest = path.resolve(componentDir, newFileName)
        fs.createFileSync(dest)
        const content = fs.readFileSync(src, {
          encoding: 'UTF-8'
        })
        fs.writeFileSync(dest, content.replace(REPLACE, componentName), {
          encoding: 'UTF-8'
        })
      }
    )
  } catch (e) {
    log.error(e)
    return
  }
  log.success(`Success! Happy coding!`)

}
