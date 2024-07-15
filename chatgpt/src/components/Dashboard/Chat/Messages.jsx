import React from 'react';
import Message from './Message';
import { useSelector } from 'react-redux';

const Messages = () => {
  const{selectedConversationId,conversations}=useSelector((state)=>state.dashboard)
  const conversation=conversations.find((c)=>c.id===selectedConversationId)
  return (
    <div className="w-full flex-grow px-4 lg:px-10 py-4 lg:py-8 justify-center">
     {conversation?.messages.map((m, index) => (
        <Message
          key={m.id}
          content={m.value}
          aiMessage={m.aiMessage}
          animate={index === conversation.messages.length - 1 && m.aiMessage}
        />
      ))}
    </div>
  );
};

export default Messages;
