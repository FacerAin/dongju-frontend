import axios from "axios";

export async function getTextAll() {
  const response = await axios.get<TextType[]>(`/text`);
  return response.data;
}

export async function getText(id: string) {
  const response = await axios.get<TextType>(`/text/${id}`);
  return response.data;
}

export async function postText(data: TextType) {
  const response = await axios.post<TextType>(`/text`, data);
  return response.data;
}

export async function deleteText(id: string) {
  const response = await axios.delete<TextType>(`/text/${id}`);
  return response.data;
}

export async function putText(data: TextType) {
  const response = await axios.put<TextType>(`/text/${data.id}`, data);
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
}
