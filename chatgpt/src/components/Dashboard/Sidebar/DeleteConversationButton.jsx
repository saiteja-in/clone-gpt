import React from 'react';
import { AiOutlineDelete } from 'react-icons/ai';

const DeleteConversationsButton = () => {
  return (
    <div className="m-2 lg:m-1.5 h-11 transition duration-400 flex items-center hover:opacity-50 cursor-pointer" onClick={() => {}}>
      <div className="mt-1 ml-2.5">
        <AiOutlineDelete color="white" />
      </div>
      <p className="ml-2.5 text-sm text-white overflow-hidden whitespace-nowrap overflow-ellipsis">Delete conversations</p>
    </div>
  );
};

export default DeleteConversationsButton;
