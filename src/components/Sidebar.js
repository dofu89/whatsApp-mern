import '../styles/Sidebar.scss'
import DonutLargeIcon from '@mui/icons-material/DonutLarge'
import ChatIcon from '@mui/icons-material/Chat'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import { IconButton, Avatar } from '@mui/material'
import SidebarChat from './SidebarChat'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebar-header'>
        <Avatar
          alt='D'
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbUqkRN4QaEzCW4brgWElc7lv8HdwP8RyxJ89WdDWAoIO-rEUIACXkEXG4n2mDGMLuz4Q&usqp=CAU'
        />
        <div className='sidebar-right'>
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className='sidebar-search'>
        <div className='sidebar-search-container'>
          <SearchOutlinedIcon />
          <input type='text' />
        </div>
      </div>
      <div className='sidebar-chat-main'>
        <SidebarChat />
        <SidebarChat />
      </div>
    </div>
  )
}

export default Sidebar
