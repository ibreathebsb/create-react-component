/**
 *
 * @param {string} Component component name
 */
function indexTemplate(Component) {
  return (
    `import { ${Component} } from './${Component}'
export default ${Component}
`)
}
module.exports = indexTemplate
