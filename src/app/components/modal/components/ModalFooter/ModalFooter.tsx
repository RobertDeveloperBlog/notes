import './styles.css'
import {FC,} from "react";
import {Button} from '@mantine/core';
import {IForm} from "../ModalContent/ModalContent";


interface IProps {
    formState: IForm
    handleClose: () => void
    getAllNotes: () => void
}

export const ModalFooter: FC<IProps> = ({formState,handleClose, getAllNotes}) => {

    const { name, comment, priority, deadline} = formState

    const handleSubmit = async (event: any) => {
        event.preventDefault()
        await fetch('http://localhost:3000/notes', {
            method: 'POST',
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
        await getAllNotes();

        handleClose()
    }

    return (
        <div className='modalFooter'>
            <form onSubmit={handleSubmit}>
            <Button type='submit'>Сохранить</Button>
            </form>
        </div>
    );
};


