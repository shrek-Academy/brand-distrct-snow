// external import statements
import { Button, Space } from "antd";
import { Link } from "react-router-dom";

// internal import statements
import {
    GoogleIcon,
    FacebookIcon,
    TwitterIcon,
    InstgramIcon,
} from "../../../assets/icons";
import FormSignIn from "./components/form-sign-in";

const SignIn = () => {
    return (
        <Space direction="vertical" align="center">
            <div
                style={{
                    justifyContent: "space-between",
                    width: "100%",
                    display: "flex",
                }}
            >
                <Link to="/">Sign Up</Link>
                <a href="https://playstore.com" target="_bblank">
                    Download App
                </a>
            </div>
            <div style={{ marginTop: "2rem" }}>
                <h2>Welcome!</h2>
                <p>Sign In to continue</p>
            </div>
            <FormSignIn />
            <div id="social-auth">
                <Button type="primary" block icon={<GoogleIcon />} size="large">
                    Continue with Google
                </Button>
                <p style={{ fontWeight: "bold" }}>OR</p>
                <p>Sign In with any of your social media account</p>
                <div id="social-icons">
                    <Button
                        type="primary"
                        shape="circle"
                        icon={<FacebookIcon />}
                        size="large"
                    />
                    <Button
                        type="primary"
                        shape="circle"
                        icon={<InstgramIcon />}
                        size="large"
                    />
                    <Button
                        type="primary"
                        shape="circle"
                        icon={<TwitterIcon />}
                        size="large"
                    />
                </div>
                <p>
                    Don’t have an account? <Link to="/">Sign Up</Link>
                </p>
            </div>
        </Space>
    );
};

export default SignIn;
