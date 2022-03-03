/* 
BOM vs DOM, Browser API
    --Document works in the browser. Document is DOM.We can access like objects.
    --BOM = Browser Object Model. Overall things of browser.
    --DOM = Document Object Modle
*/

const name = 20;
const student = {
    name: 'Kamrul', friend: 'Babu', job: 'Web-Developer',
    makeProject: function () {
        console.log(name);
    }
};
student.makeProject('Ecommerce Website');
// document.getElementById('name');
