import React from 'react';
import './reseter.css';

const Reseter = ({setReset}) => {
	

	return (
		<div className="ui container">
			<h2 className="center-text header-text">Restart System to Restore Power?</h2>
			<div className="ui two buttons">
				<div className="ui button positive large p-shadow" onClick={() => setReset('yes')}>Yes</div>
				<div className="or" />
				<div className="ui button negative large">No</div>
			</div>
		</div>
	);
};

export default Reseter;
