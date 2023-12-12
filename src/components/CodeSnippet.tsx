import React, { useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css'; // or other theme

type CodeSnippetProps = {
    title?: string;
    code: string;
    language: string;
    width?: string;
}

const CodeSnippetA: React.FC<CodeSnippetProps> = ({ code, language }) => {
    useEffect(() => {
        Prism.highlightAll();
    }, [code, language]);

    return (
        <pre>
            <code className={`language-${language}`}>
                { code }
            </code>
        </pre>
  );
};

const CodeSnippet: React.FC<CodeSnippetProps> = ({ title, code, language, width }) => {
    return (
        <div style={{fontSize: "13px", width: `${width || "450px"}`}}>
            { title && <div style={{backgroundColor: "red"}}>{title}</div> }
            <CodeSnippetA code={code} language={language} />
        </div>
    )
}

export default CodeSnippet;