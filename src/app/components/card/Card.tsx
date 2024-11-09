import './style.css'
import {Table} from "../table/Table";
import {Header} from "../header/header";
import {useEffect, useState} from "react";
import {EditNoteModal, INoteResponseDTO} from "../modal/editNoteModal/EditNoteModal";
import { CreateNoteModal } from '../modal/CreateNoteModal';

export const Card = () => {
    const [notes, setNotes] = useState<INoteResponseDTO[]>([])
    const [isOpenCreateModal, setIsOpenCreateModal] = useState(false);
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
        setIsOpenCreateModal(false)
    }

    const handleEditModalClose = () => {
        setIsOpenEditModal(false)
        setCurrentNote(null)
    }

    return (
        <div className='card'>
            <Header
                setIsOpen={setIsOpenCreateModal}
            />
            <Table
                notes={notes}
                setIsOpenEditModal={setIsOpenEditModal}
                setCurrentNote={setCurrentNote}/>
            <CreateNoteModal
                getAllNotes={getAllNotes}
                isOpen={isOpenCreateModal}
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
