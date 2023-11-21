import { useState } from "react";
import { Menu } from "semantic-ui-react";

function Navigation() {

    const [activeItem, setActiveItem] = useState("");

    const handleItemClick = ({ name }) => {
        setActiveItem(name);
    }

    return (
        <>
            <Menu>
                <Menu.Menu position="right">
                    <Menu.Item
                        name="paper"
                        active={activeItem === "paper"}
                        onClick={handleItemClick} />
                    <Menu.Item
                        name="about"
                        active={activeItem === "about"}
                        onClick={handleItemClick} />
                </Menu.Menu>
            </Menu>
        </>
    );
}

export default Navigation;
