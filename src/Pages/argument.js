const Title = 'The argument object';

const Output = () => {

    const nonArrowFunc = function() {
        if (arguments[0] !== undefined) {
            return arguments[0];
        }
    };

    let output = [];

    output.push(nonArrowFunc('this parameter does not exist...'));

    return output;
};


const Argument = {Title, Output};
export default Argument;