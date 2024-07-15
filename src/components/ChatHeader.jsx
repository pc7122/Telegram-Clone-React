import { IoMdSearch } from "react-icons/io";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { FaArrowLeft } from "react-icons/fa6";

function ChatHeader({ avatar, username, setChatId, chatId }) {
    return (
        <div className={chatId == 0 ? "hidden" : "fixed top-0 w-full md:relative md:flex-1 py-2 md:py-1 px-5 z-10 text-white bg-slate-800 md:text-black md:bg-white"}>
            <div className="flex justify-between items-center gap-5">
                <FaArrowLeft className='text-xl md:hidden' onClick={() => setChatId(0)} />
                <div className="flex-1 flex justify-start items-center gap-4">
                    <div>
                        {
                            avatar
                                ? <img
                                    src={avatar}
                                    alt="Avatar"
                                    className='w-12 h-12 rounded-full bg-blue-500 object-cover'
                                />
                                : <div className='flex justify-center items-center w-12 h-12 rounded-full bg-blue-500 text-xl text-white'>
                                    {username?.charAt(0).toUpperCase()}
                                </div>
                        }
                    </div>
                    <h1 className='text-lg'>{username}</h1>
                </div>
                <IoMdSearch className='text-xl' />
                <HiOutlineDotsVertical className='text-xl' />
            </div>
        </div>
    )
}

export default ChatHeader;