
let movies = [
    {
        name: '1+1',
        year: '2011',
        country: 'Франция'
    },
    {
        name: 'Джентльмены',
        year: '2019',
        country: 'США'
    },
    {
        name: 'Триггер',
        year: '2018',
        country: 'Россия'
    },
    {
        name: 'Брат',
        year: '1997',
        country: 'Россия'
    },
    {
        name: 'Волк с Уолл-стрит',
        year: '2013',
        country: 'США'
    },
    {
        name: 'Зеленая книга',
        year: '2018',
        country: 'США'
    },
    {
        name: 'Один дома',
        year: '1990',
        country: 'США'
    },
    {
        name: 'Достать ножи',
        year: '2019',
        country: 'США'
    },
    {
        name: 'Холоп 2',
        year: '2023',
        country: 'Россия'
    },
    {
        name: 'Остров проклятых',
        year: '2009',
        country: 'США'
    },
    {
        name: 'Аватар',
        year: '2009',
        country: 'США'
    },
    {
        name: 'Побег из Шоушенка',
        year: '1994',
        country: 'США'
    },
    {
        name: 'Зверополис',
        year: '2016',
        country: 'США'
    },
    {
        name: 'Интерстеллар',
        year: '2014',
        country: 'США'
    },
    {
        name: 'Зеленая миля',
        year: '1999',
        country: 'США'
    },
    {
        name: 'Переводчик',
        year: '2022',
        country: 'США'
    },
    {
        name: 'Легенда',
        year: '2015',
        country: 'США'
    },
    {
        name: 'Веном',
        year: '2018',
        country: 'США'
    },
    {
        name: 'Батя',
        year: '2020',
        country: 'Россия'
    },
    {
        name: 'Титаник',
        year: '1997',
        country: 'США'
    },

]


const wrapper = document.querySelector('.wrapper'),
      search = document.querySelector('.search'),
       input = document.createElement('input');


input.setAttribute('type', 'text');
input.setAttribute('placeholder', 'Поиск фильма..')
search.append(input);




movies.forEach(elem => {
    let div = document.createElement('div');
    div.classList.add('box')

    wrapper.append(div);
    div.innerHTML = `Название фильма: ${elem.name}, <br>
                     Год выпуска: ${elem.year}, <br>
                     Страна: ${elem.country}`
})


// const box = document.querySelectorAll('.box');



document.querySelector('input').oninput = function () {
    let val = this.value.trim().toLowerCase();

    let searchItem = document.querySelectorAll('.box');


    
  
    

    if(val != '') {
        searchItem.forEach(elem => {
            console.log(elem)
           if(elem.innerText.toLowerCase().search(val) == -1){
                elem.classList.add('hide')
           } else {
                elem.classList.remove('hide')
           }
        })
    } else {
        searchItem.forEach(elem => {
           
                 elem.classList.remove('hide')
            
         })
    }
    
}














