import React from 'react';
import { Button, Breadcrumb, powerIcon } from '@airy/app-uikit';

import { headerStyles, buttonStyles } from './headerStyles';

class Header extends React.Component<any, any> {
  render() {
    const { ...otherProps } = this.props;

    return (
      <header id="header" css={headerStyles} {...otherProps}>
        <Breadcrumb lists={['Some', 'Breadcrumb']} active={0} />

        <Button aria-label="logout" css={buttonStyles} ghost={true}>
          <img src={powerIcon} alt="" />
        </Button>
      </header>
    );
  }
}

export { Header };
