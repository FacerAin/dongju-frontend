import { createAsyncAction } from "typesafe-actions";
import { TextType } from "api/text";
import { AxiosError } from "axios";

export const GET_TEXTALL = "text/GET_TEXTALL";
export const GET_TEXTALL_SUCCESS = "text/GET_TEXTALL_SUCCESS";
export const GET_TEXTALL_ERROR = "text/GET_TEXTALL_ERROR";

export const GET_TEXT = "text/GET_TEXT";
export const GET_TEXT_SUCCESS = "text/GET_TEXT_SUCCESS";
export const GET_TEXT_ERROR = "text/GET_TEXT_ERROR";

export const getTextAllAsync = createAsyncAction(
  GET_TEXTALL,
  GET_TEXTALL_SUCCESS,
  GET_TEXTALL_ERROR
)<any, TextType[], AxiosError>();

export const getTextAsync = createAsyncAction(
  GET_TEXT,
  GET_TEXT_SUCCESS,
  GET_TEXT_ERROR
)<string, TextType, AxiosError>();
