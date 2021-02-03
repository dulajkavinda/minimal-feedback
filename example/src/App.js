import React, { useState } from 'react'

import MinimalFeedback from 'minimal-feedback'
import 'minimal-feedback/dist/index.css'

const App = () => {
  const saveFeedback = () => {
    console.log(text)
  }

  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }
  const [text, settext] = useState({ feedback: '' })
  return (
    <div
      style={{
        display: 'flex',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
      }}
    >
      <h1 style={{ fontFamily: 'revert' }}>minimal-feedback</h1>
      <p style={{ fontWeight: 'bold' }}>
        By{' '}
        <span
          onClick={() => openInNewTab(`https://github.com/dulajkavinda`)}
          style={{ color: 'blueviolet', fontWeight: 'bold', cursor: 'pointer' }}
        >
          Dulaj Kavinda
        </span>
      </p>
      <MinimalFeedback
        save={saveFeedback}
        value={text}
        onChange={(e) => settext(e)}
      />
    </div>
  )
}

export default App
