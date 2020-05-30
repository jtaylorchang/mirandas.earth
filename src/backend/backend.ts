import Constants from 'expo-constants';

import { jsonRequest, jsonAuthorizedRequest } from '@services/Networking';
import { log } from '@services/logService';
import { isEmpty } from '@services/utils';

export const M_GET = 'GET';
export const M_POST = 'POST';
export const M_PUT = 'PUT';
export const M_PATCH = 'PATCH';
export const M_DELETE = 'DELETE';
export type TMethod = typeof M_GET | typeof M_POST | typeof M_PUT | typeof M_PATCH | typeof M_DELETE;

export const BASE_URL_PRODUCTION = '';
export const BASE_URL_DEVELOPMENT = '';

export const BASE_URL = process.env.NODE_ENV !== 'development' ? BASE_URL_PRODUCTION : BASE_URL_DEVELOPMENT;

export const ENDPOINTS: {
  [key: string]: (config?: any) => string;
} = {};

export const METHODS: {
  [key: string]: TMethod;
} = {};

export interface TResponse {
  success: boolean;
  error?: {
    code?: number;
    message?: string;
    blame?: TFlatBlame;
  };
}

export interface TRequestResponse {
  success: boolean;
  code?: number;
  error?: {
    message?: string;
    details?: string;
  };
}

export interface TFlatBlame {
  [key: string]: string;
}

export interface TBlame {
  [key: string]: TFlatBlame;
}

export const makeRequest = async <T>(
  endpoint: string,
  method: TMethod,
  params: {
    queryParams?: any;
    headers?: any;
    body?: any;
  }
) => {
  return jsonRequest<T>(BASE_URL, undefined, endpoint, true, method, params.headers, params.queryParams, params.body);
};

export const makeAuthorizedRequest = async <T>(
  endpoint: string,
  method: TMethod,
  params: {
    queryParams?: any;
    headers?: any;
    body?: any;
  },
  token: string
) => {
  return jsonAuthorizedRequest<T>(
    BASE_URL,
    undefined,
    endpoint,
    true,
    token,
    method,
    params.headers,
    params.queryParams,
    params.body
  );
};

export const flattenBlame = (blameObj: TBlame): TFlatBlame => {
  const blame = {};

  for (const [key, value] of Object.entries(blameObj)) {
    for (const [key2, value2] of Object.entries(value)) {
      blame[key2] = value2;
    }
  }

  return blame;
};

export const fail = (blame: TBlame, message?: string, code?: number) => {
  if (isEmpty(blame)) {
    return {
      success: false,
      error: {
        blame: {},
        message,
        code
      }
    };
  }

  return {
    success: false,
    error: {
      blame: flattenBlame(blame),
      message,
      code
    }
  };
};

export const pass = (data?) => {
  return {
    success: true,
    data
  };
};
