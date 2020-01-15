// let idToken = '';

// // @ts-ignore
// if (process.browser) {
//   idToken = localStorage.getItem('id_token');
// }

const serviceConfigAuth = {
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
};

const serviceConfigCommon = {
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
    // , 'victory-neo-token': idToken
    // 'Access-Control-Allow-Origin': '*'
  },
};

const serviceConfigFileDownload = {
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'method': 'GET',
    'responseType': 'arraybuffer'
    // , 'victory-neo-token': idToken
    // 'Access-Control-Allow-Origin': '*'
  },
};

const serviceConfigFileUpload = {
  withCredentials: true,
  headers: {
    'Content-Type': 'multipart/form-data',
  },
};

export { serviceConfigAuth, serviceConfigCommon, serviceConfigFileUpload, serviceConfigFileDownload };