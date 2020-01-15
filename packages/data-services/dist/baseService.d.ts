import { Observable } from 'rxjs';
import { AxiosRequestConfig } from 'axios';
declare class BaseService {
    private baseUrl;
    private http;
    private constructPayload;
    constructor(baseUrl: string, config: AxiosRequestConfig);
    GET<T_RES>(pathUrl: string, queryParam?: object): Observable<T_RES>;
    POST<T_REQ, T_RES>(pathUrl: string, dataPayload: T_REQ, contextPayload?: any): Observable<T_RES>;
    DELETE<T_RES>(pathUrl: string, queryParam?: object): Observable<T_RES>;
    PUT<T_REQ, T_RES>(pathUrl: string, dataPayload: T_REQ, contextPayload?: any): Observable<T_RES>;
}
export { BaseService };