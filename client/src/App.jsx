import axios from "axios";
import {  useState } from "react";

const App = () => {
  const [prods, setProds] = useState([]);
  const [name, setName] = useState();
  const [price, setPrice] = useState("");

  // const [ price, setPrice ] = useState('')

  const getProduct = () => {
    axios.get("http://localhost:8000/products").then(
      (res) => setProds(res.data)
      // console.log(res))
    );
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const details = {
      price: price,
      name: name,
    };
    axios.post("http://localhost:8000/products", details);
  };
  const deleteHandler = (id) => {
    axios
      .delete(`http://localhost:8000/products/${id}`)
      .then(() => {
        console.log("Data delete with id:no", id);
      })
      .catch((err) => {
        console.log(err);
      });
      // window.location.reload()
  };
  // useEffect(()=>{
// // deleteHandler()
//   },[])

  return (
    <div>
      {prods.map((prod) => {
        return (
          <div key={prod._id}>
            <h1>{prod.name}</h1>
            <p>{prod.price}</p>
            <button
              onClick={() => {
                deleteHandler(prod._id);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
      <form onSubmit={submitHandler}>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="text"
          onChange={(e) => {
            setPrice(e.target.value);
          }}
          value={price}
        />
        <button type="submit">Post details</button>
        {/* <p>{prod}</p> */}
      </form>
      <button onClick={getProduct}> Get products</button>
    </div>
  );
};

export default App;
