import './EnterPost.less';
import {useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";

export function EnterPost() {
    const [text, setText] = useState("");
    const {type} = useParams();
    const navigate = useNavigate();

    const handleChange = (event: any) => {
        setText(event.target.value);
    };

    const handleSubmit = (event: any) => {
        event.preventDefault();
        // Do something with the text, e.g., send it to a server
        console.log("Submitted text:", text);
        // Reset the text input
        setText("");
        navigate('/payandconfirm', {state: {data: text, type: type}});
    };

    return (
        <div className={"enter-post-container"}>
            <h1>{type?.toUpperCase()}</h1>
            <textarea
                rows={10}
                cols={15}
                value={text}
                onChange={handleChange}
                placeholder="Enter your text here..."
              />

            <button className={"today-button"} onClick={handleSubmit}>Submit</button>

            <Link to={"/"}>
                <button className={"today-button"}>Back</button>
            </Link>
        </div>

    );
}