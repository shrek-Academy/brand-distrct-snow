// external import statements
import { Link } from "react-router-dom";

const NoMatch = () => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginTop: "400px",
            }}
        >
            <h2>It looks like you're lost...</h2>
            <p>
                <Link to="/">Go to the home page</Link>
            </p>
        </div>
    );
};

export default NoMatch;
