import React from 'react';
import {
  default as Document,
  Header,
  Main,
  Scripts,
} from '@airy/maleo/document';

export default class extends Document {
  render() {
    return (
      <html lang="en">
        <Header>
          <title>App | Your App Description</title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta name="description" content="App" />
        </Header>

        <body>
          <Main />

          <Scripts />
        </body>
        <script
          src={`https://maps.googleapis.com/maps/api/js?libraries=visualization&callback=mapLoaded`}
          defer
        >
        </script>
      </html>
    );
  }
}
