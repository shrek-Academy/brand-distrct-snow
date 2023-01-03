// external import statements
import { Space } from "antd";
import { Link } from "react-router-dom";

// internal import statements
import { PlaystoreAlt, ApplestoreAlt, ArrowDownload } from "../../assets/icons";

const IndividualHome = () => {
    return (
        <>
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
            </Space>
            <div className="individual">
                <h2>Will you like to register as an individual?</h2>
                <div>
                    <ArrowDownload />
                </div>
                <p>Proceed to download our mobile app below</p>
                <div>
                    <a href="https://google.com">
                        <PlaystoreAlt />
                    </a>
                    <a href="https://appstore.com">
                        <ApplestoreAlt />
                    </a>
                </div>
            </div>
        </>
    );
};

export default IndividualHome;
