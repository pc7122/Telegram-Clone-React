import { PiChatsCircleBold } from "react-icons/pi";

function Tabs() {
    return (
        <div className="md:mt-14 sticky md:fixed top-0 left-0 md:w-24 md:h-screen w-screen px-5 md:p-5 flex md:flex-col gap-4 text-3xl text-white bg-slate-800">
            <div className="flex flex-col items-center active-tab py-5 md:py-0">
                <PiChatsCircleBold className="md:block hidden" />
                <p className="md:text-xs text-sm">All Chats</p>
            </div>
            <div className="flex flex-col items-center py-5 md:py-0">
                <PiChatsCircleBold className="md:block hidden" />
                <p className="md:text-xs text-sm">Groups</p>
            </div>
        </div>
    );
}

export default Tabs;