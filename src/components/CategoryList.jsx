import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form' 
import InputGroup from 'react-bootstrap/InputGroup' 
import Spinner from './Spinner'

const CategoryList = () => {

  const [categories, setCategories] = useState([])
  const [errors, setErrors] = useState(false)
  const [searchQuery, setSearchQuery] = useState('') 

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get('https://themealdb.com/api/json/v1/1/categories.php')
        setCategories(data.categories)
      } catch (err) {
        console.log(err)
        setErrors(true)
      }
    }
    getData()
  }, [])

  const handleSearch = (event) => {
    setSearchQuery(event.target.value)
  }

  const filteredCategories = categories.filter(category => {
    return category.strCategory.toLowerCase().includes(searchQuery.toLowerCase())
  })

  return (
    <Container as="main" className='CategoryIndex text-center'>
      <h1 className='mb-4'>Recipe Categories...!</h1>

      <Row className="mb-5 justify-content-center">
        <Col md={6}>
          <InputGroup>
            <InputGroup.Text id="search-icon">&#8981;</InputGroup.Text>
            <Form.Control
              placeholder="Search Recipes..(e.g., Chicken, Desserts)..."
              aria-label="Search categories"
              value={searchQuery}
              onChange={handleSearch}
            />
          </InputGroup>
        </Col>
      </Row>

      <Row>
        {filteredCategories.length > 0
          ?
          filteredCategories.map(category => {
            const { idCategory, strCategory, strCategoryThumb } = category
            return (
              <Col key={idCategory} md="2" className='mb-4'>
                <Link to={`/a/${strCategory}`}>
                  <Card>
                    <Card.Img variant='top' src={strCategoryThumb}></Card.Img>
                    <Card.Body>
                      <Card.Title className='text-center mb-0 btn'> {strCategory} </Card.Title>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            )
          })
          :
          <>
           
            {searchQuery && categories.length > 0 ? (
              <h2>No categories found matching &quote;{searchQuery}&quote;</h2>
            ) : errors ? (
              <h2>Something went wrong. Please try again later</h2>
            ) : (
             
              <Spinner />
            )}
          </>
        }
      </Row>
    </Container >
  )
}

export default CategoryList