import React, { useState } from 'react';
import logo from "../assets/ai baba.jpeg"
const Chatbot = () => {
  const [isChatbotVisible, setChatbotVisible] = useState(false); // State to manage chatbot visibility

  const toggleChatbot = () => {
    setChatbotVisible(!isChatbotVisible); // Toggle the chatbot visibility
  };

  return (
    <div className="fixed bottom-10 right-10 z-50"> {/* Button position on bottom right */}
      <button 
        onClick={toggleChatbot} 
        className="bg-orange-500 text-white font-bold py-2 px-4 rounded-full shadow-lg transition-transform duration-300 hover:scale-105"
      >
        <img className='rounded-full w-10 h-10' src={logo} />
        <h1>Chat</h1>
      </button>

      {isChatbotVisible && ( // Render the chatbot iframe conditionally
        <div className="w-[18rem] h-[25rem] rounded-lg overflow-hidden shadow-lg mt-2">
          <iframe
            style={{ height: '100%', width: '100%' }} // Use object notation for styles
            frameBorder="0"
            src="https://widget.botsonic.com/CDN/index.html?service-base-url=https%3A%2F%2Fapi-azure.botsonic.ai&token=47f7df8d-8b89-47d8-9676-c4e5e598f89b&base-origin=https%3A%2F%2Fbot.writesonic.com&instance-name=Botsonic&standalone=true&page-url=https%3A%2F%2Fbot.writesonic.com%2Fbots%2F7cdffaa7-29c8-4852-8d4a-822cfe20fef7%2Fconnect"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
