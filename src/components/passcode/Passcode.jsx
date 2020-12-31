import React, { useState } from 'react';
import './passcode.css';

const Passcode = ({setLocked, pass}) => {
	const [
		passval,
		setPassVal,
	] = useState(pass);


	const passcode = '1228';

	const renderDetails = () => {
		if (passval === passcode) {
			setLocked('yes') ;
			return <div><h1 className="dinos">Congrats you reset the power all dino's are safely locked away!!!</h1></div>;
		} else {
			return (
				<div>
					<h2>If you don't hurry the dino's will escape</h2>
					<div className="ui form">
						<div className="field">
							<label>Please Enter 4 digit passcode</label>
							<input
								type="text"
								name="passcode"
								value={passval}
								maxLength="4"
								onChange={(e) => setPassVal(e.target.value)}
							/>
							<br />
							<br />
						</div>
					</div>
				</div>
			);
		}
	};

	return <div>{renderDetails()}</div>;
};

export default Passcode;
