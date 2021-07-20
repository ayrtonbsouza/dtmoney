import logoImg from '../../assets/logo.svg';
import { Container, Content } from './styles';

interface Props {
  onOpenNewTransactionModal: () => void;
}

export const Header: React.FC<Props> = ({ onOpenNewTransactionModal }) => (
  <Container>
    <Content>
      <img src={logoImg} alt="dtmoney" />
      <button type="button" onClick={onOpenNewTransactionModal}>
        Nova transação
      </button>
    </Content>
  </Container>
);
