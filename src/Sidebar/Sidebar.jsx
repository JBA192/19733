import React from 'react';
import { Sidebar, Menu } from 'semantic-ui-react';

const SidebarComponent = () => {
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
            <Menu.Item>
                <Menu.Header>Data Metrics</Menu.Header>
                <Menu.Menu>
                    <Menu.Item>Hash Rate</Menu.Item>
                    <Menu.Item>Mining Pools</Menu.Item>
                    <Menu.Item>Clients</Menu.Item>
                    <Menu.Item>Governance</Menu.Item>
                </Menu.Menu>
            </Menu.Item>
            <Menu.Item>
                <Menu.Header>Crypto Currencies</Menu.Header>
                <Menu.Menu>
                    <Menu.Item>Bitcoin</Menu.Item>
                    <Menu.Item>Ethereum</Menu.Item>
                    <Menu.Item>Solana</Menu.Item>
                    <Menu.Item>Binance</Menu.Item>
                </Menu.Menu>
            </Menu.Item>
        </Sidebar>
    );
};

export default SidebarComponent;
