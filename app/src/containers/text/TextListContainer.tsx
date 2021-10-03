import { FC, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "modules";
import TextList from "components/text/TextList";
import { getTextAllAsync } from "modules/text";
import Loading from "components/common/Loading";
import { TextType } from "api/text";
import { collapseTextChangeRangesAcrossMultipleVersions } from "typescript";
const test = "abc";
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
  
  const filtered_data = useMemo(() => {
    if (data) {
      return data.filter((item) => {
        return item[option].includes(searchWord);
      });
    }
  }, [data, searchWord, option]);
  
  console.log(data);
  console.log(loading);
  console.log(error);
  return (
    <>
      {loading && <Loading />}
      {error && <p style={{ textAlign: "center" }}>Error!</p>}
      {data && <TextList texts={filtered_data} />}
    </>
  );
};

export default TextListContainer;
//
