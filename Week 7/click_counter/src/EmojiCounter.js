import "./EmojiCounter.css";
import happy from "./happy.png";
import like from "./like.png";
import love from "./Love.png";
import sad from "./sad.png";
import Click from "./EmojiClick";

function EmojiCounter() {
  return (
    <div className="App">
      <div className="title">
        <h3>Emoji Counter</h3>
      </div>
      <div className="content">
        <div className="row">
          <Click img={happy} alt="happy"></Click>
          <Click img={sad} alt="sad"></Click>
        </div>
        <div className="row">
          <Click img={like} alt="like"></Click>
          <Click img={love} alt="love"></Click>
        </div>
      </div>
    </div>
  );
}

export default EmojiCounter;
