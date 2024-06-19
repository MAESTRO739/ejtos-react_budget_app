import React, { useContext } from 'react';
import { FaPlusCircle, FaTimesCircle} from 'react-icons/fa';
import { MdDoNotDisturbOn } from 'react-icons/md';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = () => {
        const expense = {
            name: props.name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    };

    const decreaseAllocation = () => {
        const expense = {
            name: props.name,
            cost: 10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });

    };

    return (
        <tr>
            <td>{props.name}</td>
            <td>{currency}{props.cost}</td>
            <td><FaPlusCircle size='2em' color="green" style={{cursor: "pointer"}} onClick={increaseAllocation}></FaPlusCircle></td>
            <td><MdDoNotDisturbOn size='2em' color="red" style={{cursor: "pointer"}} onClick={decreaseAllocation}></MdDoNotDisturbOn></td>
            <td><FaTimesCircle size='2em' color="black" style={{cursor: "pointer"}} onClick={handleDeleteExpense}></FaTimesCircle></td>
        </tr>
    );
};

export default ExpenseItem;