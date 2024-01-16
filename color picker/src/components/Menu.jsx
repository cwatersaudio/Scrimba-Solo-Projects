import React from "react";

export default function Menu (props) {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
      setOpen(!open);
    };

    const handleMenuItem = (event) => { 
        console.log(event.target.value)
        props.updateColorMode(event.target.value)
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
                trigger={<button onClick={handleOpen}>{props.colorMode}</button>}
                menu={[
                    <button onClick={handleMenuItem} name="monochrome" value="monochrome">Monochrome</button>,
                    <button onClick={handleMenuItem} name="monochrome-light" value="monochrome-light">Monochrome-Light</button>,
                    <button onClick={handleMenuItem} name="analogic" value="analogic">Analogic</button>,
                    <button onClick={handleMenuItem} name="complement" value="complement">Complement</button>,
                    <button onClick={handleMenuItem} name="analogic-complement" value="analogic-complement">Analogic-Complement</button>,
                    <button onClick={handleMenuItem} name="triad" value="triad">Triad</button>,
                    <button onClick={handleMenuItem} name="quad" value="quad">Quad</button>
                ]}
            />
      </div>


    )
}


// , , monochrome-light, analogic, complement, analogic-complement, triad and quad.




