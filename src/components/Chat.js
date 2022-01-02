import { useState } from 'react'
import '../styles/Chat.scss'
import { Avatar, Button, IconButton } from '@mui/material'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import AttachFileIcon from '@mui/icons-material/AttachFile'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon'
import KeyboardVoiceOutlinedIcon from '@mui/icons-material/KeyboardVoiceOutlined'
import axios from '../axios'

const Chat = ({ messages }) => {
  const [input, setInput] = useState('')

  const sendMessage = async (e) => {
    e.preventDefault()
    await axios.post('/api/v1/messages/new', {
      name: 'dofu',
      message: input,
      timestamp: new Date(),
      received: false,
    })
    setInput('')
  }
  return (
    <div className='chat'>
      <div className='chat-header'>
        <Avatar />
        <div className='chat-header-info'>
          <h3>Room name</h3>
          <p>Last seen at...</p>
        </div>
        <div className='chat-header-right'>
          <IconButton>
            <SearchOutlinedIcon />
          </IconButton>
          <IconButton>
            <AttachFileIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      <div className='chat-body'>
        {messages
          .map((message) => (
            <p
              className={`chat-body-message ${
                message.received && 'chat-body-reciver'
              }`}
            >
              <span className='chat-message-name'>{message.name}</span>
              {message.message}
              <span className='chat-message-time'>{message.timestamp}</span>
            </p>
          ))
          .reverse()}
      </div>
      <div className='chat-footer'>
        <IconButton>
          <InsertEmoticonIcon />
        </IconButton>
        <form>
          <input
            type='text'
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder='Type your message...'
          />
          <Button disabled={!input} onClick={sendMessage}>
            Send
          </Button>
        </form>
        <IconButton>
          <KeyboardVoiceOutlinedIcon />
        </IconButton>
      </div>
    </div>
  )
}

export default Chat
