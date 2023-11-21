import React from 'react';
import { Sidebar, Menu } from 'semantic-ui-react';

function SidebarComponent({ activeMenu, setActiveMenu }) {
    const handleItemClick = (_, { name }) => {
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
            width='thin'
        >
            <Menu.Item
                style={style.sidebar}
            >
                <Menu.Header>Data Metrics</Menu.Header>
                <Menu.Menu>
                    <Menu.Item active={activeMenu === "hashRate"} name="hashRate" onClick={handleItemClick}>Hash Rate</Menu.Item>
                    <Menu.Item active={activeMenu === "nodeDistribution"} name="nodeDistribution" onClick={handleItemClick}>Node Distribution</Menu.Item>
                    <Menu.Item active={activeMenu === "miningPools"} name="miningPools" onClick={handleItemClick}>Mining Pools</Menu.Item>
                    <Menu.Item active={activeMenu === "clients"} name="clients" onClick={handleItemClick}>Clients</Menu.Item>
                    <Menu.Item active={activeMenu === "governance"} name="governance" onClick={handleItemClick}>Governance</Menu.Item>
                </Menu.Menu>
            </Menu.Item>
            <Menu.Item>
                <Menu.Header>Cryptocurrencies</Menu.Header>
                <Menu.Menu>
                    <Menu.Item active={activeMenu === "bitcoin"} name="bitcoin" onClick={handleItemClick} >Bitcoin</Menu.Item>
                    <Menu.Item active={activeMenu === "ethereum"} name="ethereum" onClick={handleItemClick}>Ethereum</Menu.Item>
                    <Menu.Item active={activeMenu === "solana"} name="solana" onClick={handleItemClick}>Solana</Menu.Item>
                    <Menu.Item active={activeMenu === "binance"} name="binance" onClick={handleItemClick}>Binance</Menu.Item>
                </Menu.Menu>
            </Menu.Item>
        </Sidebar>
    );
};

const style = {
    sidebar: {
        marginTop: "40px"
    }
}

export default SidebarComponent;
