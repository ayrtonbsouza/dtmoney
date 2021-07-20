import logoImg from '../../assets/logo.svg';
import { Container, Content } from './styles';

export const Header: React.FC = () => (
  <Container>
    <Content>
      <img src={logoImg} alt="dtmoney" />
      <button type="button">Nova transação</button>
    </Content>
  </Container>
);
