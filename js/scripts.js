function baz() {
    console.log( "baz" );
    bar();
}

function bar() {
    console.log( "bar" );
    foo();
}

function foo() {
    console.log( "foo" );
    var el = document.getElementById('main');
    el.innerHTML = "Can't get enough";
}

baz();
