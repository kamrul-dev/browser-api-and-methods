console.log('I am here');
// alert('Mom is coming !!!');

// alert() : shows an alert message to the user. If the user agrees then press ok.
const momComing = () => {
    alert('Mom is coming. Open the book.');
}

// confirm() : Ask yes no Question to the user for confirmation. If the user agrees then he will press ok/yes, if not agree press cancel.
const askPicnic = () => {
    const response = confirm('Are you going to picnic?');
    console.log(response);
    if (response === true) {
        console.log('Send Money in our bkash');
    }
    else {
        console.log('Ok ! See you next time');
    }
}

// prompt() : Takes information from the user 
const askName = () => {
    const name = prompt('What is your name?');
    if (name) {
        console.log(name);
    }
}