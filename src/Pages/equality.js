const Title = '== vs ===';

const Output = () => {
    let example1 = `1 == 1 ........ ${1 == 1}`;
    let example2 = `1 == '1' ........ ${1 == '1'}`;
    let example3 = `1 === 1 ........ ${1 === 1}`;
    let example4 = `1 === '1' ........ ${1 === '1'}`;

    return [example1, example2, example3, example4];
};


const Equality = {Title, Output};
export default Equality;