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
  .option('-m, --cssmodule [true|false]',
    `Specify whether to use css module or not`,
    oneOf(['true', 'false'], 'true'),
    'true')
  .parse(process.argv)

if (program.args.length === 0) {
  program.help()
  return
}
const { language, type, args, cssmodule } = program

createComponent(language, type, cssmodule === 'true', args[0])
