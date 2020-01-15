import { css } from '@emotion/core';
import { colors } from '@airy/app-uikit';

const headerStyles = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 8px 28px 0 rgba(${colors.slate.rgb}, 0.1);
  padding: 22px 21px 22px 21px;
  background: ${colors.white.hex};
`;

const buttonStyles = css`
  padding: 0;

  img {
    width: 24px;
  }
`;

export { headerStyles, buttonStyles };
