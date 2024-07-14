import React from 'react';
import { BsChatLeft } from 'react-icons/bs';

const ListItem = (props) => {
  const { title } = props;

  return (
    <div className="m-2 lg:m-1.5 h-11 transition duration-400 flex items-center hover:opacity-50 cursor-pointer" onClick={() => {}}>
      <div className="mt-1 ml-2.5">
        <BsChatLeft color="white" />
      </div>
      <p className="ml-2.5 text-sm text-white overflow-hidden whitespace-nowrap overflow-ellipsis">{title}</p>
    </div>
  );
};

export default ListItem;
