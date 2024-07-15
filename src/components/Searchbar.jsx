import { useEffect, useRef, useState } from "react";
import { IoClose } from "react-icons/io5";

function SearchBar({ view }) {
    const [search, setSearch] = useState('')
    const buttonRef = useRef(null)

    useEffect(() => {
        if (search.length > 0) {
            buttonRef.current.style.display = 'block'
        } else {
            buttonRef.current.style.display = 'none'
        }
    }, [search]);

    return (
        <div className={view ? "flex relative md:hidden" : "hidden md:block ms-24 md:w-1/3 relative p-2"}>
            <input
                type="text"
                placeholder="Search"
                className={view ? "w-full p-1 text-base outline-none bg-transparent" : "w-full py-2 px-4 text-md outline-none border rounded-full"}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <button
                ref={buttonRef}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xl"
                onClick={() => setSearch('')}
            >
                <IoClose />
            </button>
        </div>
    );
}

export default SearchBar;