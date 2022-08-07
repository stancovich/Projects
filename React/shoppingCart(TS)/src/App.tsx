import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';

function App() {
	const [count, setCount] = useState(0);

	return (
		<Container>
			<Routes>
				<Route path='/' element={<h1>Home</h1>} />
				<Route path='/store' element={<h1>Store</h1>} />
				<Route path='/about' element={<h1>About</h1>} />
				<Route path='*' element={<h1>ERROR</h1>} />
			</Routes>
		</Container>
	);
}

export default App;
