import React from 'react';
import styles from './SearchBar.module.css';

function SearchBar({ value, onChange, placeholder }) {
    return (
        <div className={styles.searchBar}>
            <input
                type="text"
                className={styles["searchBar-input"]}
                placeholder= {placeholder ? placeholder :"Search"}
                value={value}
                onChange={onChange}
            />
        </div>
    );
}

export default SearchBar;
