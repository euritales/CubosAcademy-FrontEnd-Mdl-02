const professoresBack = ['Guido', 'Guilherme', 'Junin', 'Leo']
const professoresFront = ['Daniel', 'Dina', 'Vitinho'];

const todosOsProfessores = [...professoresBack, ...professoresFront];
const [,,terceiroBack] = professoresBack;
const [primeiro, ...outrosProfessores] = professoresBack;
const [primeiroItem, ...outrosFront] = professoresFront;
const outraOrdem = [...outrosFront, primeiroItem ];

console.log('professores Cubos:', todosOsProfessores);
console.log('Terceiro Item Back-end:', terceiroBack);
console.log('Primeiro Item Back-end:', primeiro);
console.log('Outros professores:', outrosProfessores);
console.log('Outra Ordem Front-end, Dani atras:', outraOrdem);