# folding-side-menu

Side menu that expand on mouse over.

### Install

```bash
npm install folding-side-menu
yarn add folding-side-menu
```

### Usage

Here's an example of basic usage:

```tsx
import React from 'react'
import PaperLabeled from 'folding-side-menu'

function MyApp() {
  const menuItems: MenuItem[] = [
    {
        text: 'Main',
        path: '/Settings',
        icon: <HomeIcon data-testid="homeIcon" fontSize="large" />,
    },
    {
        text: 'Reports',
        path: '/Settings',
        icon: <ReportIcon fontSize="large" />,
    },
    {
        text: 'Settings',
        path: '/Settings',
        icon: <SettingsIcon fontSize="large" />,
    },
  ]

  return (
    <SideMenu menuItems={menuItems} />
  );
}
```

Example of ussage integrated wit react-router-doom

```tsx
import React from 'react'
import PaperLabeled from 'folding-side-menu'
import { Link } from 'react-router-dom'

function MyApp() {
  
  const menuItems: MenuItem[] = [
    {
        text: 'Main',
        icon: <HomeIcon fontSize="large" />,
        rootingElement: ({ children }: {children: React.ReactElement}) => (
            <Link className={classes.linkText} to="/">
                {children}
            </Link>
        ),
    },
    {
        text: 'Reports',
        icon: <ReportIcon fontSize="large" />,
        rootingElement: ({ children }: {children: React.ReactElement}) => (
            <Link className={classes.linkText} to="/Report">
                {children}
            </Link>
        ),
    },
    {
        text: 'Settings',
        icon: <SettingsIcon fontSize="large" />,
        rootingElement: ({ children }: {children: React.ReactElement}) => (
            <Link className={classes.linkText} to="/Settings">
                {children}
            </Link>
        ),
    },
  ]

  return (
    <SideMenu menuItems={menuItems} />
    <div className={classes.content}>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Report" component={Report} />
            <Route exact path="/Settings" component={Settings} />
        </Switch>
    </div>
  );
}
```
![alt text](https://raw.githubusercontent.com/gabimig/FoldingSideMenu/master/collapsed.PNG)
![alt text](https://raw.githubusercontent.com/gabimig/FoldingSideMenu/master/expanded.PNG)

## User guide

### PaperLabeled

Displays a side menu that collapse and expand when mouse over

#### props

| Prop name | Type | Description | Default value |
| ------------- | ------------- | ------------- | ------------- |
| menuItems | MenuItem[] | List of items in the menu  | [] |
| openMenuCSS | CSSProperties | CSS props of the menu when is open. | undefined |
| closeMenuCSS | CSSProperties | CSS props of the menu when is closed. | undefined |
| menuItemCSS | CSSProperties | CSS props of the menu items. | undefined |
| topMarginItems | number? | margin-top of the list of items. | undefined |
```tsx
type MenuItem = {
    text: string,
    path?: string,
    icon?: React.ReactElement,
    rootingElement?: ({ children }: {children: React.ReactElement}) => React.ReactElement
}
```