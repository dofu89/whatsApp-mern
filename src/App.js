import React, { useEffect, useState } from 'react'
import './App.scss'
import Sidebar from './components/Sidebar'
import Chat from './components/Chat'
import Pusher from 'pusher-js'
import axios from './axios'

const App = () => {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    const fetchMesages = async () => {
      let msgs = await axios.get('/api/v1/messages/sync')
      msgs = await msgs.data
      await setMessages(msgs)
    }
    fetchMesages()
  }, [])

  useEffect(() => {
    const pusher = new Pusher('114333fe3013bf243125', {
      cluster: 'eu',
    })

    const channel = pusher.subscribe('messages')
    channel.bind('inserted', (data) => {
      setMessages([...messages, data])
    })
    return () => {
      channel.unbind_all()
      channel.unsubscribe()
    }
  }, [messages])

  return (
    <div className='app'>
      <div className='app-container'>
        <Sidebar />
        <Chat messages={messages} />
      </div>
    </div>
  )
}

export default App
