import React, { useState } from "react";
import { Sidebar, Menu, Header, Accordion } from "semantic-ui-react";

function SidebarComponent({ activeMenu, setActiveMenu }) {
    const [activeSection, setActiveSection] = useState(undefined);
    const handleMenuClick = (_, { name }) => {
        setActiveSection(undefined);
        setActiveMenu(name);
    };

    const handleAccordionClick = (_, { index }) => {
        setActiveSection(activeSection === index ? undefined : index);
    };

    return (
        <Sidebar
            as={Menu}
            animation="overlay"
            icon="labeled"
            inverted
            vertical
            visible
            style={style.width}
        >
            <Menu.Item style={style.sidebar}>
                <Menu.Header>
                    <h3>Metrics</h3>
                </Menu.Header>
                <Accordion>
                    <Menu.Menu>
                        <Menu.Item
                            name='application'
                            onClick={handleMenuClick}
                        >
                            <Header as={"h4"} color={activeMenu === 'application' ? "yellow" : "grey"}>
                                Application
                            </Header>
                        </Menu.Item>
                    </Menu.Menu>
                    <Menu.Menu>
                        <Menu.Item
                        name="consensus"
                        onClick={handleMenuClick}
                    >
                        <Header as={"h4"} color={activeMenu === 'consensus' ? "yellow" : "grey"}>
                            Consensus
                        </Header>
                    </Menu.Item>
                    </Menu.Menu>
                    <Menu.Menu>
                        <Menu.Item
                            name='network'
                            onClick={handleMenuClick}
                        >
                            <Header as={"h4"} color={activeMenu === 'network' ? "yellow" : "grey"}>
                                Network
                            </Header>
                        </Menu.Item>
                    </Menu.Menu>
                    <Accordion.Title
                        active={activeSection === 1}
                        index={1}
                        onClick={handleAccordionClick}
                    >
                        <Header as={"h4"} color={activeSection === 1 ? "yellow" : "grey"}>
                            Hardware/Infrastructure
                        </Header>
                    </Accordion.Title>
                    <Accordion.Content
                        active={activeSection === 1}
                        style={style.contentBackground}
                    >
                        <Menu.Menu>
                            <Menu.Item
                                active={activeMenu === "os"}
                                name="os"
                                onClick={handleMenuClick}
                            >
                                <h5>OS</h5>
                            </Menu.Item>
                            <Menu.Item
                                active={activeMenu === "clients"}
                                name="clients"
                                onClick={handleMenuClick}
                            >
                                <h5>Clients</h5>
                            </Menu.Item>
                            <Menu.Item
                                active={activeMenu === "clientType"}
                                name="clientType"
                                onClick={handleMenuClick}
                            >
                                <h5>Client Type</h5>
                            </Menu.Item>
                        </Menu.Menu>
                    </Accordion.Content>
                </Accordion>
            </Menu.Item >
            <Menu.Item>
                <Menu.Header>
                    <h3>Cryptocurrencies</h3>
                </Menu.Header>
                <Menu.Menu>
                    <Menu.Item
                        active={activeMenu === "bitcoin"}
                        style={activeMenu === "bitcoin" ? style.color : { color: "grey" }}
                        name="bitcoin"
                        onClick={handleMenuClick}
                    >
                        <h5>Bitcoin</h5>
                    </Menu.Item>
                    <Menu.Item
                        active={activeMenu === "ethereum"}
                        style={activeMenu === "ethereum" ? style.color : { color: "grey" }}
                        name="ethereum"
                        onClick={handleMenuClick}
                    >
                        <h5>Ethereum</h5>
                    </Menu.Item>
                    <Menu.Item
                        active={activeMenu === "solana"}
                        style={activeMenu === "solana" ? style.color : { color: "grey" }}
                        name="solana"
                        onClick={handleMenuClick}
                    >
                        <h5>Solana</h5>
                    </Menu.Item>
                    <Menu.Item
                        active={activeMenu === "binance"}
                        style={activeMenu === "binance" ? style.color : { color: "grey" }}
                        name="binance"
                        onClick={handleMenuClick}
                    >
                        <h5>Binance</h5>
                    </Menu.Item>
                </Menu.Menu>
            </Menu.Item>
        </Sidebar >
    );
}

const style = {
    sidebar: {
        marginTop: "40px",
        padding: 0,
    },
    width: {
        width: "200px",
    },
    icon: {
        textAlign: "end",
    },
    contentBackground: {
        backgroundColor: "#75767550"
    }
}

export default SidebarComponent;
