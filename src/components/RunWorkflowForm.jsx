import React, { useState } from 'react';
import Typography from './shared/components/typography/Typography';
import Select from './shared/components/select/Select';
import Input from './shared/components/inputs/text/Text';
import CheckBox from './shared/components/checkbox/CheckBox';
import Tags from './shared/components/tags/Tag';
import './RunWorkflowForm.scss'; 

const RunWorkflowForm = () => {
    const [selected, setSelected] = useState(false);

    const onSelectChange = () => {
        setSelected(prev => !prev);
    };

    return (
        <div className="run-workflow-form">
            <div className="header">
                <Typography type="sub-section-header" className="title">Action</Typography>
                <Select
                    defaultValue={{ value: '', label: 'Pull' }}
                    options={[
                        { value: 'option1', label: 'Push' },
                        { value: 'option2', label: 'Pull' }
                    ]}
                />
            </div>

            <div className="field">
                <div className="field-label">
                    <div className="dot"></div>
                    <Typography type="sub-section-header">workflow id</Typography>
                </div>
                <Input
                    placeholder="00e6675e-3b36"
                    isPrefix={false}
                    className="input"
                />
            </div>

            <div className="field">
                <div className="field-label">
                    <div className="dot"></div>
                    <Typography type="sub-section-header">node_name</Typography>
                </div>
                <Input
                    placeholder="Testing Sequence"
                    isPrefix={false}
                    className="input"
                />
            </div>

            <div className="field">
                <div className="field-label">
                    <div className="dot"></div>
                    <Typography type="sub-section-header">n_items</Typography>
                </div>
                <Input
                    placeholder="20"
                    className="input"
                    isPrefix={false}
                />
                <Typography type="helper-text" >
                    Pulls n results from selected node
                </Typography>
            </div>

            <div className="checkbox">
                <CheckBox onChange={onSelectChange} checked={selected}>
                    <Typography type="regular">Schedule for later</Typography>
                </CheckBox>
            </div>

            {selected && (
                <div className="schedule">
                    <div className="schedule-section">
                        <div className="dot"></div>
                        <Typography type="sub-section-header">Frequency</Typography>
                    </div>
                    <Tags tagsData={['Daily', 'Weekly', 'Monthly']} />

                    <div className='selectors'>
                        <div className="select-group">
                            <Typography type="regular">Select Day</Typography>
                            <Select
                                defaultValue={{ value: '', label: 'Monday' }}
                                options={[
                                    { value: 'option1', label: 'Monday' },
                                    { value: 'option2', label: 'Tuesday' }
                                ]}
                            />
                        </div>

                        <div className="select-group">
                            <Typography type="regular">Start Time</Typography>
                            <Select
                                defaultValue={{ value: '', label: '12:00am' }}
                                options={[
                                    { value: 'option1', label: '12:00am' },
                                    { value: 'option2', label: '12:00pm' }
                                ]}
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default RunWorkflowForm;
