import React from 'react';
import BookContextProvider from './contexts/BookContext.js';
import NavBar from './components/NavBar.jsx';
import BookList from './components/BookList.jsx';
import BookForm from './components/BookForm.jsx';

function App() {
	return (
		<div className="App">
			<BookContextProvider>
				<NavBar />
				<BookList />
				<BookForm />
			</BookContextProvider>
		</div>
	);
}

export default App;
