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
            <div style={{fontSize: "14px", width: "50%", border: "1px solid white"}}>
                <CodeSnippet code={code} language="javascript" />
            </div>
        </>
    );
}

export default BackTracking;