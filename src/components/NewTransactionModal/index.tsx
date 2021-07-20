import Modal from 'react-modal';

import { Container } from './styles';

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
    <Container>
      <h2>Cadastrar transação</h2>
      <input placeholder="Título" />
      <input placeholder="Valor" type="number" />
      <input placeholder="Categoria" />
      <button type="submit">Cadastrar</button>
    </Container>
  </Modal>
);
