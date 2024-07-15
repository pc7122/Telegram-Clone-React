import { useEffect, useState } from "react";
import Message from "./Message";
import axios from "axios";

function Messages({ onClick, setUsername }) {
    const [messages, setMessages] = useState([])

    useEffect(() => {

        const fetchData = async () => {
            let list = [];
            for (let index = 1; index <= 10; index++) {
                // Fetching messages from the API endpoint
                let response = await axios.get('https://devapi.beyondchats.com/api/get_all_chats?page=' + index)
                if (!response.data.data.data) break; // If no more messages, break the loop
                list = list.concat(response.data.data.data)
            }
            console.log(list.length + " messages received");
            setMessages(list);
        }

        fetchData();

    }, []);

    const convertDate = (date) => {
        date = new Date(date);

        // Get the day, month, and year
        const day = String(date.getUTCDate()).padStart(2, '0');
        const month = String(date.getUTCMonth() + 1).padStart(2, '0'); // Months are zero-based
        const year = String(date.getUTCFullYear()).slice(-2); // Get last two digits of the year

        // Format the date as dd/mm/yy
        const formattedDate = `${day}/${month}/${year}`;

        return formattedDate;
    }

    return (
        <div className="w-full overflow-scroll h-screen">
            <div>
                {
                    messages.sort((a, b) => a.updated_at - b.updated_at).map(
                        (message, index) => {
                            const formattedDate = convertDate(message.updated_at)
                            return (
                                <Message
                                    key={index}
                                    id={message.id}
                                    username={message.creator.name ? message.creator.name : 'Anonymous'}
                                    timestamp={formattedDate}
                                    onClick={onClick}
                                    setUsername={setUsername}
                                />
                            );
                        }
                    )
                }
            </div>
        </div>
    );
}

export default Messages;