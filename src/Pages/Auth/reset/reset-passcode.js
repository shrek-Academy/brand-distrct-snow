// external import statements
import { Space, message } from "antd";

// internal import statements
import { useEffect } from "react";
import FormResetPassCode from "./components/form-reset-passcode";

function ResetPasscode() {
    let run = true;
    useEffect(() => {
        if (run) {
            message.success("You can now change your account passcode.");
            // eslint-disable-next-line react-hooks/exhaustive-deps
            run = false;
        }
    }, []);

    return (
        <Space direction="vertical" align="center">
            <div style={{ marginTop: "2rem" }}>
                <h2>Reset Passcode</h2>
                <br />
                <p>Welcome back. Enter your new password.</p>
            </div>
            <FormResetPassCode />
        </Space>
    );
}

export default ResetPasscode;
