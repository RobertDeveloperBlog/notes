import {FC, useEffect, useState} from "react";
import {Modal as MantineModal} from "@mantine/core";
import {ModalContent} from "../components/ModalContent/ModalContent";
import {getInitialFormState} from "./utils";
import {EditNoteModalFooter} from "./components/EditNoteModalFooter/EditNoteModalFooter";

export interface INoteResponseDTO {
    comment:string
    created_at:string
    date:string
    deadline: string
    id: number
    name: string
    priority: string
    updated_at: string
}


interface IProps {
    isOpen: boolean;
    currentNote: INoteResponseDTO | null
    handleClose: () => void
    getAllNotes: () => void
}

export const EditNoteModal: FC<IProps> = ({isOpen, currentNote, handleClose, getAllNotes}) => {
    const [formState, setFormState] = useState(getInitialFormState(currentNote));

    useEffect(() => {
        setFormState(getInitialFormState(currentNote))
    }, [currentNote])



    return (
        <MantineModal
            opened={isOpen}
            onClose={handleClose}
            title='Редактирование заметки'
            centered={true}
            size='lg' overlayProps={{
            opacity: 0.55,
            blur: 1,
        }}>
            <ModalContent formState={formState} setFormState={setFormState}/>
            <EditNoteModalFooter
                formState={formState}
                handleClose={handleClose}
                getAllNotes={getAllNotes}
            />
        </MantineModal>
    );
};
