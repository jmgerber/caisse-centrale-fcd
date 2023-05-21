import { useEffect, useState, useRef } from 'react'
import styled from 'styled-components'

function Change() {
  const changeRef = useRef()
  const [width, setWidth] = useState(0)

  useEffect(() => {
    if (!changeRef?.current?.clientWidth) {
      return
    }
    setWidth(changeRef?.current?.clientWidth)
  }, [changeRef?.current?.clientWidth])

  return (
    <ChangeContainer ref={changeRef} style={{ height: `min(${width}px, 30%)` }}>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button>0</button>
    </ChangeContainer>
  )
}

export default Change

const ChangeContainer = styled.section`
  display: grid;
  grid-template: repeat(3, 1fr) / repeat(3, 1fr);
  gap: 0.1vw;
  background-color: #eee;
  border-radius: 12px;
  max-width: 257px;
  padding: 4px;
  width: 100%;
  align-items: center;
  justify-items: center;
  & button {
    height: 4vw;
    width: 4vw;
    border: 2px solid black;
    border-radius: 8px;
    font-size: 2vw;
    font-weight: 700;
  }
`
