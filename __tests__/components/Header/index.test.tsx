import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Header from '@/components/Header'

describe('<Header />', () => {
    it('Deve exibir o título = Personagens da Marvel', () => {
        const { getByText } = render(<Header />)
        expect(getByText('Personagens da Marvel')).toBeInTheDocument()
    })
})