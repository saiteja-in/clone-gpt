import React from "react";
import NewChatButton from "./NewChatButton";
import ListItem from "./ListItem";
import { useDispatch, useSelector } from "react-redux";
import DeleteConversationsButton from "./DeleteConversationButton";
import { setSelectedConversationId } from "../DashboardSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  const conversations = useSelector((state) => state.dashboard.conversations);
  console.log(conversations);
  const handleSetSelectedChat = (id) => {
    dispatch(setSelectedConversationId(id));
  };
  return (
    <div className="w-full flex flex-col lg:w-1/5 bg-[#202123] text-white h-full">
      <NewChatButton handleSetSelectedChat={handleSetSelectedChat} />
      {conversations.map((c) => (
        <ListItem key={c.id} title={c.messages[0].value} chatId={c.id} />
      ))}
      <DeleteConversationsButton />
    </div>
  );
};

export default Sidebar;
