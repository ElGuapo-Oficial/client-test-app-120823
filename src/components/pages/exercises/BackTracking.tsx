import CodeSnippet from "../../CodeSnippet";
import { sudoku, nqueens, targetSum } from "../../../codeSnippets/backTracking";

const BackTracking = () => {

    return (
        <>
            <div>BackTracking</div>
            <CodeSnippet title={"TargetSum"} code={targetSum} language="javascript" width="750px" />
            <CodeSnippet title={"Sudoku"} code={sudoku} language="javascript" />
            <CodeSnippet title={"NQueens"} code={nqueens} language="javascript" />
        </>
    );
}

export default BackTracking;