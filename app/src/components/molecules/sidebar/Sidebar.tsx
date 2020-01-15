import React from 'react';
import { NavLink } from 'react-router-dom';

import { sidebarStyles } from './sidebarStyles';
import logo from '~assets/images/logo.svg';

class Sidebar extends React.Component<any, any> {
  state = {
    selectedMenu: {
      '/signature-promo': false,
    },
  };

  componentDidMount() {
    const { location } = this.props;
    this.onSetSelectedMenu(location);
  }

  onSetSelectedMenu = (path: string) => {
    const { selectedMenu } = this.state;

    Object.keys(selectedMenu).map(key => {
      selectedMenu[key] = false;
    });

    selectedMenu[path] = true;

    this.setState(selectedMenu);
  }

  render() {
    const { ...otherProps } = this.props;
    const { selectedMenu } = this.state;

    return (
      <aside id="sidebar" css={sidebarStyles} {...otherProps}>
        <NavLink
          to="/"
          className="logo_wrapper"
          onClick={this.onSetSelectedMenu.bind(null, '')}
        >
          <img src={logo} alt="App Logo" />
        </NavLink>

        <ul className="menu">
          <li>
            <NavLink
              className={
                selectedMenu['/other-page'] ? 'child selected' : 'child'
              }
              to="/other-page"
              activeClassName="selected"
              onClick={this.onSetSelectedMenu.bind(null, '/other-page')}
            >
              Other Page
            </NavLink>
          </li>
        </ul>
      </aside>
    );
  }
}

export { Sidebar };
