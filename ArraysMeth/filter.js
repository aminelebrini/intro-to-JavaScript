let age = [12,42,32,2,18,9];

function between(a){
    if(a > 12 && a <= 45)
    {
        return a;
    }
}

console.log(age.filter(between));