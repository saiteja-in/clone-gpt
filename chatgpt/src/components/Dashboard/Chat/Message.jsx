import React from 'react';
import { GrUser } from 'react-icons/gr';
import { FcMindMap } from 'react-icons/fc';
import SlowText from './SlowText';

const Message = ({ content, aiMessage, animate }) => {
  return (
    <div className={`w-full flex justify-center py-2 lg:py-5 ${aiMessage ? "" : ""}`}>
      <div className="w-full max-w-4xl flex">
        <div className="w-9 h-9 flex items-center justify-center">
          {aiMessage ? <FcMindMap /> : <GrUser />}
        </div>
        <p className={` ${aiMessage ? "text-blue-500" : "text-white"} w-full ml-5 my-2 word-wrap break-word`}>
          {animate ? <SlowText speed={20} text={content} /> : content}
        </p>
      </div>
    </div>
  );
};

export default Message;
