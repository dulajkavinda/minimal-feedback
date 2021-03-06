import React, { useState } from 'react'
import styles from '../styles.module.css'
import { makeStyles } from '@material-ui/core/styles'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import CloseIcon from '@material-ui/icons/Close'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      width: '100%'
    }
  }
}))
export default function Issue(props) {
  const classes = useStyles()
  const [issues, setIssues] = useState('')

  const onTextChange = (e) => {
    setIssues(e.target.value)
  }

  const submitFeedback = () => {
    props.save()
    props.toggle('done')
    props.message.feedback = ''
  }

  return (
    <div className={styles.feedback_wrapper_issues_main}>
      <div className={styles.feedback_wrapper_issues}>
        <ArrowBackIcon
          style={{ color: 'grey', cursor: 'pointer' }}
          onClick={() => props.toggle('menu')}
        />
        <span className={styles.feedback_title}>
          {props.icon}
          {props.title}
        </span>
        <CloseIcon
          style={{ color: 'grey', cursor: 'pointer' }}
          onClick={() => props.toggle('menu')}
        />
      </div>
      <form className={classes.root} noValidate autoComplete='off'>
        <TextField
          onChange={({ target: { value } }) =>
            props.onChange({ feedback: value, type: props.type })
          }
          className='inputRounded'
          placeholder={props.placeholder}
          autoFocus
          style={{ width: '280px', borderWidth: '10px' }}
          id='outlined-basic'
          variant='outlined'
          multiline
          rows={2}
          value={props.message.feedback}
          name='issues'
          inputProps={{ maxLength: 200 }}
        />
      </form>
      <Button
        disabled={props.message.feedback.length >= 1 ? false : true}
        style={{ boxShadow: 'none', marginTop: '9px', borderRadius: '20px' }}
        variant='contained'
        color='primary'
        onClick={submitFeedback}
      >
        Send Feedback
      </Button>
    </div>
  )
}
