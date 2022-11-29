const keyboardkeys = [
    {
    key: '113',
    title: 'q',
    },
    {
    key: '119',
    title: 'w',
    },
    {
    key: '101',
    title: 'e',
    },
    {
    key: '114',
    title: 'r',
    },
    {
    key: '116',
    title: 't',
    },
    {
    key: '121',
    title: 'y',
     },
    {
    key: '117',
    title: 'u',
     },
    {
    key: '105',
    title: 'i',
     },
    {
    key: '111',
    title: 'o',
     },
    {
    key: '112',
    title: 'p',
     },
    {
    key: '91',
    title: '[',
     },
    {
    key: '93',
    title: ']',
     },
    {
    key: '97',
    title: 'a',
     },
    {
    key: '115',
    title: 's',
     },
    {
    key: '100',
    title: 'd',
     },
    {
    key: '102',
    title: 'f',
     },
    {
    key: '103',
    title: 'g',
     },
    {
    key: '104',
    title: 'h',
     },
    {
    key: '106',
    title: 'j',
     },
    {
    key: '107',
    title: 'k',
     },
    {
    key: '108',
    title: 'l',
     },
    {
    key: '59',
    title: ';',
     },
     {
        key: '8',
        title: '<-----',
    },
    {
    key: '13',
    title: 'Enter',
     },
    {
    key: '122',
    title: 'z',
     },
    {
    key: '120',
    title: 'x',
     },
    {
    key: '99',
    title: 'c',
     },
    {
    key: '118',
    title: 'v',
     },
    {
    key: '98',
    title: 'b',
     },
    {
    key: '110',
    title: 'n',
     },
    {
    key: '109',
    title: 'm',
     },
    {
    key: '44',
    title: ',',
     },
    {
    key: '46',
    title: '.',
     },
    {
    key: '47',
    title: '/',
    },
    {
    key: '32',
    title: 'Space',
    },


];

let printBox = document.createElement('div');
printBox.setAttribute('class', 'printbox');
let wrapper = document.createElement('div');
let pprint = document.createElement('p');
wrapper.setAttribute('class', 'wrapper');
printBox.append(pprint);


document.body.append(printBox, wrapper);

createButtons(keyboardkeys);
function createButtons(keyboardkeys){
    for (let i = 0; i < keyboardkeys.length; i++) {
        let button = document.createElement('button');
        button.setAttribute('class', 'kbutton');
        button.innerText = keyboardkeys[i].title;
        button.onclick = () =>{
            
            if (keyboardkeys[i].key === '32'){
                pprint.innerHTML += '&nbsp';
                
            }
             else if (keyboardkeys[i].key === '13'){
                pprint.innerText += '\n';
             }
             else if (keyboardkeys[i].key === '8')
             {
                pprint.innerText = pprint.innerText.slice(0, -1);
             }
             else {
                pprint.innerText += keyboardkeys[i].title;
             }
        }
        if (keyboardkeys[i].key === '32'){
            button.style.width = '100px';

        }
        wrapper.appendChild(button);
        
    }
}