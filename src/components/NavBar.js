import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ handleSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showRecentSearches, setShowRecentSearches] = useState(false);
  const [recentSearches, setRecentSearches] = useState([]);
  const popularCategories = [
    'Business',
    'Sports',
    'Health',
    'Entertainment',
    'Technology',
    'Science',
  ];

  useEffect(() => {
    const storedRecentSearches = localStorage.getItem('recentSearches');
    if (storedRecentSearches) {
      setRecentSearches(JSON.parse(storedRecentSearches));
    }
  }, []);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch(searchTerm);
    setSearchTerm('');
    updateRecentSearches(searchTerm);
  };
  const handleLinkClick = (targetUrl) => {
    if (window.location.pathname === targetUrl) {
      window.location.reload();
    }
  };

  const handleSearchBarClick = () => {
    setShowRecentSearches(true);
  };

  const handleRecentSearchClick = (term) => {
    handleSearch(term);
    setSearchTerm(term);
    setShowRecentSearches(false);
  };

  const updateRecentSearches = (term) => {
    const updatedSearches = [term, ...recentSearches.filter((search) => search !== term)].slice(0, 5);
    setRecentSearches(updatedSearches);
    localStorage.setItem('recentSearches', JSON.stringify(updatedSearches));
  };

  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark">
      <Link className="navbar-brand" to="/">
          <b>NEWSIFY</b>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link
                className="nav-link"
                to="/"
                onClick={() => handleLinkClick('/')}
              >
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            {popularCategories.map((category, index) => (
              <li className="nav-item" key={index}>
                <Link
                  className="nav-link"
                  to={`/${category.toLowerCase()}`}
                  onClick={() =>
                    handleLinkClick(`/${category.toLowerCase()}`)
                  }
                >
                  {category}
                </Link>
              </li>
            ))}
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/contactUs"
                onClick={() => handleLinkClick('/contactUs')}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        <form className="form-inline my-2 my-lg-0" onSubmit={handleSubmit}>
          <div className="position-relative">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchTerm}
              onChange={handleInputChange}
              onClick={handleSearchBarClick}
              onBlur={() => setShowRecentSearches(false)}
            />
            {showRecentSearches && (
              <div className="recent-searches">
                {recentSearches.map((term, index) => (
                  <div
                    key={index}
                    className="recent-search-item"
                    onClick={() => handleRecentSearchClick(term)}
                  >
                    {term}
                  </div>
                ))}
              </div>
            )}
          </div>
          <button className="btn btn-outline-light my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
