const Title = 'For-loops';

const Output = () => {

    let arr = [1, 2, undefined, 4, null, 7];

    arr['text'] = 'text as key...';

    arr[7] = 'generator of empty indexes...';

    let output = [];
    output.push('for(let i = 0; i < arr.length; i++)');
    for(let i = 0; i < arr.length; i++) {
        output.push(`   [${i}] ${arr[i]}`);
    }

    output.push('---');

    output.push('for(let i in arr)');
    for(let i in arr) {
        output.push(`   [${i}] ${arr[i]}`);
    }

    output.push('---');
    
    output.push('for(let value of arr)');
    for(let value of arr) {
        output.push(`   ${value}`);
    }

    output.push('---');
    
    output.push('arr.forEach((value, i) => {...})');
    arr.forEach((value, i) => {
        output.push(`   [${i}] ${value}`);
    });

    output.push('---');
    
    output.push('arr.map((value, i) => {...})');
    output.push(...arr.map((value, i) => `   [${i}] ${value}`));

    return output;
};


const ForLoops = {Title, Output};
export default ForLoops;