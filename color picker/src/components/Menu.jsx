import React from "react";
import MenuItem from "./MenuItem";

export default function Menu(props) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(!open);
    };

    const handleMenuItem = (event) => {
        props.handleChange(event)
        setOpen(false);
    };

    const Dropdown = ({ open, trigger, menu }) => {
        return (
            <div className="dropdown">
                {trigger}
                {open ? (
                    <ul className="menu">
                        {menu.map((menuItem, index) => (
                            <li key={index}>{menuItem}</li>
                        ))}
                    </ul>
                ) : null}
            </div>
        );
    };
    const modeOptions = [
        { name: "Monochrome" },
        { name: "Monochrome-Dark" },
        { name: "Monochrome-Light" },
        { name: "Analogic" },
        { name: "Complement" },
        { name: "Analogic-Complement" },
        { name: "Triad" },
        { name: "Quad" }

    ]


    const ColorMenu = modeOptions.map((item, index) => {
        return (
            <MenuItem
                handleClick={handleMenuItem}
                className="menu--item"
                title={item.name}
                name="colorMode"
                value={item.name}
                key={index}
            />
        )
    })


    return (

        <div>
            <Dropdown
                open={open}
                trigger={<div className="trigger--container" onClick={handleOpen}><button className="menu--trigger">{props.colors.colorMode}</button><img src="./images/select-menu-selector.svg" id="triggerArrow" ></img></div>}
                menu={ColorMenu}
            />
        </div>


    )
}






