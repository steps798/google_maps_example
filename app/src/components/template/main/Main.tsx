import React from 'react';
import { css } from '@emotion/core';

import { colors } from '@airy/app-uikit';

const mainStyles = css`
  flex: 1;
  background: ${colors.paleBlue.hex};
  min-height: 100vh;
`;

class Main extends React.Component<any, any> {
  render() {
    const { children, ...otherProps } = this.props;

    return (
      <main css={mainStyles} {...otherProps}>
        {children}
      </main>
    );
  }
}

export { Main };
