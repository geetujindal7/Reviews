import React,{useState} from 'react'
import reviews from './data';
import './App.css';
import { FaChevronLeft, FaChevronRight, FaQuoteRight, FaSurprise } from 'react-icons/fa';



function Review() {
    const [index, setIndex] = useState(0)
    const [review, setReviews] = useState(reviews)

    const check = (number) => {
        if(number < 0)
        {
           return reviews.length -1
        }
        if(number > reviews.length - 1)
        {
           return 0
        }
        else{
            return number;
        }
    }

   const previous = () =>
   {
       setIndex((index) => 
       {
        let prev = index - 1
        return check(prev)
       })
       

   }
   const next = () =>
   {
    setIndex((index) => 
    {
     let next = index + 1
     return check(next)
    })
   }

   const surprise = () =>
   {
    setIndex((index) => 
    {
       let ne =  Math.floor(Math.random() * review.length);
       console.log(ne)
        return ne;
    })
   }
    return (<>
        <article className='review'>
      <div className='img-container'>
        <img src={review[index].image} alt="img" className='person-img' />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{review[index].name}</h4>
      <p className='job'>{review[index].job}</p>
      <p className='info'>{review[index].text}</p>
      <div className='button-container'>
        <button className='prev-btn' onClick={() => previous()} >
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={() => next()}>
          <FaChevronRight />
        </button>
      </div>
      <button className='random-btn'  onClick={() => surprise()}>
        surprise me
      </button>
    </article></>
    )
}

export default Review
