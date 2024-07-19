import React, {useState, useEffect} from "react";
import { useParams, useLocation } from "react-router-dom";
import axios from 'axios'
import Header from './Header'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`
const Column = styled.div`
  background: #fff;
  overflow: scroll;

  &:last-child {
    background: #000;
  }
`
const Main = styled.div`
  padding-left: 70px;
`


const Airline = () => {
  let { slug } = useParams();
  const [airline, setAirline] = useState({})
  const [reviews, setReviews] = useState({})

  useEffect(()=> {
    const url = `/api/v1/airlines/${slug}`
    axios.get(url)
    .then(resp =>{
      console.log(resp)
      setAirline(resp.data)
    })
    .catch(resp => console.log(resp))
  },[])


  return (
    <Wrapper>
      <Column>
        <Main>
          {
            airline.data &&
            <Header
            attributes={airline.data.attributes}
            reviews={airline.included}
            />
          }
        </Main>
        <div className="reviews"></div>
      </Column>
      <Column>
          <div className="review-form">Review Goes here</div>
      </Column>
    </Wrapper>
  )
}

export default Airline