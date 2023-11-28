function foo(){
    setTimeout(() => {
        foo();
    }, 0)
}