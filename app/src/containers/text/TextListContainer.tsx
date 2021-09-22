import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "modules";
import TextList from "components/text/TextList";
import { getTextAllAsync } from "modules/text";
import Loading from "components/common/Loading";

const TextListContainer: FC = function () {
  const { data, loading, error } = useSelector(
    (state: RootState) => state.text.Texts
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTextAllAsync.request(""));
  }, [dispatch]);

  return (
    <>
      {loading && <Loading />}
      {error && <p style={{ textAlign: "center" }}>Error!</p>}
      {data && <TextList texts={data} />}
    </>
  );
};

export default TextListContainer;
//
