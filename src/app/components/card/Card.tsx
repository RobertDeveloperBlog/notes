import './style.css'
import {Table} from "../table/Table";
import {Header} from "../header/header";
import {Modal} from "../modal/Modal";
import {useState} from "react";
import {IForm} from "../modal/components/ModalContent/ModalContent";

export const Card = () => {
    const [isOpen, setIsOpen] = useState(false)

    const [formState, setFormState] = useState<IForm>({
        name: '',
        date: new Date(),
        comment: '',
        priority: '',
        deadline: new Date()
    });

    const handleClose = () => {
        setIsOpen(false)
    }

    return (
        <div className='card'>
            <Header isOpen={isOpen} setIsOpen={setIsOpen}/>
            <Table/>
            <Modal
                formState={formState}
                setFormState={setFormState}
                isOpen={isOpen}
                handleClose={handleClose}
            />
        </div>
    );
};
