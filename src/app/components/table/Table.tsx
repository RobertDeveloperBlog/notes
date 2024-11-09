import {MantineReactTable, useMantineReactTable,} from 'mantine-react-table'
import {Dispatch, FC, SetStateAction, useMemo, useRef} from 'react';
import {headers} from "./tableConfig";
import './styles.css'
import {INoteResponseDTO} from "../modal/editNoteModal/EditNoteModal";
import {IconEdit} from '@tabler/icons-react';
import {ActionIcon} from '@mantine/core';


interface IProps {
    notes: INoteResponseDTO[]
    setIsOpenEditModal: Dispatch<SetStateAction<boolean>>
    setCurrentNote: Dispatch<SetStateAction<INoteResponseDTO | null>>
}

export const Table:FC<IProps> = ({notes, setIsOpenEditModal, setCurrentNote}) => {
    const tableContainerRef = useRef<HTMLDivElement>(null);

    const handleEditIconClick = (row: any) => {
            setCurrentNote(row.original)
        setIsOpenEditModal(true)
    }

    const columns = useMemo(() => headers, [headers])
    const data = useMemo(() => notes, [notes])


    const table = useMantineReactTable({
        columns,
        data,
        enablePagination: false,
        enableStickyHeader: true,
        enableEditing: true,
        renderRowActions: ({ row }) => (
            <ActionIcon onClick={() => handleEditIconClick(row)}>
                <IconEdit size={16} />
            </ActionIcon>
        ),
        mantineTableContainerProps: {
            ref: tableContainerRef,
            sx: {maxHeight: "80vh"},
        },
    });

    return (
        <MantineReactTable table={table}/>
    );
};
