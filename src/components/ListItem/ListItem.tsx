import classNames from 'classnames/bind';
import styles from './ListItem.module.scss';
import React, { useEffect, useState } from 'react';

import { TListItemProps } from './ListItem.types';

import NoCheckBox from '@mui/icons-material/RadioButtonUnchecked';
import ArrowReduceIcon from '@mui/icons-material/ChevronLeft';
import ArrowIncreaseIcon from '@mui/icons-material/ChevronRight';
import CheckBox from '@mui/icons-material/CheckCircleOutline';

const cx = classNames.bind(styles);
const ListItem: React.FC<TListItemProps> = ({ items, setItems, reloadData }) => {
    const [total, setTotal] = useState<number>(1);
    
    useEffect(() => {
        Total()
    })

    const handleIncrease = (index: number) => {
		const newItems = [...items];
		newItems[index].quantity++;
		setItems(newItems);
        Total()
	};

	const handleDecrease = (index: number) => {
		const newItems = [...items];
		newItems[index].quantity--;
        if (newItems[index].quantity <= 1) {
            newItems[index].quantity = 1
        }
		setItems(newItems);
        Total()
	};

    const Total = () => {     
        const total = items.reduce((total, item) => {
            return total + item.quantity;
		}, 0);      
		setTotal(total);
	};

    const handleCheck = (index: number) => {
        const newItems = [...items];
        newItems[index].checked = !newItems[index].checked
        setItems(newItems)
    }
    return (
        <div>
            {items.map((item, index) => (
                <div className={cx('ListItem')} key={index}>
                    <div className={cx('ListItem__name')} onClick={() => handleCheck(index)}>
                        {item.checked ? (
                            <>
                                <CheckBox />
                                <span className={cx('ListItem__completed')}>{item.name}</span>
                            </>
                        ) : (
                            <>
                                <NoCheckBox />
                                <span className={cx('ListItem__nocompleted')}>{item.name}</span>
                            </>
                        )}
                    </div>
                    <div className={cx('ListItem__quantity')}>
                        <button className={cx('ListItem__button-reduce')}><ArrowReduceIcon onClick={() => handleDecrease(index)} /></button>
                        <span>{item.quantity}</span>
                        <button className={cx('ListItem__button-increase')}><ArrowIncreaseIcon onClick={() => handleIncrease(index)} /></button>
                    </div>
                </div>
            ))}
            <div className='App__total'>Total: {total}</div>
        </div>
    );
};

export default ListItem;
