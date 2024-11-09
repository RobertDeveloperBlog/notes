import {AddNoteButton} from "../button/AddNoteButton";
import {Dispatch, FC, SetStateAction} from "react";
import './styles.css'

interface IProps {
    setIsOpen: Dispatch<SetStateAction<boolean>>
}

export const Header:FC<IProps> = ({ setIsOpen}) => {
    return (
        <div className='header'>
            <AddNoteButton setIsOpen={setIsOpen}/>
        </div>
    );
};
