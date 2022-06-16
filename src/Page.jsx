export const Page = ({title='...', outputCallback=()=>{return '...'}}) => {

    const outputStyle = {
        'marginRight': 'auto',
        'marginLeft': 'auto',
        'marginTop': '80px',
        'width': '60%',
        'fontFamily': 'Helvetica',
        'height': '100%'
    };

    const outputHeaderStyle = {
        'fontSize': '40px'
    };

    const outputParagraphStyle = {
        'fontSize': '30px',
        'lineHeight': '5px',
        'whiteSpace': 'pre'
    };

    return (
        <div style={outputStyle}>
            <h1 style={outputHeaderStyle}>{title}</h1>
            {outputCallback().map((output, i) => <p key={i} style={outputParagraphStyle}>{output}</p>)}
        </div>
    );
};