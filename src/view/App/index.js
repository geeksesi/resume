import React from "react";
import "./index.css";
import { Layout } from "antd";

import Header from "../../components/Header/";
import Content from "../../components/Content/";
const App = () => {
    // const { Footer, Sider, Content } = Layout;
    return (
        <>
            <Layout className="App">
                <Header>Header</Header>
                <hr />
                <Content>Content</Content>
                {/* <Footer>Footer</Footer>  */}
            </Layout>
        </>
    );
};

export default App;
