// external import statements
import { Space, Button } from "antd";
import { Link } from "react-router-dom";

// internal import statements
import {
    GoogleIcon,
    FacebookIcon,
    InstgramIcon,
    TwitterIcon,
} from "../../assets/icons";
import FormBrand from "./components/form-brand";

const BrandHome = () => {
    return (
        <Space direction="vertical" align="center">
            <div
                style={{
                    justifyContent: "space-between",
                    width: "100%",
                    display: "flex",
                }}
            >
                <Link to="/signin">Sign In</Link>
                <a href="https://playstore.com" target="_bblank">
                    Download
                </a>
            </div>
            <div style={{ marginTop: "2rem" }}>
                <h2>Welcome!</h2>
                <p>Please provide following details for your new account</p>
            </div>
            <FormBrand />
            <div id="social-auth">
                <Button type="primary" block icon={<GoogleIcon />} size="large">
                    Sign up with Google
                </Button>
                <p style={{ fontWeight: "bold" }}>OR</p>
                <p>Sign Up with any of your social media account</p>
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
                    Already have an account? <Link to="/signin">Sign In</Link>
                </p>
            </div>
        </Space>
    );
};

export default BrandHome;
