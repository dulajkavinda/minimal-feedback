import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import Feedback from './feedback/Feedback'
import ChatIcon from '@material-ui/icons/Chat'

const MinimalFeedback = ({ onChange, value, save }) => {
  const [feedback, setFeedback] = useState(false)
  function toggleModal() {
    setFeedback(!feedback)
  }

  return (
    <div>
      <Button
        startIcon={<ChatIcon />}
        onClick={() => setFeedback(true)}
        style={{
          marginTop: '9px',
          position: 'fixed',
          bottom: '15px',
          right: '15px',
          backgroundColor: '#FFF',
          borderRadius: '100px',
          boxShadow: '0px 0 1px 0.1rem rgba(94,43,250,.25)'
        }}
        variant='contained'
      >
        Feedback
      </Button>
      <Feedback
        save={save}
        value={value}
        onChange={onChange}
        modal={feedback}
        toggle={toggleModal}
      />
    </div>
  )
}

export default MinimalFeedback
