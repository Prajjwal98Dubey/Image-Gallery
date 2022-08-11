import React from 'react'

const CardImage = ({img}) => {
  return (
      <>
        <div className="images-card">
            <img className='api-image' src={img.webformatURL}alt="user.jpg"/>
            <div className='pro'>Views: {img.views}</div>
            <div className='pro'>Download: {img.downloads}</div>
            <div className='pro'>Likes: {img.likes}</div>
          </div>
    </>
  )
}

export default CardImage