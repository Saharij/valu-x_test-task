export const Main = ({ images, handleChange, changeImg }) => {
  return (
    <main>
      <img src={images.image1} alt="Some image" />
      <img src={images.image2} alt="Some image" />
      <img src={images.image3} alt="Some image" />
      <button onClick={() => handleChange(!changeImg)}>
        Click me!!!
      </button>
    </main>
  )
}
