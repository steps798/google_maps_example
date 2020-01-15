import React from 'react';
import { css } from '@emotion/core';

const contentStyles = css`
  padding: 18px;
`;

class Content extends React.Component<any, any> {
  render() {
    const { children, ...otherProps } = this.props;

    return (
      <div css={contentStyles} id="content" {...otherProps}>
        {children}
      </div>
    );
  }
}

export { Content };
