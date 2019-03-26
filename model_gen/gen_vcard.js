var vCardsJS = require('vcards-js');

//create a new vCard
var vCard = vCardsJS();

//set properties
vCard.firstName = 'Leo';
vCard.lastName = 'Mehr';
vCard.organization = 'Stanford University';
// vCard.photo.attachFromUrl('https://avatars2.githubusercontent.com/u/5659221?v=3&s=460', 'JPEG');
vCard.cellPhone = '978-886-8031';
vCard.birthday = new Date('September 2, 1994');
vCard.url = 'https://leomehr.github.io';

//save to file
// vCard.saveToFile('./leo-mehr.vcf');

//get as formatted string
console.log(vCard.getFormattedString());
