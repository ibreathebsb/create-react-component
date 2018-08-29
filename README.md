# create-react-component

Save the trouble copy paste and rename when creating new react component with typescript/javascript

## Usage

1. install: `npm install -g @isaac.js/create-react-component`
2. use: `create-react-component [-Options] MyComponent`

## Output

Runing `create-react-component -m MyComponent` will generate a directory in the `current working directory`

```shell
MyComponent/

  - MyComponent.tsx(or .jsx)

  - MyComponent.scss(this file is removed when you use styled components)

  - index.ts(or .js)

```

## Options

`-l, --language [LANG]`

  **Specify language(default to `ts`):**

    ts: typescript

    js: javascript

`-t, --type [TYPE]`

  **Specify component type(default to `c`):**

    c: React.Component

    p: React.PureComponent

    s: React.SFC(Stateless Functional Component)

`-m`

  **Specify whether to use css module or not, use css module if `-m` present**
  
  **Note that if option `-s` present, this option is ignored!**

`-s`

  **Specify whether to use styled components, use styled components if `-s` present**



## Template

### Template for Component.scss

**this file is removed when you use styled components**

```scss

@charset 'utf-8';
.MyComponent {

}

```

### Template for Component.tsx

``` tsx
import * as React from 'react'
import cStyle from './MyComponent.scss'

type MyComponentProps = {}
type MyComponentState = {}

export class MyComponent extends React.Component<MyComponentProps, MyComponentState> {
  public render() {
    return (
      <div className={cStyle.MyComponent}>MyComponent</div>
    )
  }
}

```

### Template for index.ts

```ts

import { MyComponent } from './MyComponent'
export default MyComponent

```
