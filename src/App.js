import { useState } from "react";
import "./styles.css";
// var username=prompt("your name please");
//emoji dictionary
const emojidictionary = {
  "💣": "bomb",
  "🍋": "lemon",
  "🎪": "circus",
  "🚓": "police car",
  "😇": "blessed face"
};
var emojisweknow = Object.keys(emojidictionary);
export default function App() {
  const [meaning, setmeaning] = useState("");

  function emojiinputhandler(event) {
    var userinput = event.target.value;
    var meaning = emojidictionary[userinput];
    if (meaning === undefined) {
      meaning = "meaning not found";
    }
    setmeaning(meaning);
  }
  function emojiclickhandler(emoji) {
    var meaning = emojidictionary[emoji];
    setmeaning(meaning);
  }

  return (
    <div className="App">
      <h1>emoter</h1>
      <input onClick={emojiinputhandler} />
      <div> {meaning}</div>
      <h2>emojis you are familier with</h2>
      {emojisweknow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiclickhandler(emoji)}
            style={{ fontSize: "2rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
            {""}
          </span>
        );
      })}
    </div>
  );
}
