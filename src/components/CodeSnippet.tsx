import React, { useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css'; // or other theme

type CodeSnippetProps = {
    code: string;
    language: string;
}

const CodeSnippet: React.FC<CodeSnippetProps> = ({ code, language }) => {
    useEffect(() => {
        Prism.highlightAll();
    }, [code, language]);

    return (
        <pre>
            <code className={`language-${language}`}>
                {code}
            </code>
        </pre>
  );
};

export default CodeSnippet;