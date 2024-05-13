import './PayAndConfirm.less';
import {Link, useLocation, useNavigate} from "react-router-dom";
import {POSTAddEntry} from "../../api/postFunctions";
import {nomo} from "nomo-webon-kit";
import {ZeniqTokenAsset} from "../../constants";

export function PayAndConfirm() {
    const location = useLocation();
    const receivedData = location.state?.data;
    const type = location.state?.type;
    const navigate = useNavigate();

    const handlePay = async (event: any) => {
        event.preventDefault();
        const args = {
            asset: ZeniqTokenAsset,
            targetAddress: '0x2d6D6632768EC411104207E242248Fc5Bbb19eF8',
            amount: "50000000000000000000"
        }

        // @ts-ignore
        const response = await nomo.sendAssets(args);
    };

    const handleConfirm = (event: any) => {
        event.preventDefault();
        const data = {
            entry: receivedData + ', John Doe, 2024-05-07, ' + type
        };

        POSTAddEntry(data).then(response => {
            navigate('/success', {state: {data: receivedData}});
        })
    };

    return (
        <div className={"payandconfirm-container"}>
            <h1>Pay 50 NOMO Tokens</h1>
            <button className={"today-button"} onClick={handlePay}>Pay(Demo)</button>
            <button className={"today-button"} onClick={handleConfirm}>Confirm</button>
            <Link to={"/"}>
                <button className={"today-button"}>Back</button>
            </Link>
        </div>
    );
}