import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';

const NewChatButton = () => {
  return (
    <div className="m-2 lg:m-1.5 h-11 border border-gray-400 rounded-lg transition duration-400 text-white flex items-center hover:opacity-50 cursor-pointer">
      <div className="mt-1 ml-2.5">
        <AiOutlinePlus color="white" />
      </div>
      <p className="ml-2.5 text-sm text-white overflow-hidden whitespace-nowrap overflow-ellipsis">New Chat</p>
    </div>
  );
};

export default NewChatButton;
