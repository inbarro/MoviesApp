import React from 'react';
import styles from './SearchBar.module.css';

function SearchBar({ value, onChange }) {
    return (
        <div className={styles.container}>
            <input
                type="text"
                className={styles.input}
                placeholder="Search cities"
                value={value}
                onChange={onChange}
            />
        </div>
    );
}

export default SearchBar;
