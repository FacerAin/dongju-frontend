import { FC } from "react";
import styled from "@emotion/styled";
import { Form, Input, Button, Checkbox } from "antd";

const TextInputFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.15);
  width: 70%;
  height: 90%;
`;

const TextInputForm: FC = function () {
  return (
    <TextInputFormWrapper>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        autoComplete="off"
      >
        <Form.Item
          label="Title"
          name="title"
          rules={[{ required: true, message: "Please input title!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Author"
          name="author"
          rules={[{ required: true, message: "Please input author!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Text"
          name="text"
          rules={[{ required: true, message: "Please input text!" }]}
        >
          <Input.TextArea />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </TextInputFormWrapper>
  );
};

export default TextInputForm;
