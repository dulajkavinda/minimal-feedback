import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Done from './Done'

describe('Done', () => {
  it('can be closed accessibly', () => {
    const toggle = jest.fn()
    render(<Done toggle={toggle} />)

    userEvent.click(screen.getByRole('button', { name: 'close' }))

    expect(toggle).toHaveBeenCalledWith('menu')
  })
})
