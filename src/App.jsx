import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Notes from './components/Notes';

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className='App w-full bg-slate-800 flex items-center justify-center min-h-screen'>
			<Notes />
		</div>
	);
}

export default App;
