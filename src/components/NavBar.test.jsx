import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { MemoryRouter } from 'react-router-dom'
import { NavBar } from './NavBar'

describe('NavBar', () => {
  it('muestra el botón de menú y abre/cierra el nav en móvil', async () => {
    const user = userEvent.setup()

    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>,
    )

    const toggleButton = screen.getByRole('button', { name: /toggle menu/i })
    const nav = screen.getByRole('navigation')

    expect(toggleButton).toHaveAttribute('aria-expanded', 'false')
    expect(nav).not.toHaveClass('open')

    await user.click(toggleButton)

    expect(toggleButton).toHaveAttribute('aria-expanded', 'true')
    expect(nav).toHaveClass('open')

    await user.click(toggleButton)

    expect(toggleButton).toHaveAttribute('aria-expanded', 'false')
    expect(nav).not.toHaveClass('open')
  })
})
