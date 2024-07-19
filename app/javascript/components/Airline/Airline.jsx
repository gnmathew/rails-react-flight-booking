import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from 'axios'
import Header from './Header'
import styled from 'styled-components'
import ReviewForm from "./ReviewForm";


//style
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
  const [review, setReview] = useState({
    title: '',
    description: '',
    score: 0
  })

  useEffect(()=> {
    const url = `/api/v1/airlines/${slug}`
    axios.get(url)
    .then(resp =>{
      console.log(resp.data)
      setAirline(resp.data)
    })
    .catch(resp => console.log(resp))
  },[])


  const handleChange = (e) => {
    e.preventDefault()

    setReview({ ...review, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const csrfToken =document.querySelector('[name=csrf-token]').content
    axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken

    const airline_id = airline.data.id
    axios.post(`/api/v1/airlines/${slug}/reviews`, {review, airline_id})
    .then(resp => {
      const included = [ ...airline.included, resp.data.data]
      setAirline({ ...airline, included}),
      setReview({title: '', description: '', score: 0})
    })
    .catch(resp => {})
  }


  return (
    <Wrapper>
      {
        airline.data &&
        <>
          <Column>
            <Main>
              <Header
                attributes={airline.data.attributes} review={airline.included}
              />
              <div className="reviews"></div>
            </Main>
          </Column>
          <Column>
            <ReviewForm
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              attributes={airline.data.attributes}
              review={review}
            />
          </Column>
        </>
      }
    </Wrapper>
  )
}

export default Airline