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
    hiddenByDefault: false,
    handleSendButton: handleClick,
  };

const replies = [
  {
    // Chat api returns html.
    // eslint-disable-next-line xss/no-mixed-html
    text: "Welcome back, <span translate=\"no\">Test</span>. I see you're interested in our <span translate=\"no\">Open Temp test job 1</span> job in <span translate=\"no\">Jönköping, None</span>. It should take about 3 minutes to find out if this job is well suited to you. Would you like to get to it?",
  },
  {
    qs: [
      {
        value: 'Yes',
        text: 'Yes',
      },
      {
        value: 'No',
        text: 'No',
      },
    ],
  },
];

  <Chat settings={settings} replies={replies} />
  ```