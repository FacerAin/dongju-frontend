import { FC, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "modules";
import TextUpdateForm from "components/text/TextUpdateForm";
import { putTextAsync } from "modules/text";
import { getTextAsync } from "modules/text";
import { useHistory } from "react-router-dom";
import Loading from "components/common/Loading";

interface TextUpdateFormContainerProps {
  id: string;
	isCheck ?: boolean;
}

const initialForm = {
  id: "",
  title: "",
  author: "",
  text: "",
  check: false,
};

const TextUpdateFormContainer: FC<TextUpdateFormContainerProps> = function ({
  id, isCheck
}) {
  const { data, loading, error } = useSelector(
    (state: RootState) => state.text.Text
  );
  const [FormData, setFormData] = useState(initialForm);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTextAsync.request(id));
  }, [dispatch, id]);

  useEffect(() => {
    if(data){
      setFormData(data)
    }
   
  }, [data])

  const history = useHistory();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...FormData,
      [name]: value,
    });
  };
	
	const onCheckChange = (e : React.ChangeEvent<HTMLInputElement>) => {
		setFormData({
			...FormData,
			check: e.target.checked
		})
	}

  const onSubmit = () => {
    dispatch(putTextAsync.request(FormData));
	  if(isCheck){
		  history.push("/check");
	  }else{
		  history.push("/check");
	  }
    
  };

  return (
    <>
      {loading && <Loading />}
      {error && <p style={{ textAlign: "center" }}>Error!</p>}
      {data && (
        <TextUpdateForm
        defaultFormData = {data}
          FormData={FormData}
          onChange={onChange}
          onSubmit={onSubmit}
			onCheckChange={onCheckChange}
        />
      )}
    </>
  );
};

export default TextUpdateFormContainer;
