import React from 'react';
import { useNavigate, Link } from 'react-router-dom';


const Page = ({ title, content,image,hideback }) => {
  const navigate = useNavigate();
  return (
    <div className="page-container">
      <Link
        to={'..'}
        onClick={(e) => {
          e.preventDefault();
          navigate(-1);
        }} hidden={hideback}
      >Back</Link>
      <h2>{title}</h2>
    <div>{content}</div>
    </div>
  );
};
Page.defaultProps = {
    title: 'Default Title',
    content: 'Default Content'
}
export default Page;
