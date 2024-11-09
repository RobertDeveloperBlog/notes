import {Button, Select, Textarea, TextInput} from "@mantine/core";
import './styles.css'
import {Dispatch, FC, SetStateAction, useState} from "react";
import { DateInput } from "@mantine/dates";

export interface IForm {
    name: string
    date: Date;
    comment: string
    priority: string
    deadline: Date
    id?: string;
}

interface IProps {
    formState: IForm
    setFormState:Dispatch<SetStateAction<IForm>>
}

export const ModalContent:FC<IProps> = ({formState, setFormState}) => {

    const handleInputChange = (field: any) => (event: any) => {
        const value = event.currentTarget ? event.currentTarget.value : event;
        setFormState((prev) => ({
            ...prev,
            [field]: value,
        }));

    };

    const { name, deadline, priority, comment } = formState

    return (
        <div className='content'>
            <TextInput
                value={name}
                onChange={handleInputChange('name')}
                placeholder="Введите краткое название заметки"
                label="Заметка"
                mt='lg'
                mb='xs'
            />

            <div className='container'>
            <DateInput
                className='form'
                value={deadline}
                onChange={handleInputChange('deadline')}
                label="Дедлайн"
                placeholder="Выберите дедлайн"
                maw={400}
                mx="auto"
                mb='xs'
                popoverProps={{ zIndex: 10000,  withinPortal: true }}
            />
            <Select
                className='form'
                value={priority}
                onChange={handleInputChange('priority')}
                label="Приоритет"
                placeholder="Выберите приоритет"
                data={[
                    { value: 'HIGH ', label: 'Высокий' },
                    { value: 'MEDIUM', label: 'Средний' },
                    { value: 'LOW', label: 'Низкий' },
                ]}
                mb='xs'
            />
            </div>


            <Textarea
                value={comment}
                onChange={handleInputChange('comment')}
                placeholder="Введите комментарий"
                label="Комментарий"
                minRows={4}
                mb='lg'
            />
        </div>
    );
};
