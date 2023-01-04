// external import statements
import { Button, message } from "antd";
import { useNavigate } from "react-router-dom";

// internal import statements
import { OpenMail } from "../../../assets/img";

const ResetEmail = () => {
    const navigate = useNavigate();

    const handleContinue = () => {
        navigate("/signin");
    };

    const handleResendLink = () => {
        message.success("Verification link has been resent");
    };

    const handleSendOTP = () => {
        message.success("OTP code has been Sent");
        navigate("/reset-phone");
    };

    return (
        <>
            <div className="verification">
                <OpenMail />
                <br />
                <div id="veri-sec">
                    <p id="title">Your email is on the way</p>
                    <p>
                        Check your email at <span>inumidun123@gmail.com</span>{" "}
                        and click on the link to verify your email.
                    </p>
                    <Button
                        type="primary"
                        block
                        size="large"
                        onClick={handleContinue}
                    >
                        Continue
                    </Button>
                    <button id="reset" onClick={handleResendLink}>
                        Resend Link
                    </button>
                    <h3>Didn’t get the link?</h3>
                    <p style={{ fontWeight: "bold", fontSize: 16 }}>OR</p>
                    <p>
                        Receive a 4-digit code OTP on your phone number to reset
                        your passcode.
                    </p>
                    <Button
                        type="primary"
                        block
                        size="large"
                        onClick={handleSendOTP}
                    >
                        Send OTP
                    </Button>
                </div>
            </div>
        </>
    );
};

export default ResetEmail;
