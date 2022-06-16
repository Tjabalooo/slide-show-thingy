const Title = 'Decorating and Indexing';

const Output = () => {
    
    let person = function() {return 'this is a person'};

    person.FirstName = "Joakim";
    person.LastName = "Ernhagen";

    person.FullName = () => `${person.FirstName} ${person.LastName}`;

    return [
        `person.FirstName: ${person.FirstName}`, 
        '-',
        `person['FirstName']: ${person['FirstName']}`,
        '-',
        `person.FullName(): ${person.FullName()}`
    ];
};


const Decorate = {Title, Output};
export default Decorate;