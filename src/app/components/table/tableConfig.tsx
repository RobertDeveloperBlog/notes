import { Text } from '@mantine/core';
import { format, parseISO } from 'date-fns';


export const priorityDict = {
    HIGH: 'Высокий',
    MEDIUM: 'Средний',
    LOW: 'Низкий'
}


export const headers = [
    {
        accessorKey: 'created_at',
        header: 'Дата создания',
        size: 80,
        Cell: ({cell}: any) => {
            const formattedData = format(parseISO(cell.getValue()), 'dd.MM.yyyy');
            return <Text fz="md">{formattedData}</Text>
        }
    },
    {
        accessorKey: 'name',
        header: 'Название',
    },
    {
        accessorKey: 'comment',
        header: 'Комментарий',
    },
    {
        accessorKey: 'priority',
        header: 'Приоритет',
        Cell: ({cell}: any) => {
            // @ts-ignore
            return <Text fz="md">{priorityDict[cell.getValue()]}</Text>
        }
    },
    {
        accessorKey: 'deadline',
        header: 'Дедлайн'
    }
]