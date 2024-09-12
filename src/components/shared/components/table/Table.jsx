import { Table } from 'antd';
import React, { useState } from 'react';
import './Table.scss';
import Pagination from '../pagination/Pagination'; 

const TableComponent = ({ columns, data }) => {
    const [currentPageData, setCurrentPageData] = useState(data.slice(0, 10));
    const totalItems = data.length;

    const handlePageChange = (page, itemsPerPage) => {
        const start = (page - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        setCurrentPageData(data.slice(start, end));
    };

    return (
        <div>
            <Table
                columns={columns}
                dataSource={currentPageData}
                pagination={false} 
                className="custom-table-row"
            />

            <Pagination
                totalItems={totalItems}
                itemsPerPageOptions={[10, 20, 50]} 
                onPageChange={handlePageChange} 
            />
        </div>
    );
};

export default TableComponent;
