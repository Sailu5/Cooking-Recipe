import RecipeImg from '../images/recipes.gif'

const Spinner = () => {
  return (
    <div className="cook-wrapper">
      {/* Use the variable for the image inside of the source */}
      <h2>Loading...</h2>
      <img src={RecipeImg} alt="Loading" />
    </div>
  )
}

export default Spinner