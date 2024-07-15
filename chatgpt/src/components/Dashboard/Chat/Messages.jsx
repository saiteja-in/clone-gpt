import React from 'react';
import Message from './Message';

const Messages = () => {
  return (
    <div className="w-full flex-grow px-4 lg:px-10 py-4 lg:py-8 justify-center">
      <Message content="ididunt ut labore et dolore magna aliqua. Ut enim ad minim va" aiMessage={false} />
      <Message animate content="Lorem i cfdssssssssssadg hoijsdahfk ksjdfhds dkjf sdkjfdskjlfn dskjfndskljf kdsjfds kfjndslkjfn dskjfnds kfjdskjfn dskjf sdkjf dskjfn dskjf dskjfn dskzfjn dskfjdsf ommodo consequa" aiMessage={true} />
    </div>
  );
};

export default Messages;
