import { Menu } from "semantic-ui-react";

function Navigation({ activeMenu, setActiveMenu }) {

    const handleMenuClick = (_, { name }) => {
        setActiveMenu(name);
    }

    return (
        <>
            <Menu>
                <Menu.Menu position="right">
                    <Menu.Item
                        name="paper"
                        active={activeMenu === "paper"}
                        onClick={handleMenuClick} />
                    <Menu.Item
                        name="about"
                        active={activeMenu === "about"}
                        onClick={handleMenuClick} />
                </Menu.Menu>
            </Menu>
        </>
    );
}

export default Navigation;
