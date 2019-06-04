import { compose } from 'recompose';
import { connect } from 'react-redux';
import { toggleSidebar } from '../../store/actions/auth';

import LayoutView from './LayoutView';


export default compose(
  connect(
    state => ({
      isSidebarOpened: state.layout.isSidebarOpened,
    }),
    { toggleSidebar },
  )
)(LayoutView);