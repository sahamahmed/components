import React, { useState } from 'react';
import { Tag } from 'antd';
import './Tag.scss';  

const Tags = ({ tagsData = [], defaultSelectedTags = [], onTagChange }) => {
    const [selectedTags, setSelectedTags] = useState(defaultSelectedTags);

    const handleChange = (tag, checked) => {

        setSelectedTags(tag);
        if (onTagChange) {
            onTagChange(tag); 
        }
    };

    return (
        <div className="tags-container">
            {tagsData.map((tag) => (
                <Tag.CheckableTag
                    key={tag}
                    checked={selectedTags.includes(tag)}
                    onChange={(checked) => handleChange(tag, checked)}
                >
                    {tag}
                </Tag.CheckableTag>
            ))}
        </div>
    );
};

export default Tags;
