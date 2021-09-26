import { StringGradients } from "antd/lib/progress/progress";
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

export interface TextType {
  id: string;
  title: string;
  author: string;
  year?: number;
  emotions?: string[];
  text: string;
}
