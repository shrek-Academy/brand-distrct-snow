// external import statements
import { Form, message, Input, Button } from "antd";
import { useNavigate } from "react-router-dom";

// internal import statements
import FormInput from "../../../../Components/form-input";

function FormResetPassCode() {
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const onFinish = (values) => {
        console.log("Success:", values);
        message.success("Passcode reset successfully");
        navigate("/reset-complete");
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
                label="New Passcode"
                name="passCode"
                placeholder="Enter your new 4-digit passcode"
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
            <FormInput
                label="Retype New Passcode"
                name="confirmPassCode"
                rules={[
                    {
                        required: true,
                        pattern: "^[0-9]{4}",
                        message: "Passcode do not match",
                        len: 4,
                    },
                ]}
            >
                <Input.Password />
            </FormInput>
            <br />
            <FormInput>
                <Button block type="primary" htmlType="submit">
                    Continue
                </Button>
            </FormInput>
        </Form>
    );
}

export default FormResetPassCode;
