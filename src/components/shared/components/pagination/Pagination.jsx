import React, { useState } from 'react';
import './Pagination.scss';

const Pagination = ({ totalItems, itemsPerPageOptions, onPageChange }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(itemsPerPageOptions[0]);
    const [dropdownOpen, setDropdownOpen] = useState(false); 

    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const handlePageChange = (newPage) => {
        if (newPage > 0 && newPage <= totalPages) {
            setCurrentPage(newPage);
            onPageChange(newPage, itemsPerPage);
        }
    };

    const handleItemsPerPageChange = (option) => {
        setItemsPerPage(option);
        setCurrentPage(1);
        setDropdownOpen(false);
        onPageChange(1, option);
    };

    return (
        <div className="custom-pagination">
            <div className="rows-per-page">
                <span>Rows per page:</span>
                <div className="dropdown">
                    <div className="dropdown-selected" onClick={() => setDropdownOpen( prev => !prev)}>
                        {itemsPerPage}
                        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 0.359863L5 5.35986L10 0.359863H0Z" fill="black" fillOpacity="0.54" />
                        </svg>
                    </div>

                    {dropdownOpen && (
                        <div className="dropdown-options">
                            {itemsPerPageOptions.map((option) => (
                                <div
                                    key={option}
                                    className="dropdown-option"
                                    onClick={() => handleItemsPerPageChange(option)}
                                >
                                    {option}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            <div className="pagination-info">
                <span>
                    {`${(currentPage - 1) * itemsPerPage + 1}-${Math.min(
                        currentPage * itemsPerPage,
                        totalItems
                    )} of ${totalItems}`}
                </span>
            </div>

            <div className="pagination-controls">
                <button
                    className={`prev-btn ${currentPage === 1 ? 'disabled' : ''}`}
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M7.41 10.8898L2.83 6.2998L7.41 1.7098L6 0.299805L0 6.2998L6 12.2998L7.41 10.8898Z"
                            className="prev-arrow"
                        />
                    </svg>
                </button>

                <button
                    className={`next-btn ${currentPage === totalPages ? 'disabled' : ''}`}
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M0.589844 11.1398L5.16984 6.5498L0.589844 1.9598L1.99984 0.549805L7.99984 6.5498L1.99984 12.5498L0.589844 11.1398Z"
                            className="next-arrow"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Pagination;
