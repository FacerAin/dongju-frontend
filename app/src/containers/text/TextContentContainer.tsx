import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "modules";
import Loading from "components/common/Loading";
import { getTextAsync } from "modules/text";
import TextContent from "components/text/TextContent";


interface TextContentContainerProps {
  id: string;
}

const TextContentContainer: FC<TextContentContainerProps> = function ({ id }) {
  const { data, loading, error } = useSelector(
    (state: RootState) => state.text.Text
  );
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getTextAsync.request(id));
  }, [dispatch, id]);

  return (
    <>
      {loading && <Loading />}
      {error && <p style={{ textAlign: "center" }}>Error!</p>}
      {data && (
        <TextContent title={data.title} author={data.author} text={data.text} />
      )}
    </>
  );
};

export default TextContentContainer;
