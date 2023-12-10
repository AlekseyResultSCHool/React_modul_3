import React from 'react';
import styles from './Style.module.css';
import PropTypes from 'prop-types';

export const Field = ({ props, onClick }) => {

	Field.propTypes = {
		props: PropTypes.array,
		onClick: PropTypes.func
	}

	const fields = [0, 1, 2, 3, 4, 5, 6, 7, 8];

	const Click = (event) => {
		onClick(event.target.getAttribute('data'));
	};

	return (
		<>
			<div className={styles.field} onClick={Click}>
				{fields.map((item) => (
					<div key={item} className={styles.fields} data={item}>
						{props[item]}
					</div>
				))}
			</div>
		</>
	);
};
