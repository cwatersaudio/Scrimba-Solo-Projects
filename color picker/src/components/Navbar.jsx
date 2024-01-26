import Menu from "./Menu";

export default function Navbar(props) {


  return (
    <>
      <div className='nav--container'>
        <input
          type='color'
          id='colorPicker'
          name='seedColor'
          value={props.colors.seedColor}
          onChange={props.handleChange}
        />
        <Menu
          colors={props.colors}
          handleChange={props.handleChange}
        />


      </div>
    </>
  );
}
