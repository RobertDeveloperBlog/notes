import {Dispatch, FC, SetStateAction} from "react";
import {Button, Flex} from "@mantine/core";
import {IForm} from "../../../components/ModalContent/ModalContent";

interface IProps {
    formState: IForm
    handleClose: () => void
    getAllNotes: () => void

}

export const EditNoteModalFooter: FC<IProps> = ({formState, handleClose, getAllNotes}) => {

    const {name, comment, priority, deadline, id} = formState

    const handleEditSubmit = async (event: any) => {
        event.preventDefault()
        await fetch(`http://localhost:3000/notes/${id}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                note: {
                    name,
                    comment,
                    priority,
                    deadline,
                }
            })
        })
        await getAllNotes()

        handleClose();
    }

    const handleDeleteSubmit = async (event: any) => {
        event.preventDefault()
        await fetch(`http://localhost:3000/notes/${id}`, {
            method: 'DELETE'
        })

        await getAllNotes()

        handleClose();
    }

    return (
        <div className='modalFooter'>
            <Flex gap='20px'>
            <form onSubmit={handleDeleteSubmit}>
                <Button type='submit'>Удалить</Button>
            </form>

            <form onSubmit={handleEditSubmit}>
                <Button type='submit'>Редактировать</Button>
            </form>
            </Flex>
        </div>
    );
};