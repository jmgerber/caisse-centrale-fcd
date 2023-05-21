import styled from 'styled-components'
import colors from '../utils/style/colors'
import { SectionContainer } from '../utils/style/SectionStyle'

function Basket({ data, addToCart, removeFromCart }) {
  const basketArray = data.map((item) => {
    return (
      <BasketLine key={item.id}>
        <div className='leftSection'>
          <div className='imageContainer'>
            <img
              src={`./images/${item.image}`}
              className='item--image'
              alt={`Icône de ${item.name}`}
            />
          </div>
          <div className='item--quantity'>{item.quantity} X</div>
          <div className='item--name'>{item.name}</div>
        </div>
        <div className='rightSection'>
          <div className='item--price'>{`${(item.price * item.quantity).toFixed(
            2
          )}€`}</div>
          <button onClick={() => addToCart(item)}>+</button>
          <button onClick={() => removeFromCart(item)}>-</button>
        </div>
      </BasketLine>
    )
  })
  const totalPrice = data.reduce(
    (acc, currentValue) => acc + currentValue.price * currentValue.quantity,
    0
  )
  return (
    <BasketContainer>
      <h1>Addition</h1>
      <div className='totalPrice'>
        <span className='totalPrice--text'>Total : </span>
        <span className='totalPrice--price'>{totalPrice.toFixed(2)}€</span>
      </div>
      <div className='basketList'>{basketArray}</div>
    </BasketContainer>
  )
}

export default Basket

/////  Style  /////

const BasketContainer = styled(SectionContainer)`
  display: flex;
  flex-direction: column;
  column-gap: inherit;
  border: 4px solid ${colors.basketColor};
  height: 60%;
  width: 100%;
  padding: 0.8vw;
  & h1 {
    color: ${colors.basketColor};
  }
  & .totalPrice {
    display: flex;
    align-items: center;
    position: absolute;
    bottom: -14px;
    left: clamp(20%, 8vw, 24%);
    background-color: #ffffff;
    padding-inline: 0.8vw;
    &--text {
      font-weight: 400;
      font-size: 2.3vw;
      margin-right: 0.5vw;
    }
    &--price {
      font-weight: 700;
      font-size: 2.4vw;
    }
  }
  & .basketList {
    height: 100%;
    overflow: hidden;
  }
`

const BasketLine = styled.div`
  display: flex;
  height: 42px;
  justify-content: space-between;
  width: 100%;
  & .leftSection,
  .rightSection {
    display: flex;
    align-items: center;
  }
  & .imageContainer {
    width: clamp(32px, 2vw, 42px);
    height: clamp(32px, 2vw, 42px);
    margin-right: 0.5vw;
  }
  & .item--image {
    width: 100%;
    height: 100%;
    object-fit: contain;
    background-color: #e7e7e7;
    border-radius: 50%;
    border: 2px solid #a0a0a0;
    padding: 2px;
  }
  & .item--quantity {
    font-weight: 700;
    font-size: 1.2vw;
    margin-right: 0.5vw;
  }
  & .item--name {
    font-size: 1.1vw;
  }
  & .item--price {
    font-weight: 700;
    font-size: 1.2vw;
    margin-inline: 0.6vw;
  }
  & button {
    cursor: pointer;
    background-color: #d9d9d9;
    font-size: 1.2vw;
    font-weight: 700;
    width: min(42px, 2vw);
    height: min(42px, 2vw);
    border: none;
    border-radius: 8px;
    &:nth-child(2) {
      margin-right: 0.6vw;
    }
  }
`
