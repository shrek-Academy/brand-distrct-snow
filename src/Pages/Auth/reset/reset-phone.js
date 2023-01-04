// external import statements
import { Button, message } from "antd";
import { useNavigate } from "react-router-dom";

// internal import statements
import FormOTPInput from "../../../Components/form-otp-input";
import { useState } from "react";

const ResetPhone = () => {
    const [num, setNum] = useState();
    const navigate = useNavigate();

    const handleSubmitCode = () => {
        navigate("/reset-passcode");
    };

    const handleResendOTP = () => {
        message.success("OTP Code has been resent");
    };

    const handleSendLink = () => {
        message.success("Verification link has been sent");
        navigate("/reset-email");
    };

    return (
        <>
            <style>{`
          div#veri-sec > p:not(:last-of-type), div#veri-sec > p > span {
            font-size: 16px !important;
            line-height: 24px;
          }
        `}</style>
            <div className="verification">
                <h2>Enter OTP</h2>
                <br />
                <div id="veri-sec">
                    <p>
                        Kindly enter the 4- digit code OTP sent to{" "}
                        <span>+2348112233445</span> to proceed to reset your
                        passcode.
                    </p>
                    <div style={{ marginTop: "2rem", marginBottom: "2rem" }}>
                        <FormOTPInput value={num} onChange={setNum} />
                    </div>
                    <Button
                        type="primary"
                        block
                        size="large"
                        onClick={handleSubmitCode}
                    >
                        Submit
                    </Button>
                    <br />
                    <button id="reset" onClick={handleResendOTP}>
                        Resend Code
                    </button>
                    <h3>Didn’t get the code?</h3>
                    <p style={{ fontWeight: "bold", fontSize: 16 }}>OR</p>
                    <p>
                        Receive a link in your email address to reset your
                        passcode.
                    </p>
                    <Button
                        type="primary"
                        block
                        size="large"
                        onClick={handleSendLink}
                    >
                        Send Link
                    </Button>
                </div>
            </div>
        </>
    );
};

export default ResetPhone;
