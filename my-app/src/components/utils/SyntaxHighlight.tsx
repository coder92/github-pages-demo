import PropTypes from 'prop-types';

// third-party
import SyntaxHighlighter from 'react-syntax-highlighter';

// ==============================|| CODE HIGHLIGHTER ||============================== //

export default function SyntaxHighlight({ children, ...others }) {
  return (
    <SyntaxHighlighter language="javacript" showLineNumbers {...others}>
      {children}
    </SyntaxHighlighter>
  );
}

SyntaxHighlight.propTypes = {
  children: PropTypes.node
};
