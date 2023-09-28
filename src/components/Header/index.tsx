import logoImg from '../../assets/logo.svg';

import { Container, Content } from './styles'

interface HeaderProps {
  onOpenNewTransactionsModal: () => void;
}

export function Header({ onOpenNewTransactionsModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Money Under Control" />
        <button type="button" onClick={onOpenNewTransactionsModal}>
          New transaction
        </button>
      </Content>
    </Container>
  )
}