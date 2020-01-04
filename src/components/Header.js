import React from 'react';
import { Modal, Button, } from 'antd';
import { WrappedContactForm } from './EnquireForm';

const { confirm } = Modal;


function showConfirm() {
    confirm({
        title: 'Do you Want to delete these items?',
        content: 'Some descriptions',
        onOk() {
            console.log('OK');
        },
        onCancel() {
            console.log('Cancel');
        },
        confirmLoading: "true",
        iconType: "smile",
        content: (
            <div>
                <WrappedContactForm/>
            </div>
        ),
    });
};

export default function Header() {
    return(
        <span>
            website development?
            <Button size="small" onClick={showConfirm} style={{margin: "1em"}}>enquire</Button>
        </span>
    );
};