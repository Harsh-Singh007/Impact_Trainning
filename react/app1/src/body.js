import './body.css';

function Body() {
  return (
    <div class="body-container">

    
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToj4xzAv8bZgUj8LUY-h908k_rmWnhDQbw0w&s" alt="Example" className="body-img" />

      <form className="body-form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" placeholder="Enter your name" />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" placeholder="Enter your email" />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Body;
