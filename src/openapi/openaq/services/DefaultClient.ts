/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class DefaultClient {

    /**
     * Pong
     * Sanity check.
     * This will let the user know that the service is operational.
     * And this path operation will:
     * * show a lifesign
     * @returns any Successful Response
     * @throws ApiError
     */
    public static pongPingGet(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/ping',
        });
    }

    /**
     * Favico
     * @returns any Successful Response
     * @throws ApiError
     */
    public static favicoFaviconIcoGet(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/favicon.ico',
        });
    }

}