const fs = require('fs-extra')
const path = require('path')
const log = require('./utils').log
const tempate = require('./template')

const REPLACE = /__REPLACE__/g
/**
 *
 * @param {string} lang
 * @param {string} type
 * @param {string} componentName
 */
module.exports = (lang, type, cssmodule, styled, componentName) => {
  log.info(`Creating ${componentName}...`)
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
  const {
    component,
    style,
    index
  } = tempate[lang][type]
  const componentTemplate = component(componentName, cssmodule, styled)
  const indexTemplate = index(componentName)

  let pairs = [{
      tempate: componentTemplate,
      filename: `${componentName}.${lang}x`
    },
    {
      tempate: indexTemplate,
      filename: `index.${lang}`
    }
  ]
  if (!styled) {
    const styleTemplate = style(componentName)
    pairs.push({
      tempate: styleTemplate,
      filename: `${componentName}.scss`
    })
  }

  try {
    pairs.forEach(
      ({
        tempate,
        filename
      }) => {
        const dest = path.resolve(componentDir, filename)
        fs.createFileSync(dest)
        fs.writeFileSync(dest, tempate, {
          encoding: 'UTF-8'
        })
      }
    )
  } catch (e) {
    log.error(e)
    return
  }
  log.success(`Success! Happy hacking!`)

}
