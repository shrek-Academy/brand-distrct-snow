// external import statements
import { Form, message, Input, Checkbox, Button } from "antd";
import { useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-number-input";

// internal import statements
import FormInput from "../../../Components/form-input";

const FormCoporate = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate();

    const onFinish = (value) => {
        console.log("Success:", value);
        message.success("Welcome!");
        navigate("/verification");
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
                agree: false,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            size="large"
        >
            <FormInput
                label="Full Name"
                name="fullName"
                rules={[
                    {
                        required: true,
                        message: "Please input your username!",
                    },
                ]}
            >
                <Input />
            </FormInput>
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
            <FormInput
                label="Phone Number"
                name="phoneNumber"
                type="tel"
                rules={[
                    {
                        required: true,
                        message: "Please input your phone number!",
                    },
                ]}
            >
                <PhoneInput
                    defaultCountry="NG"
                    international
                    countryCallingCodeEditable={false}
                    countrySelectProps={{ unicodeFlags: true }}
                    onChange={(e) => {
                        console.log(e);
                        // form.setFieldsValue({'phoneNumber': e});
                    }}
                    className="ant-input"
                    // value={form.getFieldValue('phoneNumber')}
                    // inputComponent={Input}
                />
            </FormInput>
            <FormInput
                label="4-digit Passcode"
                name="passCode"
                rules={[
                    {
                        required: true,
                        pattern: "^[0-9]{4}",
                        message: "Please input your 4-digit Passcode!",
                        len: 4,
                    },
                ]}
            >
                <Input.Password />
            </FormInput>

            <FormInput
                name="agree"
                rules={[{ required: true }]}
                valuePropName="checked"
            >
                <Checkbox>
                    By creating your account you agree with to our{" "}
                    <a href="/policy">Terms and Conditions</a>
                </Checkbox>
            </FormInput>

            <FormInput>
                <Button block type="primary" htmlType="submit">
                    Submit
                </Button>
            </FormInput>
        </Form>
    );
};

export default FormCoporate;
