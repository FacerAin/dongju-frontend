import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "modules";
import TextList from "components/text/TextList";
import { getTextAllAsync } from "modules/text";

function TextAllLoader() {}
const TextListEX = [
  {
    id: "abc",
    title: "서시",
    author: "윤동주",
    summary: "죽는 날까지 하늘을 우러러 한점 부끄럼이 없기를",
  },
  {
    id: "abc2",
    title: "너에게 묻는다",
    author: "안도현",
    summary: "연탄재 함부로 발로 차지 마라",
  },
];
const TextListContainer: FC = function () {
  const { data, loading, error } = useSelector(
    (state: RootState) => state.text.Texts
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTextAllAsync.request(""));
  }, []);

  return (
    <>
      {loading && <p style={{ textAlign: "center" }}>로딩중..</p>}
      {error && <p style={{ textAlign: "center" }}>에러 발생!</p>}
      {data && <TextList texts={data} />}
    </>
  );
};

export default TextListContainer;
//
