
import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

const ChatbotBubble = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat bubble when closed */}
      {!isOpen && (
        <button
          onClick={toggleChatbot}
          className="bg-primary hover:bg-primary/90 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-105"
          aria-label="Open chatbot"
        >
          <MessageCircle size={24} />
        </button>
      )}

      {/* Chatbot iframe when open */}
      {isOpen && (
        <div className="bg-card rounded-lg shadow-xl border border-border overflow-hidden flex flex-col w-[350px] md:w-[400px]">
          <div className="flex justify-between items-center p-3 bg-primary/10">
            <h3 className="font-medium text-foreground">AI Assistant</h3>
            <button 
              onClick={toggleChatbot}
              className="text-muted-foreground hover:text-foreground"
              aria-label="Close chatbot"
            >
              <X size={18} />
            </button>
          </div>
          <div className="w-full h-[600px]">
            <iframe
              src="https://www.chatbase.co/chatbot-iframe/CXhUAAxwif-VA3Bwp4qhA"
              width="100%"
              height="100%"
              frameBorder="0"
              className="w-full h-full"
              title="Vipin's AI Assistant"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatbotBubble;
