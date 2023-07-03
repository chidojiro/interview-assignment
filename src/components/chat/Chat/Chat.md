Chat component embedded.
  ```jsx
  import Chat from "./index.tsx";
  import ChatLoader from "../ChatLoader";
  import ChatReply from "../ChatReply";
  
  const handleClick = () => {
      console.log('Chat Send Button clicked');
      if (window && window.orbit && window.orbit.chatInstance) {
        window.orbit.chatInstance.userInputToSpeechBubble();
      }
  }
  const settings = {
    title: 'Virtual Assistant',
    closeButtonAriaLabel: 'close button aria label',
    logoAltText: 'logo Randstad',
    startConversationButtonText: 'start conversation',
    handleSendButton: handleClick,
  };

  <Chat settings={settings}>
    <ChatReply type="bot" first={true} >
      Welcome, I am your virtual application assistant. Thank you for your
      interest in working for
      {' '}
      <a href="#" target="_blank" className="link">Amazon</a>
      . I will
      help you complete your application. 🔥
    </ChatReply>
    <ChatReply type="bot" >
      Fill in your name below
    </ChatReply>
    <ChatLoader />
    <ChatReply type="user" first={true}>
      This is a multi line sentence. You can have more than two beautiful lines.
    </ChatReply>
    <ChatReply type="user">
      Single line sentence 😀
    </ChatReply>
  </Chat>
  ```