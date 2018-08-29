/**
 *
 * @param {string} Component component name
 * @param { boolean } cssmodule whether to use cssmodule or not
 * @param { boolean } styled whether to use styled components or not
 */
function componentTemplate(Component, cssmodule, styled) {
  return (
    `import * as React from 'react'
${styled ? `import styled from 'styled-components'` : cssmodule ? `import cStyle from './${Component}.scss'`: `import './${Component}.scss'`}

type ${Component}Props = {}
type ${Component}State = {}
${styled ? `
const ${Component}Container = styled.div${`\`

\``}
` : ''}
export class ${Component} extends React.Component<${Component}Props, ${Component}State> {
  public render() {
    return (
      ${  styled
        ? `<${Component}Container>${Component}</${Component}Container>`
        : `<div className=${cssmodule ? `{cStyle.${Component}}` : `'${Component}'`}>${Component}</div>`
      }
    )
  }
}
`)
}
module.exports = componentTemplate
