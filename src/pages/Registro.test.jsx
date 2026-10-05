import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { BrowserRouter } from 'react-router-dom'
import { Registro } from './Registro'

// Helper para renderizar componentes que usan <Link> de react-router-dom
const renderWithRouter = (ui) => {
  return render(<BrowserRouter>{ui}</BrowserRouter>)
}

describe('Registro', () => {
  it('renderiza todos los campos del formulario obligatorios', () => {
    renderWithRouter(<Registro />)

    expect(screen.getByLabelText(/correo electrónico \*/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/contraseña \*/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/fecha de nacimiento \*/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/código promocional/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/acepto los términos/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /registrarse/i })).toBeInTheDocument()
  })

  it('muestra el mensaje por defecto cuando se registra sin promociones', async () => {
    renderWithRouter(<Registro />)

    // Llenamos todos los campos obligatorios
    await userEvent.type(screen.getByLabelText(/correo electrónico \*/i), 'usuario@gmail.com')
    await userEvent.type(screen.getByLabelText(/contraseña \*/i), 'password123')
    await userEvent.type(screen.getByLabelText(/fecha de nacimiento \*/i), '1995-01-01')
    
    // Checkbox de términos
    const checkbox = screen.getByLabelText(/acepto los términos/i)
    await userEvent.click(checkbox)

    // Enviamos el formulario
    const botonSubmit = screen.getByRole('button', { name: /registrarse/i })
    await userEvent.click(botonSubmit)

    // Verificamos que aparezca el mensaje genérico
    expect(screen.getByText(/registro exitoso sin promociones especiales aplicadas\./i)).toBeInTheDocument()
  })

  it('aplica el beneficio del 10% cuando ingresa el código FELICES50', async () => {
    renderWithRouter(<Registro />)

    await userEvent.type(screen.getByLabelText(/correo electrónico \*/i), 'cliente@gmail.com')
    await userEvent.type(screen.getByLabelText(/contraseña \*/i), 'password123')
    await userEvent.type(screen.getByLabelText(/fecha de nacimiento \*/i), '1995-01-01')
    await userEvent.type(screen.getByLabelText(/código promocional/i), 'felices50')
    await userEvent.click(screen.getByLabelText(/acepto los términos/i))

    await userEvent.click(screen.getByRole('button', { name: /registrarse/i }))

    expect(
      screen.getByText(/10% de descuento de por vida aplicado por código FELICES50\./i)
    ).toBeInTheDocument()
  })

  it('aplica la torta gratis de cumpleaños si el correo termina en @duocuc.cl', async () => {
    renderWithRouter(<Registro />)

    await userEvent.type(screen.getByLabelText(/correo electrónico \*/i), 'estudiante@duocuc.cl')
    await userEvent.type(screen.getByLabelText(/contraseña \*/i), 'password123')
    await userEvent.type(screen.getByLabelText(/fecha de nacimiento \*/i), '1995-01-01')
    await userEvent.click(screen.getByLabelText(/acepto los términos/i))

    await userEvent.click(screen.getByRole('button', { name: /registrarse/i }))

    expect(
      screen.getByText(/torta gratis en tu cumpleaños por ser estudiante de Duoc UC\./i)
    ).toBeInTheDocument()
  })

  it('acumula ambos beneficios si ingresa correo Duoc Y código FELICES50', async () => {
    renderWithRouter(<Registro />)

    await userEvent.type(screen.getByLabelText(/correo electrónico \*/i), 'alumno@duocuc.cl')
    await userEvent.type(screen.getByLabelText(/contraseña \*/i), 'password123')
    await userEvent.type(screen.getByLabelText(/fecha de nacimiento \*/i), '1995-01-01')
    await userEvent.type(screen.getByLabelText(/código promocional/i), 'FELICES50')
    await userEvent.click(screen.getByLabelText(/acepto los términos/i))

    await userEvent.click(screen.getByRole('button', { name: /registrarse/i }))

    // Deben aparecer los 2 beneficios al mismo tiempo en la lista
    expect(
      screen.getByText(/10% de descuento de por vida aplicado por código FELICES50\./i)
    ).toBeInTheDocument()
    expect(
      screen.getByText(/torta gratis en tu cumpleaños por ser estudiante de Duoc UC\./i)
    ).toBeInTheDocument()
  })
})