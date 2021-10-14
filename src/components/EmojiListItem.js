import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
function EmojiListItem({ title, symbol }) {
    return (
        <li className="listItem">
            {symbol} {title}
            <CopyToClipboard text={symbol}>
                <button className="copyText">Copy to clipboard</button>
            </CopyToClipboard>
        </li>
    );
}

export default EmojiListItem;
