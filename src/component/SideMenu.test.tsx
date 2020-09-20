import React from 'react'
import { render } from '@testing-library/react';
import SideMenu, { MenuItem } from './SideMenu'
import '@testing-library/jest-dom'
import {
    Home as HomeIcon,
    Report as ReportIcon,
    Settings as SettingsIcon,
} from '@material-ui/icons'



test('SideMenu - Renders without crashing', ()=>{
  const { getByTestId } = render(<SideMenu menuItems={[]}></SideMenu>)
  const ul = getByTestId('list')
  expect(ul).toBeInTheDocument()
})
test('SideMenu - Renders without crashing', ()=>{
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
  const { getByTestId, getAllByText } = render(<SideMenu menuItems={menuItems}></SideMenu>)
  const homeIcon = getByTestId('homeIcon')
  const menuContainer = getByTestId('menuContainer')
  const mainTest = getAllByText('Main')[0]
  expect(homeIcon).toBeInTheDocument()
  expect(mainTest).toBeInTheDocument()
  expect(menuContainer).toBeInTheDocument()
  expect(menuContainer).toHaveStyle('width: 240px')
})
