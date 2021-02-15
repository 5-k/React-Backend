import React from 'react';

interface Props {
    title: string;
    description: string;
}

export const SimpleComponent: React.FC<Props> = props => {
    return (
        <label>
            {props.title} - {props.description}
        </label>
    )
};