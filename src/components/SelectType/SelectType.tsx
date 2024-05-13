import './SelectType.less';
import {Link} from "react-router-dom";

type SelectTypeProps = {
    evmAddress: string
}

export function SelectType(props: SelectTypeProps) {
    const {evmAddress} = props;
    return (
        <div className={"select-type-container"}>
            <h1>NOMO Today</h1>
            <h2>{evmAddress}</h2>
            <Link to={"/enterpost/update"}>
                <button className={"today-button"}>Update</button>
            </Link>
            <Link to={"/enterpost/promotion"}>
                <button className={"today-button"}>Promotion</button>
            </Link>
            <Link to={"/enterpost/news"}>
                <button className={"today-button"}>News</button>
            </Link>
            <Link to={"/viewall"}>
                <button className={"today-button"}>View All</button>
            </Link>
        </div>
    );
}