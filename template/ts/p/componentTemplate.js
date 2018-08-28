/**
 *
 * @param {string} Component component name
 */
function componentTemplate(Component) {
  return (
    `import * as React from 'react'
import cStyle from './${Component}.scss'

type ${Component}Props = {}
type ${Component}State = {}

export class ${Component} extends React.PureComponent<${Component}Props, ${Component}State> {
  public render() {
    return (
      <div className={cStyle.${Component}}>${Component}</div>
    )
  }
}
`)
}
module.exports = componentTemplate
