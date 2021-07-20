import { useState } from 'react';
import Modal from 'react-modal';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';

import { GlobalStyle } from './styles/global';

export const App: React.FC = () => {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);
  function handleOpenNewTransactionModal(): void {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal(): void {
    setIsNewTransactionModalOpen(false);
  }
  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <Modal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      >
        <h2>Cadastrar transação</h2>
      </Modal>
      <GlobalStyle />
    </>
  );
};
