import {Button} from "@mantine/core";
import {Dispatch, FC, SetStateAction} from "react";
import './styles.css'


interface IProps {
    isOpen: boolean
    setIsOpen: Dispatch<SetStateAction<boolean>>
}

export const AddNoteButton: FC<IProps> = ({isOpen, setIsOpen}) => {

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    return (
        <Button className='button' onClick={handleClick}>
            Добавить заметку
        </Button>
    );
};
