import data from './data.json'
import Salt from './components/Salt'
import Sugar from './components/Sugar'
import Drink from './components/Drink'
import Consigne from './components/Consigne'
import Basket from './components/Basket'
import Change from './components/Change'
import { useState } from 'react'
import styled from 'styled-components'

function App() {
  const [cart, setCart] = useState([])
  const saltData = data.filter((data) => data.categorie === 'salés')
  const sugarData = data.filter((data) => data.categorie === 'sucrés')
  const drinkData = data.filter((data) => data.categorie === 'boisson')
  const consigneData = data.filter((data) => data.categorie === 'consigne')
  const addToCart = (item) => {
    console.log('ADD', item)
    const exist = cart.find((cartItem) => cartItem.id === item.id)
    if (exist) {
      setCart(
        cart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...exist, quantity: exist.quantity + 1 }
            : cartItem
        )
      )
    } else {
      setCart([...cart, { ...item, quantity: 1 }])
    }
  }
  const removeFromCart = (item) => {
    console.log('REMOVE', item)
    const exist = cart.find((cartItem) => cartItem.id === item.id)
    if (exist.quantity === 1) {
      setCart(cart.filter((cartItem) => cartItem.id !== item.id))
    } else {
      setCart(
        cart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...exist, quantity: exist.quantity - 1 }
            : cartItem
        )
      )
    }
  }
  return (
    <AppContainer>
      <section className='foodContainer'>
        <Salt data={saltData} addToCart={addToCart} />
        <Sugar data={sugarData} addToCart={addToCart} />
      </section>
      <Drink data={drinkData} addToCart={addToCart} />
      <Consigne data={consigneData} addToCart={addToCart} />
      <Basket
        data={cart}
        setData={setCart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
      />
    </AppContainer>
  )
}

export default App

/////  Style  /////

const AppContainer = styled.main`
  display: flex;
  padding: 40px;
  width: 100vw;
  height: 100vh;

  .foodContainer {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 2vw;
    width: 30%;
  }
`
