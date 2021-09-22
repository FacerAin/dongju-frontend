import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "modules";
import TextInputForm from "components/text/TextInputForm";
import { postTextAsync } from "modules/text";
const initialForm = {
  id: "",
  title: "",
  author: "",
  text: "",
};

const TextInputFormContainer: FC = function () {
  const [FormData, setFormData] = useState(initialForm);
  const { data, loading, error } = useSelector(
    (state: RootState) => state.text.Text
  );
  const dispatch = useDispatch();
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...FormData,
      [name]: value,
    });
  };

  const onSubmit = () => {
    dispatch(postTextAsync.request(FormData));
  };

  return (
    <>
      <TextInputForm
        FormData={FormData}
        onChange={onChange}
        onSubmit={onSubmit}
      />
    </>
  );
};

export default TextInputFormContainer;
