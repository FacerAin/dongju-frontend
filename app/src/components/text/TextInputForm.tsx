import { FC } from "react";
import styled from "@emotion/styled";
import { Form, Input, Button, Checkbox } from "antd";
interface TextInputFormProps {
  onChange: any;
  onSubmit: any;
  FormData: {
    title: string;
    author: string;
    text: string;
  };
}
const TextInputFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.15);
  width: 70%;
  height: 90%;
  padding-top: 50px;
  padding-left: 70px;
`;

const TextInputForm: FC<TextInputFormProps> = function ({
  onChange,
  onSubmit,
  FormData: { title, author, text },
}) {
  return (
    <TextInputFormWrapper>
      <Form
        name="TextInput"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        initialValues={{ remember: true }}
        autoComplete="off"
        onFinish = {onSubmit}
      >
        <Form.Item
          label="Title"
          name="title"
          rules={[{ required: true, message: "Please input title!" }]}
        >
          <Input name="title" value={title} onChange={onChange} />
        </Form.Item>

        <Form.Item
          label="Author"
          name="author"
          rules={[{ required: true, message: "Please input author!" }]}
        >
          <Input name="author" value={author} onChange={onChange} />
        </Form.Item>

        <Form.Item
          label="Text"
          name="text"
          rules={[{ required: true, message: "Please input text!" }]}
        >
          <Input.TextArea
            rows={10}
            name="text"
            value={text}
            onChange={onChange}
          />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 4, span: 5 }}>
          <Button type="primary" htmlType="submit">
            추가
          </Button>
        </Form.Item>
      </Form>
    </TextInputFormWrapper>
  );
};

export default TextInputForm;
