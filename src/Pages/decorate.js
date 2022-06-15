const Title = 'Decorating';

const Output = () => {
    
    let person = function() {return 'this is a person'};

    person.FirstName = "Joakim";
    person.LastName = "Ernhagen";

    person.Pocket = ['phone', 'wallet'];

    return [person.FirstName, person['LastName'], person.Pocket.map((thing, i) => `[${i}: '${thing}'] `)];
};


const Decorate = {Title, Output};
export default Decorate;