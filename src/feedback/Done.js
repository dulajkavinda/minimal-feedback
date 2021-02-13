import React from 'react'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'

import styles from '../styles.module.css'

export default function Done(props) {
  return (
    <div className={styles.feedback_wrapper_issues_main}>
      <div
        style={{ justifyContent: 'flex-end' }}
        className={styles.feedback_wrapper_issues}
      >
        <IconButton
          aria-label='close'
          onClick={() => props.toggle('menu')}
          size='small'
        >
          <CloseIcon />
        </IconButton>
      </div>
      <CheckCircleIcon
        style={{
          color: '#5BC15B',
          marginLeft: '10px',
          height: '40px',
          width: '40px'
        }}
      />
      <span style={{ fontSize: '15px' }} className={styles.feedback_title}>
        Thanks! We received your feedback.
      </span>
      <Button
        style={{
          marginTop: '9px',
          boxShadow: 'none',
          borderRadius: '20px',
          marginBottom: '16px'
        }}
        variant='contained'
        color='primary'
        onClick={() => props.toggle('menu')}
      >
        send another
      </Button>
    </div>
  )
}
