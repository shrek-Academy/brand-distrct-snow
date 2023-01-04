// external import statements
import { Form, message, Input, Button } from "antd";
import { useNavigate } from "react-router-dom";

// internal import statements
import FormInput from "../../../../Components/form-input";

const FormForgetPassCode = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate();

    const onFinish = (values) => {
        console.log("Success:", values);
        message.success("Reset link sent");
        navigate("/reset-email");
    };

    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    return (
        <Form
            name="basic"
            form={form}
            layout="vertical"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            size="large"
        >
            <br />
            <FormInput
                label="Email"
                name="email"
                type="email"
                rules={[
                    {
                        required: true,
                        message: "Please input your email!",
                        pattern: "^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$",
                    },
                ]}
            >
                <Input />
            </FormInput>
            <br />
            <FormInput>
                <Button block type="primary" htmlType="submit">
                    Continue
                </Button>
            </FormInput>
        </Form>
    );
};

export default FormForgetPassCode;
