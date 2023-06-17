import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";
import NavBar from './NavBar';

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const updateNews = async () => {
    props.setProgress(15);
    const searchTermParam = searchTerm ? `&q=${encodeURIComponent(searchTerm)}` : '';
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}${searchTermParam}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pagesize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(40);
    let parsedData = await data.json();
    props.setProgress(70);
    console.log(parsedData);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
  }

  useEffect(() => {
    if (`${capitalizeFirstLetter(props.category)}`==='General'){
      document.title = 'NEWSIFY';
    }
    else{
      document.title = `${capitalizeFirstLetter(props.category)}: NEWSIFY`;
    }
    updateNews();
    // eslint-disable-next-line
  }, [props.apiKey ,props.category, searchTerm])

  /*const handlePrevClick = async () =>{
      setPage(page-1);
      updateNews();
    } */
  /*const handleNextClick = async () =>{
    setPage(page+1);
      updateNews();
    } */
    const handleSearch = (term) => {
      setSearchTerm(term);
      setArticles([]);
      setPage(1);
    };

  const fetchMoreData = async () => {
    const nextPage = page + 1; 
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pagesize}`;
    setPage(nextPage);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  };

  return (
    <>
    <NavBar handleSearch={handleSearch} />
    <div className="container my-3">
      <h2 className='text-center' style={{ margin: '20px 0px' , marginTop: '80px'}}>Today's Top {capitalizeFirstLetter(props.category)} News!!!!</h2>
      {loading && <Spinner/>}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container row">
          {articles.map((element, index) => {
            return <div className="column-md-3" key={element.url + index}>
              <NewsItem title={element.title ? element.title.slice(0, 46) : ""} description={element.description ? element.description.slice(0, 100) : ""} imgurl={element.urlToImage} newsurl={element.url} author={element.author} datetime={element.publishedAt} source={element.source.name} />
            </div>
          })}
        </div>
      </InfiniteScroll>

      {/* <div className="container d-flex justify-content-between">
        <button disabled={page<=1} type="button" className="btn btn-outline-dark" onClick={handlePrevClick}> &larr; Previous</button>
        <button  disabled={page+1 > Math.ceil(totalResults/props.pagesize)} type="button" className="btn btn-outline-dark" onClick={handleNextClick}>Next &rarr;</button>
        </div> */}
    </div>
    </>
  )
}

News.defaultProps = {
  country: 'in',
  pagesize: 6,
  category: 'general',
}
News.propTypes = {
  country: PropTypes.string,
  pagesize: PropTypes.number,
  category: PropTypes.string,
}
export default News