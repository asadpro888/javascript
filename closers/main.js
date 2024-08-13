function func1(){
    const age = 29;

    function func2(){
        console.log(age);
        
    }
    return func2
}

const result = func1()
result()