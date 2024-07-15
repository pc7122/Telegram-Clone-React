import { IoMdSearch } from "react-icons/io";
import { MdMenu } from "react-icons/md";
import { FaArrowLeft } from "react-icons/fa6";
import SearchBar from "./Searchbar";
import { useState } from "react";

function Header() {
    const [showSearch, setShowSearch] = useState(false);

    return (
        <div className="flex justify-between md:justify-center items-center p-5 text-2xl md:text-3xl md:fixed md:top-0 md:w-24 bg-slate-800 text-white">
            <div className="flex items-center gap-5">
                <div>
                    {
                        showSearch ? <FaArrowLeft onClick={() => setShowSearch(false)} /> : <MdMenu />
                    }
                </div>
                <div className="md:hidden">
                    {
                        !showSearch && <h1 className="font-semibold">Telegram</h1>
                    }
                </div>
            </div>
            <div className="md:hidden">
                {
                    !showSearch && <IoMdSearch onClick={() => setShowSearch(true)} />
                }
            </div>
            {
                showSearch &&
                (<div className="flex-1">
                    <SearchBar view="mobile" />
                </div>)
            }
        </div>
    );
}

export default Header;