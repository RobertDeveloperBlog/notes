import {Button} from "@mantine/core";
import {Dispatch, FC, SetStateAction} from "react";
import './styles.css'


interface IProps {
    setIsOpen: Dispatch<SetStateAction<boolean>>
}

export const AddNoteButton: FC<IProps> = ({setIsOpen}) => {

    const handleClick = () => {
        setIsOpen(true)
    }

    return (
        <Button className='button' onClick={handleClick}>
            Добавить заметку
        </Button>
    );
};
