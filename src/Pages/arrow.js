const Title = 'Arrow function vs Non-arrow function';

const Output = () => {

    class ClassWithCallback {
        constructor(words) {
            this.words = words;
        }

        callbackA = function() {
            return this.words;
        }

        callbackB = () => {
            return this.words;
        }
    }

    let instance = new ClassWithCallback("the bird is the word");

    let output = [];
    output.push(instance.callbackA());
    output.push(instance.callbackB());

    try {
        const callback = instance.callbackA;

        output.push(callback());
    }
    catch (error) {
        output.push('Callback without arrow...');
    }

    try {
        const callback = instance.callbackB;

        output.push(callback());
    }
    catch (error) {
        output.push('Callback with arrow...');
    }

    return output;
};


const Arrow = {Title, Output};
export default Arrow;