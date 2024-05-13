import './ViewAll.less';
import {Link, useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {GETAllEntries} from "../../api/getFunctions";

export function ViewAll() {
    const [entries, setEntries] = useState([])

    useEffect(() => {
        GETAllEntries().then(response => {
            if (response.data) {
                const result = response.data.reverse();
                setEntries(result);
            }
        })
    }, []);

    return (
        <div className={"viewall-container"}>
            <h1>Posts</h1>
            <div className={"entries"}>
                {entries.map((entry, index) => (
                    <p key={index}>{entry}</p>
                ))}
            </div>
            <Link to={"/"}>
                <button className={"today-button"}>Back</button>
            </Link>
        </div>
    );
}