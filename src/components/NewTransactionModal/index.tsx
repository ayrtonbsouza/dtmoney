import Modal from 'react-modal';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { Container, TransactionTypeContainer } from './styles';

interface Props {
  isOpen: boolean;
  onRequestClose: () => void;
}

Modal.setAppElement('#root');

export const NewTransactionModal: React.FC<Props> = ({
  isOpen,
  onRequestClose,
}) => (
  <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    overlayClassName="react-modal-overlay"
    className="react-modal-content"
  >
    <button
      className="react-modal-close"
      type="button"
      onClick={onRequestClose}
    >
      <img src={closeImg} alt="Fechar modal" />
    </button>
    <Container>
      <h2>Cadastrar transação</h2>
      <input placeholder="Título" />
      <input placeholder="Valor" type="number" />
      <TransactionTypeContainer>
        <button type="button">
          <img src={incomeImg} alt="Entrada" />
          <span>Entrada</span>
        </button>
        <button type="button">
          <img src={outcomeImg} alt="Saída" />
          <span>Saída</span>
        </button>
      </TransactionTypeContainer>
      <input placeholder="Categoria" />
      <button type="submit">Cadastrar</button>
    </Container>
  </Modal>
);
