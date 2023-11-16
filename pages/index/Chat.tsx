import './Chat.css';
import {
  MessageList,
  MessageBox
} from 'react-chat-elements';
import { Controls } from './Controls';
import { ChatInput } from './ChatInput';
import 'react-chat-elements/dist/main.css';

export { Chat }

function Chat({onAnalyzeClick, onBackToMapClick, mapMode, chatMessages, userMessage, onUserMessage, onSend }) {

  const messageListItems = chatMessages.map((m, i) => {
    return (
      <MessageBox
        className="blah"
        key={'mbox-'+i}
        title={m.title}
        position={m.position}
        type={'text'}
        text={
          <>
            <div dangerouslySetInnerHTML={{__html: m.text}} />
          </>
        }>
      </MessageBox>
    )
  });

  return (
    <div style={{height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Controls onAnalyzeClick={onAnalyzeClick} onBackToMapClick={onBackToMapClick} mapMode={mapMode} />
      <div className="messageListContainer">
        {/* @ts-ignore TS2322 */}
        <div className="message-list">
          <div className="rce-mlist">
            { messageListItems } 
          </div>
        </div>
      </div>

      <ChatInput userMessage={userMessage} onUserMessage={onUserMessage} onSend={onSend} />
    </div>
  );
}
