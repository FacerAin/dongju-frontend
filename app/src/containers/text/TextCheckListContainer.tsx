import { FC, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "modules";
import { getTextAllAsync } from "modules/text";
import Loading from "components/common/Loading";
import TextList from "components/text/TextList"
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
        return (!item['check'] && item[option].includes(searchWord));
      });
    }
  }, [data, searchWord, option]);
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
