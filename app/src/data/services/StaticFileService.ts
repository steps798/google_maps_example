import { getBaseUrl } from '~configs';

const baseUrl = getBaseUrl().WEB_URL;

const provinceGeoIds = [
100004,
100196,
100360,
100425,
100595,
100900,
100970,
101115,
101405,
101586,
101786,
101946,
102173,
102361,
102746,
102813,
103130,
103831,
104768,
104896,
105041,
105319,
105373,
105524,
105602,
105728,
105889,
106282,
106338,
106447,
107121,
107242,
107409,
30010184];

const getBoundaries = () => {
  console.log('test');
  provinceGeoIds.forEach(geoid => {
    fetch(`${baseUrl}/public/boundaries/${geoid}.json`)
    .then(console.log)
    .catch(console.error);
  });
}

export { getBoundaries, provinceGeoIds };
