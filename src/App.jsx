import { useState, useEffect, useReducer, use } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'
import Card from './components/Card'
import { db } from './db/db'

function App() {
  //variable y su metodo para actualizar
  // const [customer, setCustomer] = useState({});
  //const [total, setTotal] = useState(0);
  //const [products, setProducts] = useState([]);
  // const[modal, setModal] = useState(false);
  //console.log(customer);
  //if(auth){const (modal, setModal = useState(false);}

  const [data, setData] = useState(db);
  console.log(data);


  return (
    <div>

      <Header></Header>


      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {
            data.map((guitar) => (
              <Card
                key={guitar.id}
                guitar={guitar}
              />
            ))
          }




        </div>
      </main>


      <Footer></Footer>

    </div>

  )
}

export default App
