import "./styles.scss";
import Text from "./text";
import { AddLogo } from "../assets/icons";

const LogoButton = ({ logoImgUrl }) => {
    return (
        <div className="logo_button">
            <div
                style={{ backgroundImage: `url('${logoImgUrl}')` }}
                className="logo_button_img"
            />
            <Text
                color="#212121"
                fontWeight={600}
                fontSize="17px"
                margin="0 23px 0 0"
            >
                MICROSOFT
            </Text>
            <AddLogo style={{ cursor: "pointer" }} />
        </div>
    );
};

export default LogoButton;
