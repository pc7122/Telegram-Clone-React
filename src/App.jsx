import Tabs from "./components/Tabs";
import Header from "./components/Header";
import SearchBar from "./components/Searchbar";
import Messages from "./components/Messages";
import Chats from "./components/Chats";
import ChatHeader from "./components/ChatHeader";
import { useState } from "react";

function App() {
  const [chatId, setChatId] = useState(0);
  const [username, setUsername] = useState("");

  return (
    <>
      <div className={chatId == 0 ? "" : "hidden md:block"}>
        <Header />
        <Tabs />
        <div className="flex">
          <SearchBar />
          <ChatHeader username={username} chatId={chatId} />
        </div>
      </div>

      <div className={chatId == 0 ? "hidden" : "block md:hidden"}>
        <ChatHeader username={username} setChatId={setChatId} />
      </div>

      <div className="md:flex">
        <div className={chatId == 0 ? "md:ms-24 md:w-1/3" : "md:ms-24 md:w-1/3 hidden md:block"}>
          <Messages onClick={setChatId} setUsername={setUsername} />
        </div>
        <div className="md:flex-1">
          <Chats chatId={chatId} />
        </div>
      </div>
    </>
  );
}

export default App
