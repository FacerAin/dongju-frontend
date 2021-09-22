import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "modules";
import TextInputForm from "components/text/TextInputForm";

const TextInputFormContainer: FC = function () {
  return (
    <>
      <TextInputForm />
    </>
  );
};

export default TextInputFormContainer;
