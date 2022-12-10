import React, { ChangeEvent } from 'react';

interface IProps {
    items: {
        name: String,
        quantity: number,
        checked: boolean
    }[]
}

export type TListItemProps = {
    items: IProps['items'],
    setItems: React.Dispatch<React.SetStateAction<IProps['items']>>,
    reloadData: any
};
