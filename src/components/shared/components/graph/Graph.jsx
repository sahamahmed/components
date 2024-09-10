import React from 'react';
import { BarChart, Bar, ResponsiveContainer } from 'recharts';

const defaultData = [
    { name: 'Page A', uv: 4000 },

];

const BarChartComponent = ({ data = defaultData }) => (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
                <Bar dataKey="uv" fill="#0E263F" />
            </BarChart>
        </ResponsiveContainer>
);

export default BarChartComponent;
