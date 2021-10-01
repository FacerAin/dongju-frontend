import React, { FC } from "react";
import { Input, Select } from "antd";
import { SearchOutlined } from "@ant-design/icons";
const { Option } = Select;

interface SearchBoxProps {
  onChangeSearchWord: any;
  onChangeOption: any;
  searchWord: string;
}

const SearchBox: FC<SearchBoxProps> = function ({
  onChangeSearchWord,
  searchWord,
  onChangeOption,
}) {
  return (
    <Input.Group>
      <Select onChange={onChangeOption} defaultValue="제목">
        <Option value="title">제목</Option>
        <Option value="author">저자</Option>
      </Select>
      <Input
        onChange={onChangeSearchWord}
        value={searchWord}
        suffix={<SearchOutlined />}
        style={{ width: "30%" }}
      />
    </Input.Group>
  );
};

export default SearchBox;
