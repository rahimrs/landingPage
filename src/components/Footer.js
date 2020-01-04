import React from 'react';
import { Row, Col, Icon } from 'antd';
const icon = {
    "fontSize": "1.5rem",
    "cursor": "pointer",
};
export default function Footer() {
    return(
        <Row type="flex" justify="center" style={{ height: "4em", }}>
            <Col span={2}><Icon type="instagram" style={icon}/></Col>
            <Col span={2}><Icon type="github" style={icon}/></Col>
            <Col span={2}><Icon type="gitlab" style={icon}/></Col>
            <Col span={2}><Icon type="dribbble" style={icon}/></Col>
        </Row>
    );
};