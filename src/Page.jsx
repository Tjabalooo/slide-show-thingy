export const Page = ({title='...', outputCallback=()=>{return '...'}}) => {

    const outputStyle = {
        'margin-right': 'auto',
        'margin-left': 'auto',
        'margin-top': '80px',
        width: '60%',
        'font-family': 'Helvetica'
    };

    const outputHeaderStyle = {
        'font-size': '80px'
    };

    const outputParagraphStyle = {
        'font-size': '50px'
    };

    return (
        <div style={outputStyle}>
            <h1 style={outputHeaderStyle}>{title}</h1>
            {outputCallback().map((output) => <p style={outputParagraphStyle}>{output}</p>)}
        </div>
    );
};