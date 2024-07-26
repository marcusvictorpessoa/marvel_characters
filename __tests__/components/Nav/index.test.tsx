import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Nav from '@/components/Nav'

describe('<Nav />', () => {
    it('Deve exibir a rota de Início', () => {
        const { getByText } = render(<Nav />)
        expect(getByText('Início')).toBeInTheDocument()
    })

    it('Deve exibir a rota de Favoritos', () => {
        const { getByText } = render(<Nav />)
        expect(getByText('Favoritos')).toBeInTheDocument()
    })
})