import { useState } from 'react'

const initialFormData = {
	title: '',
	image: '',
	content: '',
	category: 'news',
	isTagged: false
}
function App() {
	const [formData, setFormData] = useState(initialFormData)
	const [articles, setArticles] = useState([])

	function addArticle(e) {
		e.preventDefault()
		setArticles([...articles, formData])
		setFormData(initialFormData)
	}

	function deleteArticle(e) {
		const articleIndexToDelete = Number(e.target.getAttribute('data-index'))
		const newArticles = articles.filter((article, index) => index !== articleIndexToDelete)
		setArticles(newArticles)
	}

	return (
		<>
			<div className='container w-50 my-3'>
				<h1>React form</h1>

				<form onSubmit={addArticle}>
					<div className='mb-3'>
						<label htmlFor='title' className='form-label'>
							Title
						</label>

						<input
							type='text'
							name='title'
							id='title'
							className='form-control'
							placeholder='article title'
							value={formData.title}
							onChange={(e) => setFormData({ ...formData, title: e.target.value })}
						/>
					</div>
					<div className='mb-3'>
						<label htmlFor='image' className='form-label'>
							Image
						</label>

						<input
							type='text'
							name='image'
							id='image'
							className='form-control'
							placeholder='article image'
							value={formData.image}
							onChange={(e) => setFormData({ ...formData, image: e.target.value })}
						/>
					</div>
					<div className='mb-3'>
						<label htmlFor='content' className='form-label'>
							Content
						</label>

						<input
							type='text'
							name='content'
							id='content'
							className='form-control'
							placeholder='article content'
							value={formData.content}
							onChange={(e) => setFormData({ ...formData, content: e.target.value })}
						/>
					</div>
					<div className='mb-3'>
						<label htmlFor='category' className='form-label'>
							Category
						</label>

						<input
							type='text'
							name='category'
							id='category'
							className='form-control'
							placeholder='article category'
							value={formData.category}
							onChange={(e) => setFormData({ ...formData, category: e.target.value })}
						/>
					</div>
					<div className='mb-3'>
						<label htmlFor='isTagged' className='form-label'>
							Is Tagged
						</label>

						<input
							type='checkbox'
							name='isTagged'
							id='isTagged'
							className='form-control'
							placeholder='article isTagged'
							value={formData.isTagged}
							onChange={(e) => setFormData({ ...formData, isTagged: e.target.value })}
						/>
					</div>
					<div className='mb-3'>
						<label htmlFor='isPublished' className='form-label'>
							Is Published
						</label>
					</div>
					<button type='submit' className='btn btn-primary'>
						Aggiungi Articolo
					</button>
				</form>

				<ul className='list-group'>
					{articles.map((article, index) => (
						<li key={index} className='list-group-item d-flex justify-content-between align-items-center'>
							{article.title}
							<div className='d-flex'>
								<button className='btn btn-danger' data-index={index} onClick={deleteArticle}>
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
