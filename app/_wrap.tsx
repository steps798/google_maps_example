import React from 'react';
import Wrap from '@airy/maleo/wrap';
import { Global } from '@emotion/core';
import { resetCSS } from '@airy/app-uikit';

import { fontFace } from './src/assets/styles/fontFace';

import { Sidebar, Header } from './src/components/molecules';
import { Main, Content } from './src/components/template';

export default class RootComponent extends Wrap {
  render() {
    // @ts-ignore
    const { Container, containerProps, App, appProps } = this.props;
    // @ts-ignore
    const { location } = this.props.appProps;

    return (
      <Container {...containerProps}>
        <Global styles={[resetCSS, fontFace]} />

        <Main>
          <App {...appProps} />
        </Main>
      </Container>
    );
  }
}
