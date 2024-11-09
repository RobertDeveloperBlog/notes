import {Modal as MantineModal} from "@mantine/core";
import {Dispatch, FC, SetStateAction} from "react";
import {IForm, ModalContent} from "./components/ModalContent/ModalContent";
import './styles.css'
import {ModalFooter} from "./components/ModalFooter/ModalFooter";

interface IProps {
    formState: IForm
    setFormState:Dispatch<SetStateAction<IForm>>
    isOpen: boolean;
    handleClose: () => void
}

export const Modal: FC<IProps> = ({isOpen, handleClose, formState, setFormState}) => {
    return (
        <MantineModal
            opened={isOpen}
            onClose={handleClose}
            title='Добавление заметки'
            centered={true}
            size='lg' overlayProps={{
            opacity: 0.55,
            blur: 1,
        }}>
            <ModalContent formState={formState} setFormState={setFormState}/>
            <ModalFooter formState={formState} setFormState={setFormState}/>
        </MantineModal>
    )
};
