import CodeSnippet from "../../components/CodeSnippet";

const BackTracking = () => {
    const code: string = `
    function greet(name: string) {
        console.log("Hello, " + name + "!");
    }
    
    greet("World");`;

    return (
        <>
            <div>BackTracking</div>
            <CodeSnippet code={code} language="javascript" />
        </>
    );
}

export default BackTracking;