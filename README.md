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
![alt text](https://raw.githubusercontent.com/gabimig/folding-side-menu/master/collapsed.PNG)
![alt text](https://raw.githubusercontent.com/gabimig/folding-side-menu/master/expanded.PNG)

## User guide

### PaperLabeled

Displays a side menu that collapse and expand when mouse over

#### props

| Prop name | Type | Description | Default value |
| ------------- | ------------- | ------------- | ------------- |
| menuItems | {text: string,path: string,icon?: React.ReactElement, rootingElement?: ({ children }: {children: React.ReactElement}) => React.ReactElement}[] | List of items in the menu  | [] |
| labelComp | React.ReactElement | React component that will be shown in the top margin of the Paper instead of the title. This option will make title prop disabled. | undefined |
