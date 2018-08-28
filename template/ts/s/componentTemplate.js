/**
 *
 * @param {string} Component component name
 * @param { boolean } cssmodule whether to use cssmodule or not
 */
function componentTemplate(Component, cssmodule) {
  return (
    `import * as React from 'react'
${cssmodule ? `import cStyle from './${Component}.scss'`: `import './${Component}.scss'` }

type ${Component}Props = {
  propName: string
}

export const ${Component}: React.SFC<${Component}Props> = ({ propName }) => {
  return (
    <div className=${cssmodule ? `{cStyle.${Component}}` : `'${Component}'`}>${Component}</div>
  )
}
`)
}
module.exports = componentTemplate
