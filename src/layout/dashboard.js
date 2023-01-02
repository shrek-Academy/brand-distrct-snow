// external import statements
import { Space } from "antd";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

// internal import statements
import {
    LogoIcon,
    HomeOutlined,
    Account,
    Task,
    Profile,
    Reward,
    Wallet,
    Logout,
    CreateTaskIcon,
} from "../assets/icons";
import Separator from "../Components/separator";
import LogoButton from "../Components/logo-button";
import { useState } from "react";

const DashboardLayout = () => {
    const navigate = useNavigate();
    const [sideTab, setSideTab] = useState("");
    const ListItem = ({ link, Icon, text }) => (
        <div>
            <NavLink end to={link}>
                <div>{Icon}</div>
                <div>
                    <p>{text}</p>
                </div>
            </NavLink>
        </div>
    );

    return (
        <div className="dashboard">
            <aside>
                <Space direction="vertical" align="center">
                    <div id="bar-logo">
                        <LogoIcon />
                    </div>
                    <div>
                        <ListItem
                            link="/app"
                            Icon={<HomeOutlined />}
                            text="Dashboard"
                        />
                        <ListItem
                            link="/app/advocate"
                            Icon={<Account />}
                            text="Manage Advocates"
                        />
                        <ListItem
                            link="/app/analysis"
                            Icon={<Task />}
                            text="Task Analysis"
                        />
                        <ListItem
                            link="/app/profile"
                            Icon={<Profile />}
                            text="Profile"
                        />
                        <ListItem
                            link="/app/rewards"
                            Icon={<Reward />}
                            text="Rewards"
                        />
                        <ListItem
                            link="/app/wallet"
                            Icon={<Wallet />}
                            text="Wallet"
                        />
                        <ListItem
                            link="/app/logout"
                            Icon={<Logout />}
                            text="Log out"
                        />
                    </div>

                    <button
                        style={{
                            border: "none",
                            background: "transparent",
                            marginTop: "2rem",
                            cursor: "pointer",
                        }}
                        onClick={() => navigate("/app/new-task")}
                    >
                        <Space direction="vertical" align="center">
                            <CreateTaskIcon />
                            <p>Create New Task</p>
                        </Space>
                    </button>
                </Space>
            </aside>
            <main>
                <section className="mainpiece main-content-section">
                    <Outlet {...{ sideTab, setSideTab }} />
                </section>
                <section className="sidepiece">
                    <LogoButton />
                    <Separator width={0} height="30px" />
                    {/* latestAchievement component missing */}
                </section>
            </main>
        </div>
    );
};

export default DashboardLayout;
