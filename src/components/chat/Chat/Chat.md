Chat component embedded.
  ```jsx
  import { Chat, ChatLoader, ChatReply, ChatMultiSelect, ChatQuickSuggest } from '@ffw/randstad-shared-components';
  
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

  const quickSuggestItems = [
    {
      value: 'London',
    },
    {
      value: 'Chesterton',
    },
    {
      value: 'Very long name to see what happens when it spans more than one line',
    },
  ];

  const multiSelectItems = [
    {
      value: 'English',
      label: 'English',
    },
    {
      value: 'French',
      label: 'French',
    },
    {
      value: 'Dutch',
      label: 'Dutch',
    },
    {
      value: 'German',
      label: 'German',
    },
    {
      value: 'Spanish',
      label: 'Spanish',
    },
    {
      value: 'Italian',
      label: 'Italian',
    },
  ];

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
    <ChatReply type="bot" >
      What do you see?
    </ChatReply>
    <ChatQuickSuggest items={quickSuggestItems} />
    <ChatReply type="bot" >
      What languages do you speak?
    </ChatReply>
    <ChatMultiSelect items={multiSelectItems} />
  </Chat>
  ```