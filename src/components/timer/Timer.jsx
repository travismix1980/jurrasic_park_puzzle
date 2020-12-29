import React, { useState, useEffect } from 'react';
import Passcode from '../passcode/Passcode';
import './timer.css';

const Timer = (props) => {
	const { initialMinute = 0, initialSeconds = 0 } = props;

	const [
		minutes,
		setMinutes,
	] = useState(initialMinute);

	const [
		seconds,
		setSeconds,
	] = useState(initialSeconds);

	const [
		locked,
		setLocked,
	] = useState('no');

	const [
		failed,
		setFailed,
	] = useState(false);

	useEffect(
		() => {
			let myInterval = setInterval(() => {
				if (seconds > 0) {
					setSeconds(seconds - 1);
				}
				if (seconds === 0) {
					if (minutes === 0) {
						setFailed(true);
						clearInterval(myInterval);
					} else {
						setMinutes(minutes - 1);
						setSeconds(59);
					}
				}
			}, 1000);
			return () => {
				clearInterval(myInterval);
			};
		},
		[
			failed,
			seconds,
			minutes,
		]
	);

	const renderDetails = () => {
		if (locked === 'no') {
			return (
				<div>
					{minutes === 0 && seconds === 0 ? (
						<h1 className="timer">0:00</h1>
					) : (
						<h1 className="timer">
							{minutes}:{seconds < 10 ? `0${seconds}` : seconds}
						</h1>
					)}
					<Passcode setLocked={setLocked} />
				</div>
			);
		} else if (locked === 'yes') {
			return (
				<div>
					<Passcode pass={'1228'} setLocked={setLocked} />
				</div>
			);
		} else if (failed) {
			return (
				<div>
					<h1 className="timer">
						{minutes}:{seconds < 10 ? `0${seconds}` : seconds}
					</h1>
					<h1 className="timer-failed">You have failed and been eaten by the dinosaurs</h1>
				</div>
			);
		}
	};

	return <div>{renderDetails()}</div>;
};

export default Timer;
