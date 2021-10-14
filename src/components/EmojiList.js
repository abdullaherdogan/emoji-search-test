import React from "react";
import filterEmoji from "../filterEmoji";
import { useFilterText } from "../context/FilterTextContext";
import EmojiListItem from "./EmojiListItem";
function EmojiList() {
    const { filterText } = useFilterText();
    const emojies = filterEmoji(filterText !== undefined ? filterText : "", 20);
    return (
        <ul>
            {emojies.map((emo, key) => (
                <EmojiListItem
                    id="listItem"
                    key={key}
                    title={emo.title}
                    symbol={emo.symbol}
                />
            ))}
        </ul>
    );
}

export default EmojiList;
