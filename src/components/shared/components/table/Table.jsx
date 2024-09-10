import { Table } from 'antd';
import './Table.scss'
const TableComponent = ({ columns, data }) => {
    return (
        <Table
            columns={columns}
            dataSource={data}
            pagination={{
                pageSizeOptions: ['10', '20', '50'], 
                showSizeChanger: true,
                size: 'default', 
            }}
            className="custom-table-row"    />
    );
};

export default TableComponent;
