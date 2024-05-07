import React from "react";

interface MyComponentProps {
  home: string;
  contact: string;
  about: string;
}

const MyComponent: React.FC<MyComponentProps> = (props) => {
  return (
    <div className="text-red-700 bg-yellow-300 w-full flex align-center justify-center text-center shadow-2xl p-2.5 text-2xl">
      
      <ul className="flex gap-10 ">
        <li className="bg-yellow-300 hover:bg-sky-700 hover:text-white hover:p-0.5">
            <a href="home">{props.home}</a>
        </li>
      
        <li className="bg-yellow-300 hover:bg-sky-700 hover:text-white hover:p-0.5">
            <a href="contact">{props.contact}</a>
        </li>
      
        <li className="bg-yellow-300 hover:bg-sky-700 hover:text-white hover:p-0.5">
            <a href="about">{props.about}</a>
        </li>
      </ul>
      {/* <p className="mr-5 text-2xl text-center">{props.home}</p>
      <p className="mr-5 text-2xl text-center">{props.game}</p>
      <p className="text-2xl text-center">{props.about}</p> */}
    </div>
  );
};

const Navbar: React.FC = () => {
  return (
    <div className="mr-10 w-full flex align-center justify-center text-center">
      <MyComponent home="Home" contact="Contact" about="About" />
    </div>
  );
};

export default Navbar;