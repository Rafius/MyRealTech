import React from 'react';
import PropTypes from 'prop-types';

import {Wrapper, P, Img} from './pagination.styled';

import arrow from '../../../assets/arrow.png';

const options = [10, 25, 50, 100];

const Pagination = ({
  size,
  setSize,
  currentPage,
  setCurrentPage,
  paginationCount,
}) => {
  const decreaseCurrentPage = () =>
    setCurrentPage(currentPage - 1 > 0 ? currentPage - 1 : currentPage);
  const increaseCurrentPage = () =>
    setCurrentPage(
      paginationCount > size * currentPage ? currentPage + 1 : currentPage,
    );
  const handleSelect = e => {
    setSize(parseInt(e.target.value));
    setCurrentPage(1);
  };

  const pageValue = `${
    currentPage === 1 ? currentPage : size * (currentPage - 1)
  }-${currentPage * size}`;

  return (
    <Wrapper>
      <P>Rows per page:</P>
      <P marginRight>
        {pageValue} of {paginationCount}
      </P>
      <select onChange={e => handleSelect(e)}>
        {options.map((item, index) => (
          <option key={index} value={item}>
            {' '}
            {item}{' '}
          </option>
        ))}
      </select>
      <Img src={arrow} onClick={decreaseCurrentPage} />
      <P important>{currentPage}</P>
      <Img src={arrow} onClick={increaseCurrentPage} flip />
    </Wrapper>
  );
};

export default Pagination;
