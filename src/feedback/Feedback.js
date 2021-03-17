import React, { useState } from 'react'
import styles from '../styles.module.css'

import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import Modal from 'react-modal'
import Done from './Done'
import Issue from './Issue'
import BugReportIcon from '@material-ui/icons/BugReport'
export default function Feedback(props) {
  const [window, setWindow] = useState('menu')
  return (
    <Modal
      className={styles.mymodal}
      overlayClassName={styles.myoverlay}
      isOpen={props.modal}
      onRequestClose={props.toggle}
    >
      <div className={styles.feedback_main}>
        {window === 'menu' ? (
          <div className={styles.feedback_wrapper}>
            <span className={styles.feedback_title}>What's on your mind?</span>
            <div className={styles.feedback_items}>
              <div
                onClick={() => setWindow('issue')}
                className={styles.feedback_item}
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  <BugReportIcon
                    style={{ width: '50px', height: '50px', color: '#ff5252' }}
                  />
                  Issue
                </div>
              </div>
              <div
                onClick={() => setWindow('idea')}
                className={styles.feedback_item}
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  <EmojiObjectsIcon
                    style={{ width: '50px', height: '50px', color: '#F0BC2E' }}
                  />
                  Idea
                </div>
              </div>
              <div
                onClick={() => setWindow('other')}
                className={styles.feedback_item}
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  <MoreHorizIcon
                    style={{ width: '50px', height: '50px', color: '#3c3737' }}
                  />
                  Other
                </div>
              </div>
            </div>
          </div>
        ) : window === 'idea' ? (
          <Issue
            onChange={props.onChange}
            save={props.save}
            message={props.value}
            placeholder='I would love...'
            type='idea'
            toggle={setWindow}
            title='Share an idea'
            icon={
              <EmojiObjectsIcon
                style={{ width: '20px', height: '20px', color: '#F0BC2E' }}
              />
            }
          />
        ) : window === 'other' ? (
          <Issue
            onChange={props.onChange}
            save={props.save}
            message={props.value}
            placeholder='What do you want us to know?'
            type='anything'
            toggle={setWindow}
            title='Tell us anything!'
            icon={null}
          />
        ) : window === 'done' ? (
          <Done toggle={setWindow} />
        ) : (
          <Issue
            onChange={props.onChange}
            save={props.save}
            message={props.value}
            placeholder='I noticed that...'
            type='issue'
            toggle={setWindow}
            title='Report an Issue'
            icon={
              <BugReportIcon
                style={{ width: '20px', height: '20px', color: '#ff5252' }}
              />
            }
          />
        )}
      </div>
    </Modal>
  )
}
