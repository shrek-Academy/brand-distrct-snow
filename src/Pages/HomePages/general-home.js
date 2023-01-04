// external import statements
import { Space } from "antd";
import { Link } from "react-router-dom";

const GeneralHome = () => {
    return (
        <div>
            <h2>Home</h2>
            <Space direction="vertical" align="center">
                <Space>
                    <Link to="/signin">Sign In</Link>
                    <a href="https://playstore.com" target="_bblank">
                        Download
                    </a>
                </Space>
            </Space>
        </div>
    );
};

export default GeneralHome;
