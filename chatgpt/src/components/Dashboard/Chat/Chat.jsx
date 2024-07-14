import React from 'react';
import Messages from './Messages';
import PlaceholdersAndVanishInputDemo from './NewMessageInput';

const Chat = () => {
  return (
    <div className="flex flex-col h-full w-full lg:w-4/5">
      <div className="flex-grow flex flex-col">
        <Messages />
        <PlaceholdersAndVanishInputDemo />
      </div>
    </div>
  );
};

export default Chat;
