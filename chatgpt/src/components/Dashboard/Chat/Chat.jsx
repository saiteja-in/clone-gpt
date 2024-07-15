import React from "react";
import Messages from "./Messages";
import { useSelector } from "react-redux";
import PlaceholdersAndVanishInputDemo from "./NewMessageInput";
import { WavyBackground } from "../../UI/WavyBackGround";

const WavyBackgroundDemo = () => {
  return (
    <WavyBackground className="w-full h-full">
      <div className="max-w-4xl mx-auto pt-60">
        <p className="text-4xl md:text-4xl lg:text-8xl text-white font-bold inter-var text-center">
          ChatGPT
        </p>
        <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
        An advanced artificial intelligence designed for natural, engaging conversations and various tasks.
        </p>
      </div>
    </WavyBackground>
  );
}

const Chat = () => {
  const selectedConversationId = useSelector(
    (state) => state.dashboard.selectedConversationId
  );

  return (
    <div className="flex flex-col h-full w-full">
      <div className="relative flex-grow flex flex-col">
        {!selectedConversationId ? (
          <WavyBackgroundDemo />
        ) : (
          <>
            <Messages />
            <PlaceholdersAndVanishInputDemo />
          </>
        )}
      </div>
    </div>
  );
};

export default Chat;
