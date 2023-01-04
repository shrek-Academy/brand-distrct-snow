// external import statements
import { message, Button } from "antd";
import { useNavigate } from "react-router-dom";

// internal import statements
import { Success } from "../../../assets/img";
import { useEffect } from "react";

const VerificationComplete = () => {
    const navigate = useNavigate();

    let run = true;
    useEffect(() => {
        if (run) {
            message.success("Your account has been verified successfully.");
            // eslint-disable-next-line react-hooks/exhaustive-deps
            run = false;
        }
    }, []);

    const handleContinue = () => {
        message.success("Welcome, You can now log in with your account.");
        navigate("/signin");
    };

    return (
        <>
            <div className="verification">
                <h2>Account Created</h2>
                <div style={{ margin: "20px" }}>
                    <Success />
                </div>
                <div id="veri-sec" style={{ width: "70%" }}>
                    <p>
                        Your account has been created successfully. Press
                        continue to start using the app.
                    </p>
                    <Button
                        type="primary"
                        block
                        size="large"
                        onClick={handleContinue}
                    >
                        Continue
                    </Button>
                    <p>
                        By clicking continue, you agree to our{" "}
                        <a href="/policy">
                            {" "}
                            <span>Privacy Policy</span>
                        </a>
                        and our{" "}
                        <a href="/terms">
                            {" "}
                            <span>Terms and Conditions</span>
                        </a>
                    </p>
                </div>
            </div>
        </>
    );
};

export default VerificationComplete;
