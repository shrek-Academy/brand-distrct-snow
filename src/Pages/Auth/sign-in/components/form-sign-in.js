// external import statements
import { Form, message, Input, Space, Checkbox, Button } from "antd";
import { Link, useNavigate } from "react-router-dom";

// internal import statements
import FormInput from "../../../../Components/form-input";

const FormSignIn = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate();

    const onFinish = (values) => {
        console.log("Success:", values);
        message.success("Welcome!");
        navigate("/app");
    };

    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    return (
        <Form
            name="basic"
            form={form}
            layout="vertical"
            initialValues={{
                remember: false,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            size="large"
        >
            <FormInput
                label="Email"
                name="email"
                type="text"
                rules={[
                    {
                        required: true,
                        message: "Please input your email/phone number!",
                    },
                ]}
            >
                <Input />
            </FormInput>
            <FormInput
                label="Passcode"
                name="passCode"
                rules={[
                    {
                        required: true,
                        pattern: "^[0-9]{4}",
                        message: "Invalid 4-digit passcode",
                        len: 4,
                    },
                ]}
            >
                <Input.Password />
            </FormInput>
            <Space
                direction="horizontal"
                align="center"
                style={{ justifyContent: "space-between", width: "100%" }}
            >
                <FormInput
                    name="remember"
                    rules={[{ required: true }]}
                    valuePropName="checked"
                    className="not-big"
                >
                    <Checkbox>Remember me</Checkbox>
                </FormInput>
                <div style={{ marginBottom: 24 }}>
                    <Link to="/forget-passcode">Forgot Passcode?</Link>
                </div>
            </Space>

            <FormInput>
                <Button block type="primary" htmlType="submit">
                    Sign In
                </Button>
            </FormInput>
        </Form>
    );
};

export default FormSignIn;
