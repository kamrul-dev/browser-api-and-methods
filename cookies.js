/* 


Data stored in a cookie is created by the server upon your connection. This data is labeled with an ID unique to you and your computer.

When the cookie is exchanged between your computer and the network server, the server reads the ID and knows what information to specifically serve to you.

Different types of cookies - Magic Cookies and HTTP Cookies
Magic Cookies
HTTP Cookies
Cookies generally function the same but have been applied to different use cases:

"Magic cookies" are an old computing term that refers to packets of information that are sent and received without changes. Commonly, this would be used for a login to computer database systems, such as a business internal network. This concept predates the modern “cookie” we use today.

HTTP cookies are a repurposed version of the “magic cookie” built for internet browsing. Web browser programmer Lou Montulli used the “magic cookie” as inspiration in 1994. He recreated this concept for browsers when he helped an online shopping store fix their overloaded servers.
*/

/* 
    --cookies has property such as name and value
    --document.cookie : see the cookie in browser console
    --document.cookie.split('; ') : see the cookie in array format.
    --document.cookie.split('; ').map(c => console.log(c)); see the name and value in string format.
    --document.cookie.split('; ').map(c => console.log(c.split('='))); separate name and value.
    --document.cookie.split('; ').find(c => c.includes('country')); find the specific property such "country = BD".


*/

// Demo function for explaining cookies
const getCookie = name => {
    const cookie = document.coookie;
    const allCookie = cookie.split('; ');
    const findCookie = allCookie.find(c => c.includes(name));
    if (findCookie) {
        'country=US'
        const cookiNameValue = findCookie.split('=');
        return cookiNameValue[1];
    }
}