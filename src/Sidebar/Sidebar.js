import React from 'react';
import { Sidebar, Menu } from 'semantic-ui-react';

function SidebarComponent({ activeMenu, setActiveMenu }) {
    const handleMenuClick = (_, { name }) => {
        setActiveMenu(name);
    }

    return (
        <Sidebar
            as={Menu}
            animation='overlay'
            icon='labeled'
            inverted
            vertical
            visible
            style={style.width}
        >
            <Menu.Item
                style={style.sidebar}
            >
                <Menu.Header>
                    <h3>Data Metrics</h3>
                </Menu.Header>
                <Menu.Menu>
                    <Menu.Item
                        active={activeMenu === "hashRate"}
                        name="hashRate"
                        onClick={handleMenuClick}><h5>
                            Hash Rate</h5>
                    </Menu.Item>
                    <Menu.Item
                        active={activeMenu === "nodeDistribution"}
                        name="nodeDistribution"
                        onClick={handleMenuClick}>
                        <h5>Node Distribution</h5>
                    </Menu.Item>
                    <Menu.Item
                        active={activeMenu === "miningPools"}
                        name="miningPools" onClick={handleMenuClick}>
                        <h5>Mining Pools</h5>
                    </Menu.Item>
                    <Menu.Item
                        active={activeMenu === "clients"}
                        name="clients"
                        onClick={handleMenuClick}>
                        <h5>Clients</h5>
                    </Menu.Item>
                    <Menu.Item
                        active={activeMenu === "governance"}
                        name="governance"
                        onClick={handleMenuClick}>
                        <h5>Governance</h5>
                    </Menu.Item>
                </Menu.Menu>
            </Menu.Item>
            <Menu.Item>
                <Menu.Header>
                    <h3>Cryptocurrencies</h3>
                </Menu.Header>
                <Menu.Menu>
                    <Menu.Item
                        active={activeMenu === "bitcoin"}
                        name="bitcoin"
                        onClick={handleMenuClick}>
                        <h5>Bitcoin</h5>
                    </Menu.Item>
                    <Menu.Item
                        active={activeMenu === "ethereum"}
                        name="ethereum"
                        onClick={handleMenuClick}>
                        <h5>Ethereum</h5>
                    </Menu.Item>
                    <Menu.Item
                        active={activeMenu === "solana"}
                        name="solana"
                        onClick={handleMenuClick}>
                        <h5>Solana</h5>
                    </Menu.Item>
                    <Menu.Item
                        active={activeMenu === "binance"}
                        name="binance"
                        onClick={handleMenuClick}>
                        <h5>Binance</h5>
                    </Menu.Item>
                </Menu.Menu>
            </Menu.Item>
        </Sidebar>
    );
};

const style = {
    sidebar: {
        marginTop: "40px"
    },
    width: {
        width: "200px"
    }
}

export default SidebarComponent;
