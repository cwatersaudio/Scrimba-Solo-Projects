import React from "react";

export default function Menu (props) {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
      setOpen(!open);
    };

    const handleMenuItem = () => { 
        // send name to updateScheme in App
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
                trigger={<button onClick={handleOpen}>Dropdown</button>}
                menu={[
                    <button onClick={handleMenuItem}>Menu 1</button>,
                    <button onClick={handleMenuItem}>Menu 2</button>,
                ]}
            />
      </div>


    )
}


// , , monochrome-light, analogic, complement, analogic-complement, triad and quad.




