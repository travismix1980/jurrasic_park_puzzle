import React, { useState } from 'react';
import Timer from './components/timer/Timer';
import Restarter from './components/restarter/Restarter';

const App = () => {
	const [
		reset,
		setReset,
	] = useState('no');

	const renderContent = () => {
		if (reset === 'no') {
			return (
				<div>
					<Restarter setReset={setReset} />
				</div>
			);
		} else {
			return (
				<div>
					<Timer initialMinute={30}/>
				</div>
			);
		}
	};

	return (
		<div className="ui container">
			{renderContent()}
		</div>
	);
};

export default App;
