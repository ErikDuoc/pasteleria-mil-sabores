import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { Inicio } from './Inicio'

vi.mock('../components/Inicio/Bienvenida', () => ({
  BienvenidaSection: () => <section data-testid="seccion-bienvenida" />,
}))

vi.mock('../components/inicio/DestacadosSeccion', () => ({
  DestacadosSeccion: () => <section data-testid="seccion-destacados" />,
}))

vi.mock('../components/inicio/QuienesSomosSeccion', () => ({
  QuienesSomosSeccion: () => <section data-testid="seccion-quienes-somos" />,
}))

vi.mock('../components/inicio/ImpactoSeccion', () => ({
  ImpactoSeccion: () => <section data-testid="seccion-impacto" />,
}))

vi.mock('../components/inicio/TestimoniosSeccion', () => ({
  TestimoniosSeccion: () => <section data-testid="seccion-testimonios" />,
}))

vi.mock('../components/inicio/ContactoSeccion', () => ({
  ContactoSeccion: () => <section data-testid="seccion-contacto" />,
}))

const SECCIONES = [
  'seccion-bienvenida',
  'seccion-destacados',
  'seccion-quienes-somos',
  'seccion-impacto',
  'seccion-testimonios',
  'seccion-contacto',
]

describe('Inicio', () => {
  it('renderiza la imagen principal con su texto alternativo', () => {
    render(<Inicio />)

    const imagen = screen.getByAltText('Torta Cuadrada de Frutas de la pastelería')

    expect(imagen).toBeInTheDocument()
    expect(imagen).toHaveClass('bienvenida-imagen')
    expect(imagen.getAttribute('src')).toMatch(/hero\.png$/)
  })

  it('renderiza todas las secciones dentro de un <main>', () => {
    const { container } = render(<Inicio />)
    const main = container.querySelector('main')

    expect(main).toBeInTheDocument()
    SECCIONES.forEach((seccion) => {
      expect(screen.getByTestId(seccion)).toBeInTheDocument()
    })
  })

  it('muestra las secciones en el orden de la página', () => {
    const { container } = render(<Inicio />)
    const orden = Array.from(container.querySelectorAll('[data-testid]')).map(
      (nodo) => nodo.dataset.testid,
    )

    expect(orden).toEqual(SECCIONES)
  })

  it('coloca la imagen principal fuera del <main>', () => {
    const { container } = render(<Inicio />)
    const imagen = screen.getByAltText('Torta Cuadrada de Frutas de la pastelería')
    const main = container.querySelector('main')

    expect(main.contains(imagen)).toBe(false)
  })
})