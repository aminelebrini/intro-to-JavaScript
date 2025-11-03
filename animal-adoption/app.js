const previous = document.getElementById('previous');
const next = document.getElementById('next');
const like = document.getElementById('like');

let likedimg = [];
fetch('https://picsum.photos/v2/list').then(response=>{
    if(!response.ok)
    {
        throw new Error (`${response.status}`);
    }
    return response.json();
}).then(data=>{
    console.log(data);
    slide(data);
}).catch(()=>{
    console.log("error to fetching data");
})
function linkebtn(n)
{
    document.getElementById('likenbr').innerText = n;
}
function slide(data_cars)
{
    let i = 0;
    const display = document.getElementById('animal-image');
    display.src = data_cars[i].download_url;
    
    next.addEventListener('click', () => {
        i++;
        if (i >= data_cars.length) {
            i = 0;
        }
        display.src = data_cars[i].download_url;
    });
    let j = 0;

    like.addEventListener('click', () => {
        linkebtn(j);
        
        j++;
    });
    previous.addEventListener('click', () => {
        i--;
        if (i <= 0) {
            i = data_cars.length - 1;
        }
        display.src = data_cars[i].download_url;
        
    });
    
}
function linkebtn(count) {
    console.log("Nombre de likes :", count + 1);
    document.getElementById('likenbr').innerText = count + 1;
}