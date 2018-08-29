const program = require('commander')
const createComponent = require('./create-react-component')
const oneOf = require('./utils').oneOf

program
  .usage(' [-Options] <component>')
  .option('-l, --language [LANG]',
    `Specify language:

                      ts: typescript
                      js: Javascript
                        `,
    oneOf(['js', 'ts'], 'ts'),
    'ts')
  .option('-t, --type [TYPE]',
    `Specify component type:

                      s: Stateless Functional Component,
                      p: PureComponent,
                      c: Component
                      `,
    oneOf(['s', 'p', 'c'], 'c'),
    'c')
  .option('-m, --cssmodule',
    `Specify whether to use css module or not, use css module if '-m' present.Note that if option '-s' present, this option is ignored!`)
  .option('-s, --styled',
    `Specify whether to use styled components, use styled components if '-s' present`)
  .parse(process.argv)

if (program.args.length === 0) {
  program.help()
  return
}
const {
  language,
  type,
  args,
  cssmodule,
  styled
} = program

createComponent(language, type, !!cssmodule, !!styled, args[0])
