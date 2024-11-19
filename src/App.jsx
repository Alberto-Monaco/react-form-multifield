import { useState } from 'react'

const initialTitles = []
function App() {
	const [titles, setTitles] = useState(initialTitles)
	const [newTitle, setNewTitle] = useState('')

	function addTitle(e) {
		e.preventDefault()
		setTitles([...titles, newTitle])
		setNewTitle('')
	}

	function deleteTitle(e) {
		const titleIndexToDelete = Number(e.target.getAttribute('data-index'))
		const newTitles = titles.filter((title, index) => index !== titleIndexToDelete)
		setTitles(newTitles)
	}
	function changeTitle(e) {
		const titleIndexToChange = Number(e.target.getAttribute('data-index'))
		const changedTitle = prompt('Enter new title')
		const newTitles = titles.map((title, index) => (index == titleIndexToChange ? changedTitle : title))
		setTitles(newTitles)
	}

	return (
		<>
			<div className='container w-50 my-3'>
				<h1>React form</h1>

				<form onSubmit={addTitle}>
					<div className='mb-3'>
						<label htmlFor='title' className='form-label'>
							Title
						</label>
						<div className='input-group mb-3'>
							<input
								type='text'
								className='form-control'
								placeholder='article title'
								value={newTitle}
								onChange={(e) => setNewTitle(e.target.value)}
							/>
							<button className='btn btn-primary' type='submit' id='button-addon2'>
								Add
							</button>
						</div>
						<small id='titleHelper' className='form-text text-muted'>
							Title of the article
						</small>
					</div>
				</form>

				<ul className='list-group'>
					{titles.map((title, index) => (
						<li key={index} className='list-group-item d-flex justify-content-between align-items-center'>
							{title}
							<div className='d-flex'>
								<button className='btn btn-warning me-2' data-index={index} onClick={changeTitle}>
									✏️
								</button>
								<button className='btn btn-danger' data-index={index} onClick={deleteTitle}>
									🗑️
								</button>
							</div>
						</li>
					))}
				</ul>
			</div>
		</>
	)
}

export default App
