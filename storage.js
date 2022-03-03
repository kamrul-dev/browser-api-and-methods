/* 
==> sessionStorage is similar to localStorage; the difference is that while data in  localStorage doesn't expire, data in sessionStorage is cleared when the page session ends.

    #Data stored as key and value

    --local storage : data stored permanent
    --session storage : data stored short time

#Access Data:
    --localStorage.getItem('yt.innertube::nextId'); : access value by key and output will be json result
    --const nextIDJSON = localStorage.getItem('yt.innertube::nextId'); : declare variable for store the json data for next operation
    --const nextId = JSON.parse(nextIDJSON); : json result converted in object

#Add Data:
    --const nextIdStringified = JSON.stringify(nextId);
    --nextId.user = 'kamrul hasan';

#SetItem in storage:
Before setting an  object in local storage and session storage we have to convert it into stringify using JSON.stringify().
    --const nextIdStringified = JSON.stringify(nextId);

summary :
   --set item in storage, after doing stringify
   --read item from storage, after doing parse
*/