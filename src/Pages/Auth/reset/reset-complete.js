// external import statements
import { Button, message } from "antd";
import { useNavigate } from "react-router-dom";

// internal import statements
import { SuccessMark } from "../../../assets/img";

function ResetComplete() {
    const navigate = useNavigate();

    const handleContinue = () => {
        message.success("Welcome, You can now log in with your new passcode.");
        navigate("/signin");
    };

    return (
        <>
            <div className="verification">
                <div style={{ margin: "30px" }}>
                    <SuccessMark />
                </div>
                <div id="veri-sec" style={{ width: "70%" }}>
                    <p id="title">Passcode Reset Successful</p>
                    <p>
                        You have successfully set a new password. Login to your
                        account to continue using the app.
                    </p>
                    <Button
                        type="primary"
                        block
                        size="large"
                        onClick={handleContinue}
                    >
                        Let's go
                    </Button>
                </div>
            </div>
        </>
    );
}

export default ResetComplete;
