import {Modal} from "@mantine/core";
import {FC, useState} from "react";
import {IForm, ModalContent} from "./components/ModalContent/ModalContent";
import './styles.css'
import {ModalFooter} from "./components/ModalFooter/ModalFooter";

interface IProps {
    isOpen: boolean;
    handleClose: () => void;
    getAllNotes: () => void
}

export const CreateNoteModal: FC<IProps> = ({isOpen, handleClose, getAllNotes}) => {
    const [formState, setFormState] = useState<IForm>({
        name: '',
        comment: '',
        priority: '',
        deadline: new Date()
    });

    return (
        <Modal
            opened={isOpen}
            onClose={handleClose}
            title='Добавление заметки'
            centered={true}
            size='lg' overlayProps={{
            opacity: 0.55,
            blur: 1,
        }}>
            <ModalContent formState={formState} setFormState={setFormState}/>
            <ModalFooter formState={formState}  handleClose={handleClose} getAllNotes={getAllNotes}/>
        </Modal>
    )
};
