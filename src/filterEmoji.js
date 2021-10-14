import emoji from "./emojiList.json";

export default function filterEmoji(filterText, maxLength) {
    const filteredEmojies = emoji
        .filter((emo) => {
            if (emo.title.toLowerCase().includes(filterText)) {
                return emo;
            }
            if (emo.keywords.toLowerCase().includes(filterText)) {
                return emo;
            }
            return false;
        })
        .slice(0, maxLength);
    return filteredEmojies;
}
