import React, { useState } from 'react';
import { Modal as ModalComponent } from 'antd';
import './Modal.scss';

const Modal = ({
    children,
    title = "Basic Modal",
    content = "Some contents...",
    okText = "OK",
    cancelText = "Cancel",
    onOk,
    onCancel,
    okButtonProps,
    cancelButtonProps
}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
        if (onOk) {
            onOk();
        }
    };

    const handleCancel = () => {
        setIsModalOpen(false);
        if (onCancel) {
            onCancel();
        }
    };

    return (
        <>
            <div onClick={showModal}>
                {children}
            </div>
            <ModalComponent
                className="custom-modal" // Apply the custom class here
                title={title}
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                okText={okText}
                cancelText={cancelText}
                okButtonProps={okButtonProps}
                cancelButtonProps={cancelButtonProps}
            >
                <p>{content}</p>
            </ModalComponent>
        </>
    );
};

export default Modal;
