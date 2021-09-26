import { createAsyncAction } from "typesafe-actions";
import { TextType } from "api/text";
import { AxiosError } from "axios";

export const GET_TEXTALL = "text/GET_TEXTALL";
export const GET_TEXTALL_SUCCESS = "text/GET_TEXTALL_SUCCESS";
export const GET_TEXTALL_ERROR = "text/GET_TEXTALL_ERROR";

export const GET_TEXT = "text/GET_TEXT";
export const GET_TEXT_SUCCESS = "text/GET_TEXT_SUCCESS";
export const GET_TEXT_ERROR = "text/GET_TEXT_ERROR";

export const POST_TEXT = "text/POST_TEXT";
export const POST_TEXT_SUCCESS = "text/POST_TEXT_SUCCESS";
export const POST_TEXT_ERROR = "text/POST_TEXT_ERROR";

export const DELETE_TEXT = "text/DELETE_TEXT";
export const DELETE_TEXT_SUCCESS = "/text/DELETE_TEXT_SUCCESS";
export const DELETE_TEXT_ERROR = "/text/DELETE_TEXT_ERROR";

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

export const postTextAsync = createAsyncAction(
  POST_TEXT,
  POST_TEXT_SUCCESS,
  POST_TEXT_ERROR
)<TextType, TextType, AxiosError>();

export const deleteTextAsync = createAsyncAction(
  DELETE_TEXT,
  DELETE_TEXT_SUCCESS,
  DELETE_TEXT_ERROR
)<string, any, AxiosError>();
