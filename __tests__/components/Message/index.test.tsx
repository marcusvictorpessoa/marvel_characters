import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Message from '@/components/Message'

describe('<Message />', () => {
    it('Deve exibir a Mensagem de erro passada como prop', () => {
        const { getByText } = render(<Message content='Mensagem de erro' />)
        expect(getByText('Mensagem de erro')).toBeInTheDocument()
    })
})