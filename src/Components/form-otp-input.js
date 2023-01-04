import OtpInput from "react-otp-input";

const FormOTPInput = (props) => (
    <OtpInput
        {...props}
        numInputs={4}
        shouldAutoFocus
        inputStyle="newInputStyle"
        isInputNum
        separator={<span></span>}
    />
);

export default FormOTPInput;
