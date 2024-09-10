import Button from "./shared/components/button/Button";
import CheckBox from "./shared/components/checkbox/CheckBox";
import Input from "./shared/components/inputs/text/Text";
import Modal from "./shared/components/modal/Modal";
import Select from "./shared/components/select/Select";
import ToggleSwitch from "./shared/components/toggle/ToggleSwitch";
import Typography from "./shared/components/typography/Typography";
import { PlusOutlined } from '@ant-design/icons';



function Test() {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <h1>Components</h1>

            <div>
                <Button type="destructive" label="Disabled" disabled={true} />
                <Button type="primary" label="Disabled" disabled={true} />
                <Button type="secondary" label="Disabled" disabled={true} />
                <Button type="tertiary" label="Disabled" disabled={true} />
            </div>

            <div>
                <Button type="destructive" label="destructive" />
                <Button type="primary" label="New Template" >
                    <PlusOutlined />
                </Button>
                <Button type="secondary" label="secondary" />
                <Button type="tertiary" label="tertiary" />
            </div>

            <div>
                <Typography type="page-header">This is the Page Header</Typography>
                <Typography type="section-header">This is the Section Header</Typography>
                <Typography type="sub-section-header">This is the Sub-Section Header</Typography>
                <Typography type="regular">This is Regular Text</Typography>
                <Typography type="action-text">This is Action Text</Typography>
                <Typography type="info-header">This is Info Header</Typography>
                <Typography type="btn-list-text">This is Button/List Text</Typography>
                <Typography type="helper-text">This is Helper Text</Typography>
                <Typography type="error-text">This is Error Text</Typography>
            </div>

            <div style={{display:"flex", gap:"4px"}}>
                <Input status="error" />
                <Input />
            </div>


            <Select
                options={[
                    { value: 'option1', label: 'Option 1' },
                    { value: 'option2', label: 'Option 2' }
                ]}
                disabled={false}
                defaultValue={{ value: '', label: 'Sort By' }}
            />

            <div style={{display:"flex", gap:"10px"}}>
                <ToggleSwitch defaultChecked={false} />
                <ToggleSwitch defaultChecked={true} size="small"/>

            </div>


            <div style={{ display: "flex", gap: "10px" }}>
                <CheckBox checked>Checkbox</CheckBox>
            </div>

            <Modal
                title="Delete Workflow?"
                content="Are you sure you want to delete this workflow? This action cannot be undone"
                okText="Delete"
                cancelText="Cancel"
                onOk={() => console.log("Deleted!")}
                onCancel={() => console.log("Cancelled!")}
            >
                <div style={{ cursor: 'pointer', color: 'blue' }}>
                    Click to open the modal
                </div>
            </Modal>
            
        </div>
    );
}

export default Test;
