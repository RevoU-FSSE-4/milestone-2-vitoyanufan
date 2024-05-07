import React from "react";

interface MyFooterProps {
  myFooter: string;

}

const MyFooter: React.FC<MyFooterProps> = (props) => {
  return (
    <div className="bg-white w-full flex align-center justify-center text-center">
      <p>{props.myFooter}</p>
      
    </div>
  );
};

const Footerr: React.FC = () => {
  return (
    <div className="mr-10 w-full flex align-center justify-center text-center">
      <MyFooter myFooter='copyright 2024' />
    </div>
  );
};

export default Footerr;