export enum ChamHTTPCallStatus {
  Success = 'SUCCESS',
  Failed = 'FAILED',
}

/**
 * This interface is use to wrap response payload interface.
 * @example - how to fill 'data' of IChamResponse
 * export interface IAnyChamResponse extends IChamResponse { 
 * data: IChamResponse['data'] & { 'insert type of data here' };
 * }
 * @example - how to override 'data' of IChamResponse
 * export interface IAnyChamResponse extends IChamResponse { data: IAnyInterfaceAsData }
 */

export interface IChamResponse {
  status: ChamHTTPCallStatus;
  data: {};
  context: any;
  message: string;
}