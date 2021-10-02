import { FC, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "modules";
import TextList from "components/text/TextList";
import { getTextAllAsync } from "modules/text";
import Loading from "components/common/Loading";

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
      let text_data = data;
      return text_data.filter((item) => {
        return item[option].includes(searchWord);
      });
    }
  }, [data, option, searchWord]);

  return (
    <>
      {loading && <Loading />}
      {error && <p style={{ textAlign: "center" }}>Error!</p>}
      {filtered_data && <TextList texts={filtered_data} />}
    </>
  );
};

export default TextListContainer;
//
