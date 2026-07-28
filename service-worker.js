const CACHE_NAME="typing-job-pro-v9";


const FILES=[

"./",

"./index.html",

"./manifest.json",

"./offline.html"

];





self.addEventListener(
"install",
event=>{


event.waitUntil(

caches.open(CACHE_NAME)

.then(cache=>{

return cache.addAll(FILES);

})

);


});







self.addEventListener(
"activate",
event=>{


event.waitUntil(

self.clients.claim()

);


});







self.addEventListener(
"fetch",
event=>{


event.respondWith(


caches.match(event.request)

.then(response=>{


return response ||

fetch(event.request)

.catch(()=>{

return caches.match(
"./offline.html"
);

});


})


);



});