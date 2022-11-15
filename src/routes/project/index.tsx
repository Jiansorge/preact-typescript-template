import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import style from './style.css';

interface Props {
    name: string;
}

// Note: `name` comes from the URL, courtesy of our router
const Project  = ({ name }: Props) => {
    const [time, setTime] = useState<number>(Date.now());
    const [count, setCount] = useState<number>(0);

    useEffect(() => {
		let timer = setInterval(() => setTime(Date.now()), 1000);
		return () => clearInterval(timer);
	}, []);

    return (
		<div class={style.project}>
			<h1>Project: {name}</h1>
			<p>This is the project { name }.</p>

			<div>Current time: {new Date(time).toLocaleString()}</div>

			<p>
				<button onClick={() => setCount((count) => count + 1)}>Click Me</button>
				{' '}
				Clicked {count} times.
			</p>
		</div>
	);
};

export default Project;
