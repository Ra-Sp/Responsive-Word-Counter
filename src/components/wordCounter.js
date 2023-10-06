import {useState} from "react";
import "./wordCounter.css";

export function WordCounter()
{
    const [text, setText] = useState('');
    const wordCount = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;

    const handleTextChange = (event) => {
        setText(event.target.value);
    };

    return(
        <div class="word-counter">
            <textarea
            rows="5"
            value={text}
            onChange={handleTextChange} />
            <p>Word Count: {wordCount}</p>
        </div>
    )
}

