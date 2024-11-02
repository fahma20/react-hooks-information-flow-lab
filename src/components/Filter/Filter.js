import React from 'react';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';

const Filter = ({ selectedCategory, onCategoryChange }) => {
  const handleChange = (event) => {
    onCategoryChange(event.target.value); 
  };

  return (
    <div className={styles.Filter}>
      <select name="filter" value={selectedCategory} onChange={handleChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
};



export default Filter;
