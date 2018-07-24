self.addEventListener("install",function(e){
    console.log("Instal Event: e",e);
});
self.addEventListener("activate",function(e){
    console.log("Activate Event",e);
})