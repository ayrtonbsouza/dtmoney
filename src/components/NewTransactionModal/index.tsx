import Modal from 'react-modal';

interface Props {
  isOpen: boolean;
  onRequestClose: () => void;
}

Modal.setAppElement('#root');

export const NewTransactionModal: React.FC<Props> = ({
  isOpen,
  onRequestClose,
}) => (
  <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
    <h2>Cadastrar transação</h2>
  </Modal>
);
