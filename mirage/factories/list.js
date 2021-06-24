import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
    name(i){
        return `name is ${i}`;
    },
    dob(i){
        return `01-0${i}-2004`;
    },
    address(){
        return `chennai - 11.`;
    },
    mobNumber(i){
        return `987654321${i}`;
    } 
});
