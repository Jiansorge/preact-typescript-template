import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

const Header = () => (
	<header class={style.header}>
		<h1>Jian's Portfolio</h1>
		<nav>
			<Link activeClassName={style.active} href="/">Home</Link>
			<Link activeClassName={style.active} href="/projects">Projects</Link>
			<Link activeClassName={style.active} href="/about">About Me</Link>
		</nav>
	</header>
);

export default Header;
