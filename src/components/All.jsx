import React from 'react'
import { useState, useEffect } from 'react';

const All = () => {
  const [news, setNews] = useState(null);

  useEffect(()=>{
    fetch('https://newsapi.org/v2/top-headlines?country=ng&category=business&apiKey=8a8819c9340c4e7f8dd1af5e2ef2a1bb')
    .then(Response=>Response.json())
    .then((data)=>setNews(data.articles))
  },  [setNews])
  // console.log(news)
  if(news == null){
    return <div className="loading">Loading</div>
  }
return(<div>
  <div className="pt-5">
          <div className='container'>
          <div className="row">
    {
      news.map((val, key)=>{
        return(
          <div className="col-lg-6 col-sm-12 mb-3 rounded" key={key}>
            <div className="card">
            <img src={val.urlToImage} class="card-img-top" height={"300px"} alt={val.source.name} />
            <div className="card-title ps-3 pt-3">
              <a className='text-decoration-none' href={`${val.url}`} target="blank"><h3>{`${val.title}`}</h3></a>
            </div>
            <div className="card-body">
              <p>{val.content}</p>
            </div>
            <a className="text-decoration-none mb-4 ms-4 float-start" href={`${val.url}`} target="blank">Read more</a>
            </div>
          </div>
        )
      })
    }
  </div>
  </div>
  </div>
    <div className="">
      <div className='container'>
        <div className="row">
          <div className="col-lg-6 col-sm-12 mb-3 rounded">

          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default All