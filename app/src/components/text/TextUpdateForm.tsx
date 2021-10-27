import { FC } from 'react';
import styled from '@emotion/styled';
import { Form, Input, Button, Checkbox } from 'antd';
interface TextUpdateFormProps {
	onChange: any;
	onSubmit: any;
	onCheckChange: any;
	FormData: {
		title: string;
		author: string;
		text: string;
		check: boolean;
	};
	defaultFormData: {
		title: string;
		author: string;
		text: string;
		check: boolean;
	};
}
const TextUpdateFormWrapper = styled.div`
	display: flex;
	flex-direction: column;
	border-radius: 10px;
	box-shadow: 0 0 8px rgba(0, 0, 0, 0.15);
	width: 70%;
	height: 90%;
	padding-top: 50px;
	padding-left: 70px;
`;

const TextUpdateForm: FC<TextUpdateFormProps> = function ({
	onChange,
	onSubmit,
	onCheckChange,
	defaultFormData,
	FormData: { title, author, text, check },
}) {
	return (
		<TextUpdateFormWrapper>
			<Form
				name="TextInput"
				labelCol={{ span: 4 }}
				wrapperCol={{ span: 14 }}
				initialValues={{ remember: true }}
				autoComplete="off"
				onFinish={onSubmit}
			>
				<Form.Item label="Title" name="title">
					<Input
						name="title"
						defaultValue={defaultFormData.title}
						value={title}
						onChange={onChange}
					/>
				</Form.Item>

				<Form.Item label="Author" name="author">
					<Input
						name="author"
						defaultValue={defaultFormData.author}
						value={author}
						onChange={onChange}
					/>
				</Form.Item>

				<Form.Item label="Text" name="text">
					<Input.TextArea
						rows={10}
						name="text"
						defaultValue={defaultFormData.text}
						onChange={onChange}
						value={text}
					/>
				</Form.Item>

				<Form.Item name="check" valuePropName="check" wrapperCol={{ offset: 4, span: 5 }}>
					<Checkbox defaultChecked={defaultFormData.check} checked={check} onChange={onCheckChange}>
						check
					</Checkbox>
				</Form.Item>

				<Form.Item wrapperCol={{ offset: 4, span: 5 }}>
					<Button type="primary" htmlType="submit">
						추가
					</Button>
				</Form.Item>
			</Form>
		</TextUpdateFormWrapper>
	);
};

export default TextUpdateForm;