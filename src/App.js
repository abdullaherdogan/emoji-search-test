import "./App.css";
import EmojiList from "./components/EmojiList";
import Header from "./components/Header";
import Input from "./components/Input";
import { FilterTextProvider } from "./context/FilterTextContext";
function App() {
    return (
        <div className="App">
            <Header />
            <FilterTextProvider>
                <Input />
                <EmojiList />
            </FilterTextProvider>
        </div>
    );
}

export default App;
