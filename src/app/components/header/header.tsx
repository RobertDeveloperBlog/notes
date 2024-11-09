import {AddNoteButton} from "../button/AddNoteButton";
import {Dispatch, FC, SetStateAction} from "react";
import './styles.css'

interface IProps {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>
}

export const Header:FC<IProps> = ({isOpen, setIsOpen}) => {
    return (
        <div className='header'>
            <AddNoteButton isOpen={isOpen} setIsOpen={setIsOpen}/>
        </div>
    );
};
