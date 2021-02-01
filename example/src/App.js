import React, { useState } from 'react'

import MinimalFeedback from 'minimal-feedback'
import 'minimal-feedback/dist/index.css'

const App = () => {
  const saveFeedback = () => {
    console.log(text)
  }
  const [text, settext] = useState({ feedback: '' })
  return (
    <MinimalFeedback
      save={saveFeedback}
      value={text}
      onChange={(e) => settext(e)}
    />
  )
}

export default App
