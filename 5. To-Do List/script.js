let container3 = document.querySelector('.container3')
let inputtext = document.querySelector('#inputtext')
let addbtn = document.querySelector('#addbtn')

let list = [

];

function renderlist(arr) {
    container3.innerHTML = ''
    list.map(obj => {
        let divelem = document.createElement('div');
        divelem.className = 'list'
        divelem.innerHTML = `
            <p>${obj.text}</p>
`
        let buttonelem = document.createElement('button');
        buttonelem.innerText = '❌';
        divelem.appendChild(buttonelem);
        buttonelem.addEventListener('click', () => {
            handleremovelist(obj.id)
        })
        container3.append(divelem);
    })

}
renderlist(list);

function handleaddlist() {
    let text = inputtext.value.trim(); // remove spaces at start/end
    if (text === '') return; // do nothing if empty

    let obj = {
        id: Date.now(),
        text: text
    };

    list.unshift(obj);
    renderlist(list);
    inputtext.value = '';
}

function handleremovelist(id) {
    let filteredlist = list.filter(obj => {
        return obj.id !== id
    })
    list = filteredlist
    renderlist(list)
}
addbtn.addEventListener('click', handleaddlist)
