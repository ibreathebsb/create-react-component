# create-react-component

Save the trouble copy paste and rename when creating new react component with typescript/javascript

## Usage

1. install: `npm install -g @isaac.js/create-react-component`
2. use: `create-react-component [-Options] MyComponent`

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



`-m, --type [true|false]`

  **Specify whether to use css module or not(default to `true`):**

    true: use css module

    false: do not use css module

## Output

This will generate a directory in the `current working directory`

```shell
MyComponent/

  - MyComponent.tsx(or .jsx)

  - MyComponent.scss

  - index.ts(or .js)

```

## Template

### Template for Component.scss


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
