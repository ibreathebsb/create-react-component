/**
 *
 * @param {string} Component component name
 * @param { boolean } cssmodule whether to use cssmodule or not
 */
function componentTemplate(Component, cssmodule) {
  return (
    `import * as React from 'react'
${cssmodule ? `import cStyle from './${Component}.scss'`: `import './${Component}.scss'` }

type ${Component}Props = {}
type ${Component}State = {}

export class ${Component} extends React.PureComponent<${Component}Props, ${Component}State> {
  public render() {
    return (
      <div className=${cssmodule ? `{cStyle.${Component}}` : `'${Component}'`}>${Component}</div>
    )
  }
}
`)
}
module.exports = componentTemplate
