import {
    MantineReactTable,
    useMantineReactTable,
    MRT_EditActionButtons,
} from 'mantine-react-table'
import {useMemo, useRef} from 'react';
import {headers} from "./tableConfig";
import {data as mockData} from './mockData'
import {Flex, Stack, Textarea, Title } from '@mantine/core';


export const Table = () => {
    const tableContainerRef = useRef<HTMLDivElement>(null);

    const columns = useMemo(() => headers, [headers])


    const data = useMemo(() => mockData, [mockData])

    // @ts-ignore
    const table = useMantineReactTable({
        columns,
        data,
        enablePagination: false,
        enableStickyHeader: true,
        enableEditing: true,
        renderEditRowModalContent: ({ table, row, internalEditComponents }) => (
            <Stack>
                <Title order={3}>Редактирование заметки</Title>
                {internalEditComponents}
                <Textarea
                    label="Описание"
                    placeholder="Введите описание заметки"
                    autosize={true}
                    minRows={2}
                    maxRows={6}
                />
                <Flex justify="flex-end" mt="xl">
                    <MRT_EditActionButtons variant="text" table={table} row={row} />
                </Flex>
            </Stack>
        ),
        mantineTableBodyRowProps: ({ row }) => ({
            onClick: (event) => {
                console.info(event, row.id);
            },
            sx: {
                cursor: 'pointer'
            },
        }),
        mantineTableContainerProps: {
            ref: tableContainerRef, //get access to the table container element
            sx: { maxHeight: "80vh" }, //give the table a max height
        },
    });

    return (
        <MantineReactTable table={table}  />
    );
};
