import React, { useState } from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import MinimalFeedback from '.'

const TestComponent = ({ save }) => {
  const [value, setValue] = useState({ feedback: '' })

  return <MinimalFeedback onChange={setValue} save={save} value={value} />
}

describe('MinimalFeedback', () => {
  it('renders', () => {
    render(<MinimalFeedback />)
    expect(screen.getByText('Feedback')).toBeInTheDocument()
  })

  it('matches demo.gif', async () => {
    const save = jest.fn()
    render(<TestComponent save={save} />)

    userEvent.click(screen.getByText('Feedback'))
    await screen.findByText('Whats on your mind?')

    userEvent.click(screen.getByText('Issue'))
    userEvent.type(screen.getByPlaceholderText('I noticed that...'), 'Bugg!')
    userEvent.click(screen.getByText('Send Feedback'))
    await screen.findByText('Thanks! We received your feedback.')
    expect(save).toHaveBeenCalledWith()

    userEvent.click(screen.getByText('send another'))
    userEvent.click(screen.getByText('Idea'))
    await screen.findByPlaceholderText('I would love...')

    userEvent.click(screen.getByRole('button', { name: 'back' }))
    userEvent.click(screen.getByText('Other'))
    await screen.findByPlaceholderText('What do you want us to know?')

    userEvent.click(screen.getByRole('button', { name: 'back' }))
    userEvent.click(screen.getByText('Feedback'))
  })
})
