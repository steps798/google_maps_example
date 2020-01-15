declare var process: {
  env: {
    NODE_ENV: string
  }
};

const isProduction = process.env.NODE_ENV === 'production';

const API_URL = {
  DEV: {
    BASE_URL: 'http://victory-api.airyrooms.test/v1',
    WEB_URL: 'http://localhost:3000',
  },
  PROD: {
    BASE_URL: 'http://victory-api.airyrooms.test/v1',
    WEB_URL: 'localhost:3000'
  }
};

export const GEO = {
  HEATMAP_PATH: '/geospatial/heatmap',
};

export const getBaseUrl = () => {
  let URL;

  if (isProduction) URL = API_URL.PROD;
  else URL = API_URL.DEV;

  return URL;
};
