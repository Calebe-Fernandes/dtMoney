import { useState } from 'react';
import Modal from 'react-modal'
import { GlobalStyle } from './styles/global';
import {Header} from './components/Header/index';
import {Dashboard} from './components/Dashboard/index'
import {NewTransactionModal} from './components/NewTransactionModal/index'
import {TransactionsContext} from './TransactionContext'

Modal.setAppElement('#root');

export function App() {
  
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal(){
      setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal(){
      setIsNewTransactionModalOpen(false);
  }

  return (
    <TransactionsContext.Provider value={[]}>
        <Header
          onOpenNewTransactionModal={handleOpenNewTransactionModal}
        />

        <Dashboard/>

        <NewTransactionModal
          isOpen ={isNewTransactionModalOpen}
          onRequestClose={handleCloseNewTransactionModal}
        />

        <GlobalStyle/>
    </TransactionsContext.Provider>
  );
}

