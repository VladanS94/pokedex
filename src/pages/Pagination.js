import React from 'react'

const Pagination = ({postsPerPage, totalPosts, paginate, currentPage}) => {
    const pageNumbers = []

    for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++){
        pageNumbers.push(i)
    }

  return (
    <div className='pagination flex mt-5'>
        {pageNumbers?.map((number,key) =>(
            <div className='px-2' id={number} key={key}>
                <a className={number === currentPage ? 'active' : ''} onClick={()=> paginate(number)} href={number}>
                   <span>{number}</span> 
                </a>
            </div>
        ))}
        
    </div>
  )
}

export default Pagination