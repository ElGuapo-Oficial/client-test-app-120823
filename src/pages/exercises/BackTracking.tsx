import CodeSnippet from "../../components/CodeSnippet";
import { sudoku, nqueens } from "../../codeSnippets/backTracking";

const BackTracking = () => {

    return (
        <>
            <div>BackTracking</div>
            <div style={{fontSize: "13px", width: "450px"}}>
                <CodeSnippet code={sudoku} language="javascript" />
            </div>
            <div style={{fontSize: "13px", width: "450px"}}>
                <CodeSnippet code={nqueens} language="javascript" />
            </div>
        </>
    );
}

export default BackTracking;