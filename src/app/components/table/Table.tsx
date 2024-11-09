import {MantineReactTable, useMantineReactTable,} from 'mantine-react-table'
import {useEffect, useMemo, useRef, useState} from 'react';
import {headers} from "./tableConfig";
import './styles.css'
import {IForm} from "../modal/components/ModalContent/ModalContent";


export const Table = () => {
    const [notes, setNotes] = useState<IForm[]>([])

    useEffect(() => {
        fetch('http://localhost:3000/notes').then((res) => {
            res.json().then(data => setNotes(data))
        })
    }, [])


    const tableContainerRef = useRef<HTMLDivElement>(null);

    const columns = useMemo(() => headers, [headers])


    const data = useMemo(() => notes, [notes])


    console.log(data);

    // @ts-ignore
    const table = useMantineReactTable({
        columns,
        data,
        enablePagination: false,
        enableStickyHeader: true,
        enableEditing: true,
        renderEditRowModalContent: ({table, row, internalEditComponents}) => {
            return (<div>
            {internalEditComponents}
            </div>)
        },
        mantineTableBodyRowProps: ({row}) => ({
            onClick: (event) => {
                console.info(event, row.id);
            },
            sx: {
                cursor: 'pointer'
            },
        }),
        mantineTableContainerProps: {
            ref: tableContainerRef, //get access to the table container element
            sx: {maxHeight: "80vh"}, //give the table a max height
        },
    });

    return (
        <MantineReactTable table={table}/>
    );
};
