let init = 0;
        let res = 0;
        const add = document.querySelector('#add');
        const reset = document.querySelector('#reset');
        const minis = document.querySelector('#minis');
        document.getElementById('display').innerText = init;

        add.addEventListener('click', function click(){
            res += 1;
            document.getElementById('display').textContent = res;
        });
        reset.addEventListener('click', function reset(){
            res = 0;
            document.getElementById('display').textContent = res;
        });
        minis.addEventListener('click', function minis(){
            res -= 1;
            document.getElementById('display').textContent = res;
        });