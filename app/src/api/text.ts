import axios from "axios";

export async function getTextAll() {
  const response = await axios.get<TextType[]>(
    `http://dapi.facerain.club/text`
  );
  return response.data;
}

export async function getText(id: string) {
  const response = await axios.get<TextType>(
    `http://dapi.facerain.club/text/${id}`
  );
  return response.data;
}

export async function postText(data: TextType) {
  const response = await axios.post<TextType>(
    `http://dapi.facerain.club/text`,
    data
  );
  return response.data;
}

export async function deleteText(id: string) {
  const response = await axios.delete<TextType>(
    `http://dapi.facerain.club/text/${id}`
  );
  return response.data;
}

export async function putText(data: TextType) {
  const response = await axios.put<TextType>(
    `http://dapi.facerain.club/text/${data.id}`,
    data
  );
  return response.data;
}

export interface TextType {
  [index: string]: any;
  id: string;
  title: string;
  author: string;
  year?: number;
  emotions?: string[];
  text: string;
  check: boolean;
}
