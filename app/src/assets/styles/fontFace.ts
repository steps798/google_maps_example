import { css } from '@emotion/core';

import { colors } from '@airy/app-uikit';

const fontFace = css`
  html * {
    font-weight: normal;
    font-family: 'Helvetica Neue', 'Helvetica', Arial, 'sans-serif';
    color: ${colors.darkThree.hex};
  }
  body {
    background-color: #f3f4f4;
  }
  h1 {
    font-size: 18px;
    font-weight: 500;
  }
  h2 {
    font-size: 14px;
    font-weight: 500;
  }
  h3 {
    font-size: 14px;
    font-weight: 500;
  }
  h4 {
    font-size: 13px;
  }
  h5 {
    font-size: 12px;
  }
  h6 {
    font-size: 12px;
  }
`;

export { fontFace };
