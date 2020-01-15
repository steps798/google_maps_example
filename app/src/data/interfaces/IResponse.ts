import { IChamResponse } from './IChamResponse';

interface ICoordinate {
  longitude: number;
  latitude: number;
}

interface IHeatmapData {
  propertyId: string;
  coordinate: ICoordinate;
  geoIdRegion: number;
  totalRoomNights: number;
  totalGrossBookingValue: number;
  totalNetSales: number;
  totalContractRate: number;
  totalRatePlanCost: number;
  totalCouponCost: number;
  totalOtaRatePlanCost: number;
  totalOtaCouponCost: number;
}

interface IHeatmapDataResponsePayload extends IChamResponse {
  data: IChamResponse['data'] & {
    details: IHeatmapData[];
  }
}

export { ICoordinate, IHeatmapData, IHeatmapDataResponsePayload };
