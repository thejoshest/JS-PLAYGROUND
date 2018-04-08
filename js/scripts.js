
function foo() {
    var el = document.getElementById('main');
    el.innerHTML = "Can't get enough";
}

foo();

var favorites = {
    Guitar : "Gretsch",
    Person : "Brooke",
    Game : "Overwatch",
    Food : "Burgers"   
}

Object.defineProperty(favorites, Symbol.iterator, {
    enumerable:false,
    writable:false,
    configurable:true,
    value: funtion(){
        var o = this,
          idx = 0,
           ks = Object.keys(0);
        return {
            next: function() {
                return {    
                    value:o[ks[idx++]],
                    done: (idx > ks.length)
                };
            }
        };
    }
});
for (var v of favorites) {
    console.log(v);
}
