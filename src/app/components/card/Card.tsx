import './style.css'
import {Table} from "../table/Table";
import {Header} from "../header/header";
import {Modal} from "../modal/Modal";
import {useEffect, useState} from "react";
import {EditNoteModal, INoteResponseDTO} from "../modal/editNoteModal/EditNoteModal";

export const Card = () => {
    const [notes, setNotes] = useState<INoteResponseDTO[]>([])
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenEditModal, setIsOpenEditModal] = useState(false);

    const [currentNote, setCurrentNote] = useState<INoteResponseDTO | null>(null)

    const getAllNotes = async () => {
        fetch('http://localhost:3000/notes').then((res) => {
            res.json().then(data => setNotes(data))
        })
    }


    useEffect(() => {
        getAllNotes()
    }, [])



    const handleClose = () => {
        setIsOpen(false)
    }

    const handleEditModalClose = () => {
        setIsOpenEditModal(false)
        setCurrentNote(null)
    }

    return (
        <div className='card'>
            <Header isOpen={isOpen} setIsOpen={setIsOpen}/>
            <Table
                notes={notes}
                setIsOpenEditModal={setIsOpenEditModal}
                setCurrentNote={setCurrentNote}/>
            <Modal
                getAllNotes={getAllNotes}
                isOpen={isOpen}
                handleClose={handleClose}
            />
            <EditNoteModal
                getAllNotes={getAllNotes}
                isOpen={isOpenEditModal}
                currentNote={currentNote}
                handleClose={handleEditModalClose}/>
        </div>
    );
};
