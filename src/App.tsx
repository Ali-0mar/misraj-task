import React, {useContext, useState} from 'react';
import Table from './Components/Table/Table';
import Form from './Components/Form/Form';
import AppProvider from './State/Context';
import './App.scss'
import Modal from "./Components/Modal/Modal";
const App: React.FC = () => {
    const  [isOpen, setIsOpen] = useState(false)
    const openModal = ()=>{
        setIsOpen(true)
    }
    const closeModal = () =>{
        setIsOpen(false)
    }
    return (
        <AppProvider>
            <Modal isOpen={isOpen} onClose={closeModal}>
                <Form closeModal={closeModal} />
            </Modal>
            <Table openModal={openModal} />
        </AppProvider>
    );
};

export default App;




