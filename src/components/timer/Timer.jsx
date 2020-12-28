import React, {useState} from 'react';
import './timer.css';

const Timer = () => {
	const [passval, setPassVal] = useState('');

	const passcode = '1234';

	const submitPasscode = () => {
		if (passval === passcode) {
			return (
				<div>Congrats you reset the power all dino's are safely locked away</div>
			);
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

	return (
		<div>
			{submitPasscode()}
		</div>
	);
};

export default Timer;
