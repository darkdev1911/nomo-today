import './Success.less';
import {Link, useLocation} from "react-router-dom";

export function Success() {
    const location = useLocation();
    const receivedData = location.state?.data;
    return (
        <div className={"success-container"}>
            <h1>You Are Done!!!</h1>
            <Link to={"/"}>
                <button className={"today-button"}>Back</button>
            </Link>
        </div>
    );
}