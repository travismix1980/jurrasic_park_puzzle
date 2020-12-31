import React, { useState } from 'react';
import Timer from './components/timer/Timer';
import Reseter from './components/reseter/Reseter';

const App = () => {
	const [
		reset,
		setReset,
	] = useState('no');

	const renderContent = () => {
		if (reset === 'no') {
			return (
				<div>
					<Reseter setReset={setReset} />
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
