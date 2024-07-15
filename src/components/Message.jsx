function Message({ id, avatar, username, content, timestamp, onClick, setUsername }) {
    return (
        <div className="flex justify-between items-center p-2" onClick={() => { onClick(id); setUsername(username) }}>
            <div className='flex justify-start items-center gap-4'>
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
                <div className='grid grid-rows-2 font-semibold'>
                    <div className='text-lg'>{username}</div>
                    <div className='text-base'>{content}</div>
                </div>
            </div>
            <div className='grid grid-rows-2'>
                <div>{timestamp}</div>
                <div></div>
            </div>
        </div>
    );
}

export default Message;