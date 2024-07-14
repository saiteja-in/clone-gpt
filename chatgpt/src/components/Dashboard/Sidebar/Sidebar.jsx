import React from 'react'
import NewChatButton from './NewChatButton'
import ListItem from './ListItem'
import DeleteConversationsButton from './DeleteConversationButton'

const Sidebar = () => {
  return (
    <div className='w-full flex flex-col lg:w-1/5 bg-[#202123] text-white h-full'>
      <NewChatButton/>
      <div className='flex-grow overflow-y-auto'>
        <ListItem title="History 1" />
        <ListItem title="Test" />
        <ListItem title="Truck" />
      </div>
      <DeleteConversationsButton />
    </div>
    
  )
}

export default Sidebar
