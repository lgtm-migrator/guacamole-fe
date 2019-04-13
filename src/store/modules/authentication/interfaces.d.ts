// types
import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from './types';

export interface RegisterActionRequest {
  type: REGISTER_REQUEST;
}

export interface RegisterActionSuccess {
  type: REGISTER_SUCCESS;
  payload: User;
}

export interface RegisterActionFailure {
  type: REGISTER_FAILURE;
  errors: any;
}

export interface LoginActionRequest {
  type: LOGIN_REQUEST;
}

export interface LoginActionSuccess {
  type: LOGIN_SUCCESS;
  payload: User;
}

export interface LoginActionFailure {
  type: LOGIN_FAILURE;
  errors: any;
}

export interface User {
  username?: string;
  email: string;
  password: string;
}
