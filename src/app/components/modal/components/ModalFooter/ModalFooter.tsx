import './styles.css'
import {Dispatch, FC, SetStateAction} from "react";
import {Button} from '@mantine/core';
import {IForm} from "../ModalContent/ModalContent";


interface IProps {
    formState: IForm
    setFormState: Dispatch<SetStateAction<IForm>>
}

export const ModalFooter: FC<IProps> = ({formState, setFormState}) => {

    const {date, name, comment, priority, deadline} = formState

    const handleSubmit = async () => {
        await fetch('http://localhost:3000/notes', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                note: {
                    date,
                    name,
                    comment,
                    priority,
                    deadline,
                }
            })
        })
    }

    return (
        <div className='modalFooter'>
            <form onSubmit={handleSubmit}>
            <Button type='submit'>Сохранить</Button>
            </form>
        </div>
    );
};


