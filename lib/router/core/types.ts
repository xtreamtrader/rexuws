import { TemplatedApp, RecognizedString } from 'uWebSockets.js';
// eslint-disable-next-line import/no-cycle
import { TMiddleware } from '../../middlewares';
import { HttpMethod } from '../../utils/types';
import { ParametersMap } from '../../Request';

export interface IRouteBaseHandler {
  method: HttpMethod;
  middlewares: TMiddleware[];
  path: string;
}

export interface IRouteHandler extends IRouteBaseHandler {
  parametersMap: ParametersMap;
  hasAsync?: boolean;
  path: string;
  originPath: string;
  baseUrl?: string;
}

export interface IRouting<T extends Ctor> {
  get(...args: Parameters<T>): this;
  post(...args: Parameters<T>): this;
  put(...args: Parameters<T>): this;
  patch(...args: Parameters<T>): this;
  del(...args: Parameters<T>): this;
  trace(...args: Parameters<T>): this;
  head(...args: Parameters<T>): this;
  options(...args: Parameters<T>): this;
  connect(...args: Parameters<T>): this;
  any(...args: Parameters<T>): this;
  all(...args: Parameters<T>): this;
}

export type Ctor = (...args: any[]) => any;

export type TUWSHandlers = (uws: TemplatedApp) => void;

export interface IUWSRouting {
  useNativeHandlers(fn: TUWSHandlers): void;
}

export interface IUWSPublish {
  publish(
    topic: RecognizedString,
    message: RecognizedString,
    isBinary?: boolean,
    compress?: boolean
  ): void;
}
