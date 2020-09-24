import React from 'react'
import clsx from 'clsx'
import {
    createStyles, Link,
    Drawer, List, ListItem, ListItemIcon, ListItemText, makeStyles, Theme,
} from '@material-ui/core/'
/*  eslint import/no-unresolved: 0  */
// import { Link } from 'react-router-dom'
import { CSSProperties } from '@material-ui/styles'

const drawerWidth = 240

type CSSProps = {
    openMenuCSS?: CSSProperties,
    closeMenuCSS?: CSSProperties,
    menuItemCSS?: CSSProperties,
    topMarginItems?: number,
}

export type MenuItem = {
    text: string,
    path?: string,
    icon?: React.ReactElement,
    rootingElement?: ({ children }: {children: React.ReactElement}) => React.ReactElement
}

type SideMenu = {
    menuItems: MenuItem[],
} & CSSProps

const useStyles = makeStyles((theme: Theme) => createStyles({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpenImported: (props: CSSProps) => ({
        ...props.openMenuCSS,
    }),
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerCloseImported: (props: CSSProps) => ({
        overflowX: 'hidden',
        ...props.closeMenuCSS,
    }),
    drawerClose: {
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        paddingTop: '7em',
        justifyContent: 'center',
    },
    toolbar: (props: CSSProps) => ({
        minHeight: props.topMarginItems !== undefined
            ? props.topMarginItems
            : theme.mixins.toolbar.minHeight,
    }),
    linkText: (props: CSSProps) => ({
        color: 'inherit',
        textDecoration: 'none',
        ...props.menuItemCSS,
    }),
}))

const SideMenu = ({
    openMenuCSS,
    closeMenuCSS,
    menuItemCSS,
    topMarginItems,
    menuItems,
}: SideMenu): React.ReactElement => {
    const classes = useStyles({
        openMenuCSS,
        closeMenuCSS,
        menuItemCSS,
        topMarginItems,
    })
    const [sideBarOpen, setSidebarOpen] = React.useState(false)

    const HandleSideBarOnMouseEnter = () => {
        setSidebarOpen(true)
    }

    const HandleSideBarOnMouseLeave = () => {
        setSidebarOpen(false)
    }

    const drawerClose = `${classes.drawerClose} ${classes.drawerCloseImported}`
    const drawerOpen = `${classes.drawerOpen} ${classes.drawerOpenImported}`

    return (
        <Drawer
          data-testid="menuContainer"
          variant="permanent"
          className={clsx(classes.drawer, {
              [drawerOpen]: sideBarOpen,
              [drawerClose]: !sideBarOpen,
          })}
          classes={{
              paper: clsx({
                  [drawerOpen]: sideBarOpen,
                  [drawerClose]: !sideBarOpen,
              }),
          }}
          onMouseEnter={HandleSideBarOnMouseEnter}
          onMouseLeave={HandleSideBarOnMouseLeave}
        >
            <div id="Prueba" className={classes.toolbar} />
            <List data-testid="list">
                {menuItems.map((menuItem) => {
                    const innerContent = (
                        <ListItem button>
                            <ListItemIcon>
                                {menuItem.icon}
                            </ListItemIcon>
                            <ListItemText primary={menuItem.text} />
                        </ListItem>
                    )
                    if (menuItem.rootingElement) {
                        return (
                            <li key={`menmu-item-${menuItem.text}`}>
                                <menuItem.rootingElement>
                                    {innerContent}
                                </menuItem.rootingElement>
                            </li>
                        )
                    }
                    return (
                        <li key={`menmu-item-${menuItem.text}`}>
                            <Link href={menuItem.path} className={classes.linkText}>
                                {innerContent}
                            </Link>
                        </li>
                    )
                })}
            </List>
        </Drawer>
    )
}

SideMenu.defaultProps = {
    openMenuCSS: {},
    closeMenuCSS: {},
    menuItemCSS: {},
    topMarginItems: undefined,
}

export default SideMenu
