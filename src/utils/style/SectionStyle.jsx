import styled from 'styled-components'

export const SectionContainer = styled.section`
  padding: 18px 15px;
  border-radius: 12px;
  position: relative;
  display: grid;
  column-gap: 1.1vw;
  row-gap: 1.6vh;

  h1 {
    position: absolute;
    background-color: #ffffff;
    font-weight: 700;
    font-size: 2.4vw;
    top: -2.2vw;
    left: 2vw;
    padding-inline: 0.8vw;
  }
`

export const CardContainer = styled.article`
  user-select: none;
  cursor: pointer;
  border-radius: 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 4px;
  .item--image {
    width: clamp(42px, 6vw + 1rem, 80px);
    max-height: clamp(42px, 6vw + 1rem, 80px);
    flex: 1;
    object-fit: contain;
    margin-top: 8px;
  }
  .item--price {
    position: absolute;
    padding: 2px 4px;
    left: 6px;
    top: 6px;
    background: #ffffff;
    border: 1px solid #292727;
    border-radius: 6px;
    font-weight: 700;
    font-size: 1.1vw;
  }
  .item--name {
    font-weight: 700;
    font-size: 1vw;
  }

  &:active {
    transform: scale(1.03);
    border-color: #292727;
  }
`
