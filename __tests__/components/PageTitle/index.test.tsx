import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import PageTitle from '@/components/PageTitle'

describe('<PageTitle />', () => {
    it('Deve exibir o título passado como prop', () => {
        const { getByText } = render(<PageTitle title='Início' />)
        expect(getByText('Início')).toBeInTheDocument()
    })
})