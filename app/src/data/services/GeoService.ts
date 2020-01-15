import { Observable } from 'rxjs';
import { BaseService } from '@airy/app-http';
import { getBaseUrl, serviceConfigCommon, GEO } from '~configs';
import {
  IHeatmapDataResponsePayload
} from '~data/interfaces';

const usingBaseUrl = getBaseUrl();

const geoService = new BaseService(
  usingBaseUrl.BASE_URL,
  serviceConfigCommon
);

const getHeatmapService = (
  startDate: string,
  endDate: string,
  propertyIds: string[]
): Observable<IHeatmapDataResponsePayload> => {
  return geoService.GET(GEO.HEATMAP_PATH + '/' + startDate + '/' + endDate, {
    propertyIds: propertyIds.toString()
  });
};

export { getHeatmapService };
