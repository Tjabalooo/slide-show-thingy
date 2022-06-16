const Title = 'Return values';

const Output = () => {

    const myFuncA = () => {};
    const myFuncB = () => 'some value';

    let output = [];

    output.push(`${myFuncA()}`);
    output.push(`${myFuncB()}`);

    return output;
};


const Returns = {Title, Output};
export default Returns;