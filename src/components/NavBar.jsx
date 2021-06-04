import React, {useContext}from 'react';
import {BookContext} from '../contexts/BookContext';

function NavBar() {
	const { books } = useContext(BookContext);
	return (
		<div className="navbar">
			<h1>Niraj Reading List</h1>
			<p>Currently there are {books.length} books to get through</p>
		</div>
	);
}

export default NavBar;

