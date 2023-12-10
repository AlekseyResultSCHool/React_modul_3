import { useState, React } from 'react';
import { Field } from './Field';
import { Winner } from './Winner';
import { Resset } from './Resset';
import styles from './Style.module.css';

export const App = () => {

	const [array, setArray] = useState(Array(9).fill(null));
	const [count, setCount] = useState(0);
	const [move, setMove] = useState('X');
	const [countWinner, setCountWinner] = useState();

	const Click = (data) => {
		if (array[data] === null) {
			setCount(count + 1);	
			array[data] = count % 2 === 0 ? 'X' : 'O';
			setCountWinner(count % 2 === 0 ? 'X' : 'O');
			setMove(count % 2 === 0 ? 'O' : 'X');
		};
	};

	const resset = () => {
		setCount(0);
		setMove('X');
		setArray(Array(9).fill(null));
	};

	return (
		<div className={styles.container}>
			<h2 style={{ textAlign: 'center' }}>"Сейчас ХОД:" '{move}'</h2>
			<Field  props={array} onClick={Click}  />
			<Winner countWinner={countWinner} array={array}/>
			<Resset onClick={resset} />
		</div>
	);
};
