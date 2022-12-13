import { hasPrint } from './interfaceForClass';
import { Invoice, Payment } from './classImplementsInterface';

const documentOne: hasPrint = new Invoice('Vietnam milk', 'drink milk', 5000000);
const documentTwo: hasPrint = new Payment('Vietnam Airline', 'fly', 25000000);

const allDocuments: hasPrint[] = [];
allDocuments.push(documentOne);
allDocuments.push(documentTwo);

console.log(allDocuments);