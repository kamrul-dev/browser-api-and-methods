/* 
https://reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml 

    Url description:
    ==================
    --hash: "#dangerouslysetinnerhtml"
    --host: "reactjs.org"
    --hostname: "reactjs.org"
    --href: "https://reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml"
    --origin: "https://reactjs.org"
    --pathname: "/docs/dom-elements.html"
    --port: ""
    --protocol: "https:"

    By using the location we access and set the new location in url
*/

// location.reload() : Used for reload/refresh the page.
const refreshPage = () =>{
    location.reload();
}

// location.assign() : Used for assign url destination.
const visitPH = () => {
    location.assign('https://web.programming-hero.com');
}

/* 
// location.href() : Used for set url destination.
const visitPH = () => {
    location.href('https://web.programming-hero.com');
} 
*/


/* 
// hash example
//location.hash() : Used to set hash (id) to go to that destination hash (id) matched .
const visitPH = () => {
    location.hash('#hydrate');
} 
*/

