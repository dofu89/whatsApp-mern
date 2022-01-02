import { Avatar } from '@mui/material'
import '../styles/SidebarChat.scss'

const SidebarChat = () => {
  return (
    <div className='sidebar-chat'>
      <Avatar
        src='https://cdn.iconscout.com/icon/free/png-256/avatar-373-456325.png'
        alt='C'
      />
      <div className='sidebar-chat-info'>
        <h2>Room Name</h2>
        <p>This is a last message</p>
      </div>
    </div>
  )
}

export default SidebarChat
