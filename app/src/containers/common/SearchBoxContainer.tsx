import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "modules";
import { changeSearchWord, setOption } from "modules/search";
import SearchBox from "components/common/SearchBox";
const SearchBoxContainer: FC = function () {
  const { searchWord } = useSelector((state: RootState) => state.search);
  const dispatch = useDispatch();
  const onChangeSearchWord = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeSearchWord(e.target.value));
  };

  const onChangeOption = (value: string) => {
    dispatch(setOption(value));
  };

  return (
    <SearchBox
      searchWord={searchWord}
      onChangeOption={onChangeOption}
      onChangeSearchWord={onChangeSearchWord}
    />
  );
};

export default SearchBoxContainer;
