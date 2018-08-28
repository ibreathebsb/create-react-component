/**
 *
 * @param {string} Component component name
 * @param { boolean } cssmodule whether to use cssmodule or not
 */
function componentTemplate(Component, cssmodule) {
  return (
    `import React from 'react'
${cssmodule ? `import cStyle from './${Component}.scss'`: `import './${Component}.scss'` }

export class ${Component} extends React.Component {
  render() {
    return (
      <div className=${cssmodule ? `{cStyle.${Component}}` : `'${Component}'`}>${Component}</div>
    )
  }
}
`)
}
module.exports = componentTemplate
