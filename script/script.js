let parag = document.createElement('p') ;
parag.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum non perspiciatis assumenda autem fugiat eveniet iure, temporibus cupiditate dicta a, possimus quod quaerat ab obcaecati enim fuga suscipit molestiae ut?";
parag.setAttribute('class', 'pvisible')
let button = document.createElement('button');
button.innerText = "Click on me!)"
button.style.width = '100px';
button.style.height = '100px';
button.style.margin = '100px';
button.style.backgroundColor = `rgb(11,123,200)`;
button.style.borderRadius = '20px';
button.style.cursor = 'pointer';
document.body.append(parag, button);

button.onclick = () => {
    if (parag.getAttribute('class')  === 'pvisible'){
        parag.setAttribute('class', 'hide');
    }
    else
    parag.setAttribute('class', 'pvisible')
    }


let rainbow =[
    'red',
    'orange', 
    'yellow', 
    'green',
    'blue',
    'indigo', 
    'violet',
];

let ul = document.createElement('ul');
document.body.append(ul);
createli(rainbow);
function createli(input) {
    for (let i = 0; i < input.length; i++) {
        let li = document.createElement('li');
        ul.appendChild(li);
        li.innerText = input[i];
        li.style.color = input[i];
        li.addEventListener('mouseover', function() {
            document.body.style.backgroundColor = input[i];
            
        }) 
        li.addEventListener('mouseout', function() {
            document.body.style.backgroundColor = 'white';
        })
    }
   
    
}

let filmswrapper = document.createElement('div');
filmswrapper.setAttribute('class', 'filmswrapper');
document.body.append(filmswrapper);
let films=[
    'Побег из Шоушенка',
    'Форест Гамп',
    'Властелин колец',
    'Список Шиндлера',
    'Твоё имя',
    'Ходячий замок Хаула',
    'Джанго освобождённый',
    'Джентельмены',
];
let descriptions =[
    'Бухгалтер Энди Дюфрейн обвинён в убийстве собственной жены и её любовника. Оказавшись в тюрьме под названием Шоушенк, он сталкивается с жестокостью и беззаконием, царящими по обе стороны решётки. Каждый, кто попадает в эти стены, становится их рабом до конца жизни. Но Энди, обладающий живым умом и доброй душой, находит подход как к заключённым, так и к охранникам, добиваясь их особого к себе расположения.',
    'В центре действия фильма находится главный герой — Форрест Гамп (созвучно с англ. forest gump, то есть «лесной болван») из вымышленного города Гринбоу, штат Алабама. По сюжету, умственно отсталого Форреста жизнь как птичье пёрышко проносит через важнейшие события американской истории второй половины XX века. Впрочем, он не теряется, и благодаря своим спортивным способностям, дружелюбному характеру, а также привитой матерью необыкновенной жизнестойкости совершает военный подвиг, добивается «американской мечты» и невольно, походя, оказывает влияние на политику и популярную культуру США.',
    'Сказания о Средиземье — это хроника Великой войны за Кольцо, длившейся не одну тысячу лет. Тот, кто владел Кольцом, получал неограниченную власть, но был обязан служить злу. Тихая деревня, где живут хоббиты. Придя на 111-й день рождения к своему старому другу Бильбо Бэггинсу, волшебник Гэндальф начинает вести разговор о кольце, которое Бильбо нашел много лет назад. Это кольцо принадлежало когда-то темному властителю Средиземья Саурону, и оно дает большую власть своему обладателю. Теперь Саурон хочет вернуть себе власть над Средиземьем. Бильбо отдает Кольцо племяннику Фродо, чтобы тот отнёс его к Роковой Горе и уничтожил.',
    'Фильм рассказывает реальную историю загадочного Оскара Шиндлера, члена нацистской партии, преуспевающего фабриканта, спасшего во время Второй мировой войны почти 1200 евреев.',
    'Токийский парень Таки и провинциальная девушка Мицуха обнаруживают, что между ними существует странная связь. Во сне они меняются телами и проживают жизни друг друга. Но однажды эта способность исчезает так же внезапно, как появилась. Таки решает во что бы то ни стало отыскать Мицуху.',
    'Злая ведьма заточила 18-летнюю Софи в тело старухи. Девушка-бабушка бежит из города куда глаза глядят и встречает удивительный дом на ножках, где знакомится с могущественным волшебником Хаулом и демоном Кальцифером. Кальцифер должен служить Хаулу по договору, условия которого он не может разглашать. Девушка и демон решают помочь друг другу избавиться от злых чар.',
    'Эксцентричный охотник за головами, также известный как Дантист, промышляет отстрелом самых опасных преступников. Работенка пыльная, и без надежного помощника ему не обойтись. Но как найти такого и желательно не очень дорогого? Освобождённый им раб по имени Джанго – прекрасная кандидатура. Правда, у нового помощника свои мотивы – кое с чем надо сперва разобраться.',
    'Один ушлый американец ещё со студенческих лет приторговывал наркотиками, а теперь придумал схему нелегального обогащения с использованием поместий обедневшей английской аристократии и очень неплохо на этом разбогател. Другой пронырливый журналист приходит к Рэю, правой руке американца, и предлагает тому купить киносценарий, в котором подробно описаны преступления его босса при участии других представителей лондонского криминального мира — партнёра-еврея, китайской диаспоры, чернокожих спортсменов и даже русского олигарха.',
];
createh(films, descriptions);
function createh(input, descriptions){
    let descr = document.createElement('p');
    for (let i = 0; i < input.length; i++) {
        let h2zag = document.createElement('h2');
        h2zag.setAttribute('class', 'h2zag');
        filmswrapper.append(h2zag);
        h2zag.innerText = input[i];
        h2zag.onclick = () =>{
        descr.innerText = descriptions[i];
        filmswrapper.appendChild(descr);
        }

        
    }
}