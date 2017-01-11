import mainTemplate from './src/templates/main.html!text'
import rp from 'request-promise'
import config from '../config.json'
import swig from 'swig'


 export async function render() {
     var data = await rp({
         uri: config.docData,
         json: true
     });
         console.log(data);
     var html = swig.render(mainTemplate, {locals : data});
     return html;
 }