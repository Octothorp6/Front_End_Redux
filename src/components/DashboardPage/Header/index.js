import { compose, withState, withHandlers } from 'recompose';
import { connect } from 'react-redux';

import HeaderView from './HeaderView';
import { toggleSidebar, logOut } from '../../../store/actions';

export default compose(
  connect(
    state => ({
      isSidebarOpened: state.layout.isSidebarOpened,
    }),
    { logOut, toggleSidebar },
  ),
  withState('isMailsUnread', 'setIsMailsUnread', true),
  withState('notificationsMenu', 'setNotificationsMenu', null),
  withState('isNotificationsUnread', 'setIsNotificationsUnread', true),
  withState('profileMenu', 'setProfileMenu', null),
  withState('isSearchOpen', 'setSearchOpen', false),
  withHandlers({
    openNotificationsMenu: props => event => {
      props.setNotificationsMenu(event.currentTarget);
      props.setIsNotificationsUnread(false);
    },
    closeNotificationsMenu: props => () => {
      props.setNotificationsMenu(null);
    },
    toggleSearch: props => () => {
      props.setSearchOpen(!props.isSearchOpen);
    },
    openProfileMenu: props => event => {
      props.setProfileMenu(event.currentTarget);
    },
    closeProfileMenu: props => () => {
      props.setProfileMenu(null);
    },
  })
)(HeaderView);