import React from 'react';
import {
  Drawer,
  IconButton,
  List,
  withStyles } from "@material-ui/core";
import {
  Home as HomeIcon,
  CalendarToday as CalendarIcon,
  Shop as ShopIcon,
  QuestionAnswer as SupportIcon,
  LibraryBooks as LibraryIcon,
  HelpOutline as FAQIcon,
  ArrowBack as ArrowBackIcon,
  MultilineChart as UIElementsIcon
} from "@material-ui/icons";
import classNames from 'classnames';

import SidebarLink from './components/SidebarLink';
import Dot from './components/Dot';

const structure = [
  { id: 0, label: 'Dashboard', link: '/admin/dashboard', icon: <HomeIcon /> },
  { id: 1, label: 'Tables', link: '/admin/tables', icon: <ShopIcon /> },
  { id: 2, label: 'Notifications', link: '/admin/cheatSheet', icon: <CalendarIcon />},
  { id: 3, label: 'Charts', link: '/admin/charts', icon: <UIElementsIcon /> },
  { id: 4, type: 'divider' },
  { id: 5, type: 'title', label: 'HELP' },
  { id: 6, label: 'Library', link: '', icon: <LibraryIcon /> },
  { id: 7, label: 'Support', link: '', icon: <SupportIcon /> },
  { id: 8, label: 'FAQ', link: '', icon: <FAQIcon />},
  { id: 9, type: 'divider' },
  { id: 10, type: 'title', label: 'PROJECTS' },
  { id: 11, label: 'My recent', link: '', icon: <Dot size="large" color="warning" /> },
  { id: 12, label: 'Starred', link: '', icon: <Dot size="large" color="primary" /> },
  { id: 13, label: 'Background', link: '', icon: <Dot size="large" color="secondary" /> },
];

const SidebarView = ({ classes, theme, toggleSidebar, isSidebarOpened, isPermanent, location }) => {
  return (
    <Drawer
      variant={isPermanent ? 'permanent' : 'temporary'}
      className={classNames(classes.drawer, {
        [classes.drawerOpen]: isSidebarOpened,
        [classes.drawerClose]: !isSidebarOpened,
      })}
      classes={{
        paper: classNames({
          [classes.drawerOpen]: isSidebarOpened,
          [classes.drawerClose]: !isSidebarOpened,
        }),
      }}
      open={isSidebarOpened}
    >
      <div className={classes.toolbar} />
      <div className={classes.mobileBackButton}>
        <IconButton
          onClick={toggleSidebar}
        >
          <ArrowBackIcon classes={{ root: classNames(classes.headerIcon, classes.headerIconCollapse) }} />
        </IconButton>
      </div>
      <List className={classes.sidebarList}>
        {structure.map(link => <SidebarLink key={link.id} location={location} isSidebarOpened={isSidebarOpened} {...link} />)}
      </List>
    </Drawer>
  );
}

const drawerWidth = 240;

const styles = theme => ({
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing.unit * 7 + 40,
    [theme.breakpoints.down("sm")]: {
      width: drawerWidth,
    }
  },
  toolbar: {
    ...theme.mixins.toolbar,
    [theme.breakpoints.down("sm")]: {
      display: 'none',
    }
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
  sidebarList: {
    marginTop: theme.spacing.unit * 6,
  },
  mobileBackButton: {
    marginTop: theme.spacing.unit * .5,
    marginLeft: theme.spacing.unit * 3,
    [theme.breakpoints.only("sm")]: {
      marginTop: theme.spacing.unit * .625,
    },
    [theme.breakpoints.up("md")]: {
      display: 'none',
    }
  }
});

export default withStyles(styles, { withTheme: true })(SidebarView);
