import { useState } from 'react'

const initialFormData = {
	title: '',
	image: '/img/1.jpg',
	content: '',
	category: '',
	published: false
}
function App() {
	const [formData, setFormData] = useState(initialFormData)
	const [articles, setArticles] = useState([])

	function handleFormField(e) {
		const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value

		setFormData({
			...formData,
			[e.target.name]: value
		})
	}

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
			<div className='container  my-3'>
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
							required
							onChange={handleFormField}
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
							onChange={handleFormField}
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
							onChange={handleFormField}
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
							onChange={handleFormField}
						/>
					</div>
					<div className='mb-3 form-check'>
						<label htmlFor='published' className='form-check-label'>
							Published
						</label>

						<input
							type='checkbox'
							name='published'
							id='published'
							className='form-check-input'
							placeholder='article published'
							value={formData.published}
							onChange={handleFormField}
						/>
					</div>

					<button type='submit' className='btn btn-primary my-3'>
						Aggiungi Articolo
					</button>
				</form>

				<ul className='list-group'>
					{articles.map((article, index) => (
						<li
							key={index}
							className='list-group-item d-flex justify-content-between align-items-center border rounded mb-3 p-3'>
							<div className='d-flex align-items-center gap-3'>
								<img src={article.image} style={{ maxWidth: '150px' }} />
								<div>
									<h5>{article.title}</h5>
									<div>
										<div>Content: {article.content}</div>
										<div>Category: {article.category}</div>
										{article.published && <div className='badge bg-success '>Published</div>}
									</div>
								</div>
							</div>
							<button className='btn btn-danger' data-index={index} onClick={deleteArticle}>
								🗑️
							</button>
						</li>
					))}
				</ul>
			</div>
		</>
	)
}

export default App
