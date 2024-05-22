import React from 'react';
import HtmlToReact from 'html-to-react';

// Initialize the parser
const htmlToReactParser = new HtmlToReact.Parser();

const JSONToHTML = ({ Content }) => {
  // Parse the HTML string into React elements
  const reactElement = htmlToReactParser.parse(Content);

  return (
    <div>
      {reactElement}
    </div>
  );
};

export default JSONToHTML;
