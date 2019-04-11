import * as Yup from 'yup';

const playerFinderSchema = () => Yup.object().shape({
    playerName: Yup.string()
        .matches(/^[a-zA-Z\s]*$/, 'Only Letters!'),
    position: null,
    age: Yup.number()
        .min(18, 'Too young!')
        .max(40, 'Too old!')
        
});

export default playerFinderSchema;