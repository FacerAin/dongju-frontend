import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "modules";
import TextList from "components/text/TextList";
import { getTextAllAsync } from "modules/text";
import Loading from "components/common/Loading";
import { TextType } from "api/text";
function filtering_data (
  data: TextType[],
  option: string,
  searchWord: string
) {
  return data.filter((item) => {
    return item[option].includes(searchWord);
  });
};

const TextListContainer: FC = function () {
  const { data, loading, error } = useSelector(
    (state: RootState) => state.text.Texts
  );

  const { searchWord, option } = useSelector(
    (state: RootState) => state.search
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTextAllAsync.request(""));
  }, [dispatch]);


  return (
    <>
      {loading && <Loading />}
      {error && <p style={{ textAlign: "center" }}>Error!</p>}
      {data && <TextList texts={filtering_data(data, option, searchWord)} />}
    </>
  );
};

export default TextListContainer;
//
