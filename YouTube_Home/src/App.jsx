import React from 'react'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Data from './data'

export default function App() {

  const thumbnails = Data.map(item => {
    return <MainContent 
      key={item.Id}
      item={item}
    />
  });
  return (
    <div>
      <Header />
      <section>
        {thumbnails}
      </section>
    </div>
  )
}
