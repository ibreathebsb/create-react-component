/**

 * @param {string} Component component name
 * @param { boolean } cssmodule whether to use cssmodule or not
 * @param { boolean } styled whether to use styled components or not
 */
function componentTemplate(Component, cssmodule, styled) {
  return (
    `import React from 'react'
${styled ? `import styled from 'styled-components'` : cssmodule ? `import cStyle from './${Component}.scss'`: `import './${Component}.scss'`}
${styled ? `
const ${Component}Container = styled.div${`\`

\``}
` : ''}
export const ${Component} = ({ propName }) => {
  return (
    ${  styled
      ? `<${Component}Container>${Component}</${Component}Container>`
      : `<div className=${cssmodule ? `{cStyle.${Component}}` : `'${Component}'`}>${Component}</div>`
    }
  )
}
`)
}
module.exports = componentTemplate
