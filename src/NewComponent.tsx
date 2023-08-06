import React from 'react';

type NewComponentType = {
    students: Array<StudentType>
    //students: StudentType[]
}
type StudentType = {
    id: number;
    name: string;
    age: number;
}

export const NewComponent = (props: NewComponentType) => {
    return (
        <ul>
            {props.students.map((student, index) => {
                return (
                    <li key={student.id}>
                        <span>{student.name}</span>
                        <span> age: {student.age}</span>
                    </li>
                )
            })}
            <li>Coffee</li>
            <li>Tea</li>
            <li>Milk</li>
        </ul>
    );
};