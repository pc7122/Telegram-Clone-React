import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { IoSend, IoAttachSharp } from "react-icons/io5";
import { GoSmiley } from "react-icons/go";

function Chats({ chatId }) {
    const [chats, setChats] = useState([]);

    // Fetch chat messages on component mount
    useEffect(() => {
        if (chatId > 0) {
            axios.get('https://devapi.beyondchats.com/api/get_chat_messages?chat_id=' + chatId)
                .then(response => {
                    console.log(response);
                    setChats(response.data.data);
                })
                .catch(error => {
                    console.error(error);
                });
        }
    }, [chatId]);

    const convertTime = (date) => {
        date = new Date(date);
        const time = date.toLocaleTimeString();

        return time;
    }

    return (
        <div>
            <div className="chat-bg pb-10 relative">
                {
                    chatId == 0
                        ? <div className="flex justify-center items-center h-screen">
                            <div className="px-3 py-1 text-white bg-white/20 rounded-full">
                                Click on chat to open
                            </div>
                        </div>
                        : (
                            <div className="flex flex-col-reverse gap-4 p-2 pr-0 pb-24 overflow-scroll h-screen">
                                {
                                    chats.sort((a, b) => b.id - a.id).map(chat => {
                                        const formattedTime = convertTime(chat.created_at);
                                        const message = chat.message

                                        return (
                                            <div key={chat.id}>
                                                <div className={chat.sender_id == 1 ? "chat sec" : "chat"}>
                                                    <p>{message}</p>
                                                    <span className="mt-1 text-xs float-end text-gray-700">{formattedTime}</span>
                                                </div>
                                            </div>
                                        );
                                    })
                                }
                            </div>
                        )
                }

                <div className="absolute bottom-10 w-full bg-white px-5">
                    <div className="flex items-center">
                        <IoAttachSharp className="mr-3 text-2xl" />
                        <input
                            type="text"
                            placeholder="Type here..."
                            className="flex-1 p-3 bg-transparent"
                        />
                        <GoSmiley className="mr-3 text-2xl" />
                        <IoSend className="text-2xl text-blue-500" />
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Chats;