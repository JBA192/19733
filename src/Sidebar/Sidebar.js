import React, { useState } from "react";
import { Sidebar, Menu, Header, Accordion } from "semantic-ui-react";

function SidebarComponent({ activeMenu, setActiveMenu }) {
    const [activeSection, setActiveSection] = useState(undefined);
    const handleMenuClick = (_, { name }) => {
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
                    <Accordion.Title
                        active={activeSection === 0}
                        index={0}
                        onClick={handleAccordionClick}
                    >
                        <Header as={"h4"} color={activeSection === 0 ? "yellow" : "grey"}>
                            Application
                        </Header>
                    </Accordion.Title>
                    <Accordion.Content
                        active={activeSection === 0}
                        style={style.contentBackground}
                    >
                        <Menu.Menu>
                            <Menu.Item
                                active={activeMenu === "exchangeShare"}
                                name="exchangeShare"
                                onClick={handleMenuClick}
                            >
                                <h5>Exchange Trading Share</h5>
                            </Menu.Item>
                            <Menu.Item
                                active={activeMenu === "developers"}
                                name="developers"
                                onClick={handleMenuClick}
                            >
                                <h5>No. of Developers</h5>
                            </Menu.Item>
                        </Menu.Menu>
                    </Accordion.Content>
                    <Accordion.Title
                        active={activeSection === 1}
                        index={1}
                        onClick={handleAccordionClick}
                    >
                        <Header as={"h4"} color={activeSection === 1 ? "yellow" : "grey"}>
                            Consensus
                        </Header>
                    </Accordion.Title>
                    <Accordion.Content
                        active={activeSection === 1}
                        style={style.contentBackground}
                    >
                        <Menu.Menu>
                            <Menu.Item
                                active={activeMenu === "nakamoto"}
                                name="nakamoto"
                                onClick={handleMenuClick}
                            >
                                <h5>Nakamoto Coefficient</h5>
                            </Menu.Item>
                            <Menu.Item
                                active={activeMenu === "uniqueMiners"}
                                name="uniqueMiners"
                                onClick={handleMenuClick}
                            >
                                <h5>No. of Unique Miners</h5>
                            </Menu.Item>
                            <Menu.Item
                                active={activeMenu === "miningPools"}
                                name="miningPools"
                                onClick={handleMenuClick}
                            >
                                <h5>Mining Pool Concentration</h5>
                            </Menu.Item>
                        </Menu.Menu>
                    </Accordion.Content>
                    <Accordion.Title
                        active={activeSection === 2}
                        index={2}
                        onClick={handleAccordionClick}
                    >
                        <Header as={"h4"} color={activeSection === 2 ? "yellow" : "grey"}>
                            Network
                        </Header>
                    </Accordion.Title>
                    <Accordion.Content
                        active={activeSection === 2}
                        style={style.contentBackground}
                    >
                        <Menu.Menu>
                            <Menu.Item
                                active={activeMenu === "nodeDistribution"}
                                name="nodeDistribution"
                                onClick={handleMenuClick}
                            >
                                <h5>Node Distribution</h5>
                            </Menu.Item>
                        </Menu.Menu>
                    </Accordion.Content>
                    <Accordion.Title
                        active={activeSection === 3}
                        index={3}
                        onClick={handleAccordionClick}
                    >
                        <Header as={"h4"} color={activeSection === 3 ? "yellow" : "grey"}>
                            Hardware/Infrastructure
                        </Header>
                    </Accordion.Title>
                    <Accordion.Content
                        active={activeSection === 3}
                        style={style.contentBackground}
                    >
                        <Menu.Menu>
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
            </Menu.Item>
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
        </Sidebar>
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
