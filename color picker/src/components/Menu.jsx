import React from "react";

export default function Menu (props) {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
      setOpen(!open);
    };

    const handleMenuItem = (event) => { 
        console.log(event.target.value)
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
                <li key={index} className="menu-item">{menuItem}</li>
            ))}
            </ul>
        ) : null}
        </div>
    );
    };

    return (

        <div>
            <Dropdown
                open={open}
                trigger={<div className="trigger--container" onClick={handleOpen}><button  className="menu--trigger">{props.colorMode}</button><img src="./images/select-menu-selector.svg"></img></div>}
                menu={[
                    <button onClick={handleMenuItem} name="colorMode" value="monochrome">Monochrome</button>,
                    <button onClick={handleMenuItem} name="colorMode" value="monochrome-dark">Monochrome-Dark</button>,
                    <button onClick={handleMenuItem} name="colorMode" value="monochrome-light">Monochrome-Light</button>,
                    <button onClick={handleMenuItem} name="colorMode" value="analogic">Analogic</button>,
                    <button onClick={handleMenuItem} name="colorMode" value="complement">Complement</button>,
                    <button onClick={handleMenuItem} name="colorMode" value="analogic-complement">Analogic-Complement</button>,
                    <button onClick={handleMenuItem} name="colorMode" value="triad">Triad</button>,
                    <button onClick={handleMenuItem} name="colorMode" value="quad">Quad</button>
                ]}
            />
      </div>


    )
}


// , , monochrome-light, analogic, complement, analogic-complement, triad and quad.




