/**
 *
 * @param {string} Component component name
 */
function componentTemplate(Component) {
  return (
    `import * as React from 'react'
import cStyle from './${Component}.scss'

type ${Component}Props = {
  propName: string
}

export const ${Component}: React.SFC<${Component}Props> = ({ propName }) => {
  return (
    <div className={cStyle.${Component}}>${Component}</div>
  )
}
`)
}
module.exports = componentTemplate
