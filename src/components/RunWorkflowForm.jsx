import React, { useState } from 'react';
import { Input as AntInput, Form } from 'antd';

import Typography from './shared/components/typography/Typography';
import Select from './shared/components/select/Select';
import Input from './shared/components/inputs/text/Text';
import CheckBox from './shared/components/checkbox/CheckBox';
import Tags from './shared/components/tags/Tag';
import Tabs from './shared/components/tabs/Tabs';
import Button from './shared/components/button/Button';

import './RunWorkflowForm.scss';

const { TextArea } = AntInput;

const RunWorkflowForm = ({ data, onSave, onCancel }) => {
    const [isSubmit, setIsSubmit] = useState(false);
    const [selected, setSelected] = useState(false);
    const [selectedTab, setSelectedTab] = useState('form');

    const parseTextToJsonValue = (text) => {
    }

    const saveWorkflow = async () => {
        
    }

    const runWorkflowTabs = [
        {
            key: '1',
            label: 'Form',
            children: (
                <div className="run-workflow-form">
                    <div className="form-field">
                        <div className="header">
                            <Typography type="sub-section-header" className="title">Action</Typography>
                            <Select
                                type='single'
                                defaultValue='Pull'
                                options={[
                                    { value: 'Push', label: 'Push', disabled: true },
                                    { value: 'Pull', label: 'Pull' }
                                ]}
                            />
                        </div>

                        <div className="field">
                            <div className="field-label">
                                <div className="dot"></div>
                                <Typography type="sub-section-header">workflow id</Typography>
                            </div>
                            <Input
                                placeholder=''
                                suffix={false}
                                isPrefix={false}
                                className="input"
                                disabled readOnly
                            />
                        </div>

                        <div className="field">
                            <div className="field-label">
                                <div className="dot"></div>
                                <Typography type="sub-section-header">node_name</Typography>
                            </div>
                            <Input
                                placeholder=''
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
                                placeholder=''
                                type="number"
                                className="input"
                                onChange={v => workflowValueChangeHandler('n_items', v)}
                            />
                            <Typography type="helper-text" >
                                Pulls n results from selected node
                            </Typography>
                        </div>

                        {false && (<div className="checkbox">
                            <CheckBox onChange={bool => onSelectChange()} checked={selected}>
                                <Typography type="regular">Schedule for later</Typography>
                            </CheckBox>
                        </div>)
                        }

                        {false && selected && (
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
                    <div className="drawer-footer">
                        <Button
                            type='secondary'
                            onClick={e => onCancel()}
                            className="footer-button"
                            label="Cancel"
                            disabled={isSubmit}>
                        </Button>
                        <Button
                            type='primary'
                            onClick={e => saveWorkflow()}
                            className="footer-button"
                            label={isSubmit ? "Saving Changes..." : "Run Workflow"}
                            disabled={isSubmit}>
                        </Button>
                    </div>
                </div>
            ),
        },
        {
            key: '2',
            label: 'JSON',
            children: (
            <div className='run-workflow-form'>
                    <div className='json'>
                        <Typography type="section-header" className="dot">
                            JSON Data
                        </Typography>
                        <TextArea autoSize={{ minRows: 10, maxRows: 12 }}
                            onChange={(e) => parseTextToJsonValue(e.target.value)} />
                        <Typography type="helper-text">
                            Enter data in JSON format
                        </Typography>
                    </div>
                    <div className="drawer-footer">
                        <Button
                            type='secondary'
                            onClick={e => onCancel()}
                            className="footer-button"
                            label="Cancel"
                            disabled={isSubmit}>
                        </Button>
                        <Button
                            type='primary'
                            onClick={e => saveWorkflow()}
                            className="footer-button"
                            label={isSubmit ? "Saving Changes..." : "Run Workflow"}
                            disabled={isSubmit}>
                        </Button>
                    </div>
            </div>
            )
        },
    ];

    const onSelectChange = () => {
        setSelected(prev => !prev);
    };

    const workflowValueChangeHandler = (key, value) => {
    };

    return <Tabs disabled={isSubmit} items={runWorkflowTabs} defaultActiveKey="1" onChange={activeKey => setSelectedTab(activeKey === 2 ? 'json' : 'form')} />
};

export default RunWorkflowForm;
