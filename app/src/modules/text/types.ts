import * as actions from "./actions";
import { ActionType } from "typesafe-actions";
import { TextType } from "api/text";
import { AsyncState } from "lib/reducerUtils";

export type TextAction = ActionType<typeof actions>;

export type TextState = {
  Texts: AsyncState<Array<TextType>, Error>;
  Text: AsyncState<TextType, Error>;
};
