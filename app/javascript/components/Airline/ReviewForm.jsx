import React from 'react'
import styled from 'styled-components'

const RatingContainer = styled.div`
  text-align: center;
  border-radius;
  font-size: 18px;
  padding: 40px 0 10px 0;
  border: 1px #e6e6e6;
  background: #fff;
`
const StarContainer = styled.div`
  display: inline-block;

  input {
    width: 30px;
    height: 30px;
    margin-top: auto;
    transition: .6s;
  }

  input:checked {
    width: 40px;
    height: 40px;
  }

  input:not(:checked):hover {
    width: 40px;
    height: 40px;
  }

`
const RatingBox = styled.div`
  display: flex;
  background: #fff;
  justify-content: center;
  flex-direction: row-reverse;
  position: relative;
`

const ReviewForm = (props) => {
  const ratingOptions = [5,4,3,2,1].map((score) =>{
    return(
      <StarContainer key={score}>
        <input
        type="radio"
        value={score}
        name="rating"
        onChange={()=> console.log("selected:", score )}
        id={`rating-${score}`}
        />
      </StarContainer>

    )
  })


  return (
    <div className="wrapper">
      <form onSubmit={ props.handleSubmit }>
        <div>Have an experience with { props.attributes.name }? Share your review! </div>
        <div className="field">
          <input onChange={ props.handleChange } value={ props.review.title || '' } type="text" name="title" placeholder="Review Title"/>
        </div>
        <div className="field">
          <input onChange={ props.handleChange } value={ props.review.description || '' } type="text" name="description" placeholder="Review Description"/>
        </div>
        <div className="field">
          <RatingContainer>
            <div className="rating-title-text">Rate this Airline</div>
            <RatingBox>
              {ratingOptions}
            </RatingBox>
          </RatingContainer>
        </div>
        <button type="submit">Submit Your Review</button>
      </form>
    </div>
  )
}

export default ReviewForm