import React from 'react';
import styles from './Style.module.css';
import PropTypes from 'prop-types';

export const Resset = ({ onClick }) => {

	Resset.propTypes = {
		onClick: PropTypes.func
	}

	const resset = () => {
		onClick();
	};

	return (
		<div>
			<button className={styles.cencel} onClick={resset}>
				Начать заново
			</button>
		</div>
	);
};
