import { useState } from 'react'

import './index.css'

import Header from './components/Header.jsx'
import Outlet from './components/Outlet.jsx'
import Footer from './components/Footer.jsx'







function App() {
  const [count, setCount] = useState(0)

  
  // 先写首页组件
  return (
    <>
      <Header />
      <main className="flex-grow p-4 bg-gray-100">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default App
