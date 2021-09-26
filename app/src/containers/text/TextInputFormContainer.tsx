import { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "modules";
import TextInputForm from "components/text/TextInputForm";
import { postTextAsync } from "modules/text";
import { useHistory } from "react-router-dom";

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

  const history = useHistory();
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
    history.push("/");
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
