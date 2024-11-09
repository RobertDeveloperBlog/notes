import {INoteResponseDTO} from "./EditNoteModal";
import {IForm} from "../components/ModalContent/ModalContent";

export const getInitialFormState = (dto: INoteResponseDTO | null): IForm => {
    if (!dto) {
        return {
            name: '',
            comment: '',
            priority: '',
            deadline: new Date(),
            id : 0
        }
    }

    return {
        name: dto.name,
        comment: dto.comment,
        priority: dto.priority,
        deadline: new Date(dto.deadline),
        id : dto.id
    }
}