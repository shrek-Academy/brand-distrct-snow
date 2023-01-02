// external import statements
import { Row, Col, Space } from "antd";
import { NavLink, Outlet } from "react-router-dom";

// internal import statements
import { AppleDownload, PlayStoreDownload } from "../assets/icons";
import { WhiteLogo } from "../assets/img";

const AuthLayout = () => {
    return (
        <div className="auth">
            <Row>
                <Col className="left-side" span={15}>
                    <div id="overlay">
                        <header>
                            <nav>
                                <Space>
                                    <div className="logo">
                                        <WhiteLogo />
                                        <p>
                                            <span>Brand</span>
                                            <span>District</span>
                                        </p>
                                    </div>
                                    <div>
                                        <NavLink to="/">
                                            For Corporate Organizations
                                        </NavLink>
                                    </div>
                                    <div>
                                        <NavLink to="/individual">
                                            For Individuals
                                        </NavLink>
                                    </div>
                                    <div>
                                        <NavLink to="/brand">
                                            For Brands
                                        </NavLink>
                                    </div>
                                </Space>
                            </nav>
                        </header>
                        <section>
                            <h1>BrandDistrict</h1>
                            <h2>
                                Build valuable relationships with your audience
                            </h2>
                            <p>
                                BrandDistrict is the smart online branding
                                platforn that allows you to create a strong
                                brand that will get and keep people’s attention.
                                Branding has always been a vital part of
                                business, hence your brand needs to go the extra
                                mile of ensuring they stand out in a crowd.
                            </p>
                        </section>
                        <Space direction="vertical">
                            <p id="que">Are you a Brand Advocate?</p>
                            <Space>
                                <a href="https://google.com">
                                    <PlayStoreDownload />
                                </a>
                                &emsp;
                                <a href="https://appstore.com">
                                    <AppleDownload />
                                </a>
                            </Space>
                        </Space>
                    </div>
                </Col>
                <Col className="right-side" span={9}>
                    <Outlet />
                </Col>
            </Row>
        </div>
    );
};

export default AuthLayout;
