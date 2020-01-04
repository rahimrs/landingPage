import React from "react";
import { Layout } from 'antd';
import Foot from './Footer';
import Cont from './Content';
import Head from './Header';

const { Header, Footer, Content } = Layout;

export default function Main() {
    return(
        <Layout>
            <div style={{height: "4em"}}>
                <Head/>
            </div>
            <Content>
                <Cont/>
            </Content>
            <Footer>
                <Foot/>
            </Footer>
        </Layout> 
    );
};