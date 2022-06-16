export const Page = ({title='...', outputCallback=()=>{return '...'}}) => {

    const outputStyle = {
        'margin-right': 'auto',
        'margin-left': 'auto',
        'margin-top': '80px',
        'width': '60%',
        'font-family': 'Helvetica',
        'height': '100%'
    };

    const outputHeaderStyle = {
        'font-size': '80px'
    };

    const outputParagraphStyle = {
        'font-size': '30px',
        'line-height': '5px',
        'white-space': 'pre'
    };

    return (
        <div style={outputStyle}>
            <h1 style={outputHeaderStyle}>{title}</h1>
            {outputCallback().map((output) => <p style={outputParagraphStyle}>{output}</p>)}
        </div>
    );
};