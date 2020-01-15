import { css } from '@emotion/core';
import { colors } from '@airy/app-uikit';

const sidebarStyles = css`
  background-color: ${colors.dark.hex};
  flex: 0 1 173px;
  padding: 17px 22px;

  .logo_wrapper {
    border-bottom: 0.2px solid rgba(${colors.paleGrey.rgb}, 0.3);
    display: block;
    padding-bottom: 18px;
    margin-bottom: 14px;
  }

  .menu * {
    color: ${colors.white.hex};
  }

  .menu .parent {
    display: flex;
    align-items: center;
    font-size: 13px;
    padding-top: 13px;
    padding-bottom: 13px;
  }
  .parent img:first-of-type {
    margin-right: 11px;
  }
  .parent img:last-of-type {
    margin-left: auto;
  }

  .menu .child {
    display: block;
    font-size: 12px;
    font-weight: 500;
    text-decoration: none;
    margin-left: -22px;
    margin-right: -22px;
    padding: 13px 22px;
  }
  .menu .child:before {
    content: '';
    display: inline-block;
    width: 7px;
    height: 7px;
    border-radius: 100%;
    background-color: ${colors.teal.hex};
    margin-right: 25px;
  }
  .child.selected {
    background-color: ${colors.darkTwo.hex};
  }
`;

export { sidebarStyles };
