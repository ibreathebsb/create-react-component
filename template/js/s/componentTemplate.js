/**
 *
 * @param {string} Component component name
 */
function componentTemplate(Component) {
  return (
    `import React from 'react'
import { cStyle } from './${Component}.scss'

export const ${Component} = ({ propName }) => {
  return (
    <div className={cStyle.${Component}}>${Component}</div>
  )
}
`)
}
module.exports = componentTemplate
