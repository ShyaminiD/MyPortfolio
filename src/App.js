import "./App.css";
import { Layout, Menu } from "antd";
import { GithubOutlined } from "@ant-design/icons";
import { Icon } from "antd";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import About from "./About";
import Skills from "./Skills";
import Work from "./Work";

const { Header, Footer, Content } = Layout;

const contentStyle = {
  textAlign: "center",
  minHeight: 120,
  overflow: "auto",
  color: "black",
  backgroundColor: "#0ad69f",
};

const layoutStyle = {
  flex: 1,
};

const footerStyle = {
  maxHeight: "65px",
  alignItems: "center",
  display: 'flex',
  justifyContent: "center",
}
const menuItems = ["About", "Work", "Skills"];
function App() {
  return (
    <Router>
      <div className="App">
        <Layout style={layoutStyle}>
          <Header>
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={["0"]}
              style={{
                flex: 1,
                minWidth: 0,
              }}
            >
              {menuItems.map((item, index) => (
                <Menu.Item key={index}>
                  {" "}
                  <Link to={`/${item.toLowerCase()}`}>{item}</Link>
                </Menu.Item>
              ))}
            </Menu>
          </Header>
          <Content style={contentStyle}>
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/about" element={<About />} />
              <Route path="/work" element={<Work />} />
              <Route path="/skills" element={<Skills />} />
            </Routes>
          </Content>
          <Footer style ={footerStyle}>
          <a href="https://linkedin.com/in/shyaminidoddi" target="_blank">
            <img
             
              src="/linkedin_icon.png"
              alt="LinkedIn Icon"
              width="32px"
              height="32px"
              />
            </a>
            <a href="https://github.com/ShyaminiD" target="_blank">
            <img
              src="/github_square_icon.png"
              alt="GitHub Icon"
              width="32px"
              height="32px"
            />
           </a>
          </Footer>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
