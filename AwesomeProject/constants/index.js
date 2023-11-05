export const categories=[
    {
        id: 1,
        name: 'Hamburger',
        image: require('../assets/images/hamburger.png'),
    },
    {
        id: 2,
        name: 'Döner',
        image: require('../assets/images/doner-kebab.png'),
    },
    {
        id: 3,
        name: 'Pizza',
        image: require('../assets/images/pizza.png'),
    },
    {
        id: 4,
        name: 'Tatlı',
        image: require('../assets/images/sweets.png'),
    },
    {
        id: 5,
        name: 'Kebap',
        image: require('../assets/images/kebab.png'),
    },
    {
        id: 6,
        name: 'Köfte',
        image: require('../assets/images/meatballs.png'),
    },
    {
        id: 7,
        name: 'Balık',
        image: require('../assets/images/fish.png'),
    },
    {
        id: 8,
        name: 'Salata',
        image: require('../assets/images/salad.png'),
    },
    {
        id: 9,
        name: 'Et',
        image: require('../assets/images/meat.png'),
    },
    {
        id: 10,
        name: 'Pastane',
        image: require('../assets/images/croissant.png'),
    },
]
export const featured1={
    id: 1, 
    title: "Hamburger",
    restaurants: [
        {
            id: 1,
            name:'Aryb\'s',
            image: require('../assets/images/arbys.png'),
            adress: 'Beylikdüzü',
            star: 4,
            reviews: '1k',
            category: 'Hamburger',
            dishes:[
                {
                    id: 1,
                    name: 'Klasik Sandvic Menü',
                    price: 100, 
                    image: require('../assets/images/klasik-sandvic.png'),
                },
                {
                    id: 2,
                    name: 'Klasik Gurme Tavuk Menü',
                    price: 120, 
                    image: require('../assets/images/klasik-gurme-tavuk-sandvic.png'),
                },
            ]
        },
        {
            id: 2,
            name: 'Burger King',
            image: require('../assets/images/burgerKing.png'),
            adress: 'Beylikdüzü',
            star: 4.2,
            reviews: '4.2k',
            category: 'Hamburger',
            dishes:[
                {
                    id: 1,
                    name: 'Whopper Menu',
                    price: 175, 
                    image: require('../assets/images/whopper-menu.png'),
                },
                {
                    id: 2,
                    name: 'klasik Gurme Tavuk Menü',
                    price: 120, 
                    image: require('../assets/images/klasik-gurme-tavuk-menu.png'),
                },
            ]

        },
        
        {
            id: 3,
            name: 'MacDonald\'s',
            image: require('../assets/images/macDonald.jpg'),
            adress: 'Beylikdüzü',
            star: 4.2,
            reviews: '4k',
            category: 'Hamburger',
            dishes:[
                {
                    id: 1,
                    name: 'Big Mac Menü',
                    price: 175, 
                    image: require('../assets/images/big-mac.jpg'),
                },
                {
                    id: 2,
                    name: 'Acılı Tavuk Menü',
                    price: 120, 
                    image: require('../assets/images/klasik-gurme-tavuk-menu.png'),
                },
            ]

        },  
        
    ]
}
export const featured2={
    id:2,
    title: "Döner",
    restaurants: [
        {
            id: 1,
            name:'Bereket Döner',
            image: require('../assets/images/bereketDoner.jpeg'),
            adress: 'Beylikdüzü',
            star: 4,
            reviews: '1k',
            category: 'Döner',
            dishes:[
                {
                    id: 1,
                    name: 'Yaprak Döner',
                    price: 120, 
                    image: require('../assets/images/donerci1.jpeg'),
                },
                {
                    id: 2,
                    name: 'Et Dürüm',
                    price: 120, 
                    image: require('../assets/images/donerci2.jpg'),
                },
            ]
        },
        {
            id: 2,
            name:'Hot Döner',
            image: require('../assets/images/hotDoner.jpeg'),
            adress: 'Beylikdüzü',
            star: 4,
            reviews: '1k',
            category: 'Döner',
            dishes:[
                {
                    id: 1,
                    name: 'Tavuk Dürüm',
                    price: 120, 
                    image: require('../assets/images/hotDoner.jpeg'),
                },
            ]
        },
        
    ]
}
export const featured3={
    id:3,
    title: "Pizza",
    restaurants: [
        {
            id: 1,
            name:'Sorisso Pizza',
            image: require('../assets/images/food-menu-49.jpeg'),
            adress: 'Beylikdüzü',
            star: 4.6,
            reviews: '3k',
            category: 'Pizza',
            dishes:[
                {
                    id: 1,
                    name: 'Margarita',
                    price: 300, 
                    image: require('../assets/images/food-menu-49.jpeg'),
                },
            ]
        },
        {
            id: 2,
            name:'Pizza Hut',
            image: require('../assets/images/pizzaHut.jpeg'),
            adress: 'Beylikdüzü',
            star: 3.6,
            reviews: '3k',
            category: 'Pizza',
            dishes:[
                {
                    id: 1,
                    name: 'Margarita',
                    price: 150, 
                    image: require('../assets/images/food-menu-49.jpeg'),
                },
            ]
        },
        {
            id: 3,
            name:'Dominos Pizza',
            image: require('../assets/images/dominos.jpg'),
            adress: 'Beylikdüzü',
            star: 3.8,
            reviews: '3k',
            category: 'Pizza',
            dishes:[
                {
                    id: 1,
                    name: 'Margarita',
                    price: 150, 
                    image: require('../assets/images/food-menu-49.jpeg'),
                },
            ]
        },
    ]
}
export const featured4={
    id:4,
    title: "Tatlı",
    restaurants: [
        {
            id: 1,
            name:'Güllüoğlu',
            image: require('../assets/images/baklavaci.jpg'),
            adress: 'Beylikdüzü',
            star: 4.5,
            reviews: '3k',
            category: 'Tatlı',
            dishes:[
                {
                    id: 1,
                    name: 'Fıstıklı Baklava',
                    price: 700, 
                    image: require('../assets/images/fıstıklı_baklava.jpeg'),
                },
            ]
        },
        {
            id: 2,
            name:'Cook İstanbul',
            image: require('../assets/images/cookIstanbul.jpg'),
            adress: 'Beylikdüzü',
            star: 4.8,
            reviews: '3k',
            category: 'Tatlı',
            dishes:[
                {
                    id: 1,
                    name: 'Profiterol',
                    price: 155, 
                    image: require('../assets/images/profiterol.jpg'),
                },
            ]
        },
        {
            id: 3,
            name:'Ada Dondurma',
            image: require('../assets/images/dondurmaci.png'),
            adress: 'Beylikdüzü',
            star: 4,
            reviews: '1k',
            category: 'Tatlı',
            dishes:[
                {
                    id: 1,
                    name: 'Karışık Dondurma',
                    price: 250, 
                    image: require('../assets/images/dondurmaci.png'),
                },
            ]
        },

    ]
}
export const featured5={
    id:5,
    title: "Kebap",
    restaurants: [
        {
            id: 1,
            name:'Evrenos Kebap',
            image: require('../assets/images/kebap2.jpg'),
            adress: 'Beylikdüzü',
            star: 4.3,
            reviews: '3k',
            category: 'Kebap',
            dishes:[
                {
                    id: 1,
                    name: 'Urfa Kebap',
                    price: 50, 
                    image: require('../assets/images/kebap2.jpg'),
                },
                {
                    id: 2,
                    name: 'Adana Kebap',
                    price: 50, 
                    image: require('../assets/images/kebap2.jpg'),
                },
            ]
        },
    ]
}
export const featured6={
    id:6,
    title: "Köfte",
    restaurants: [
        {
            id: 1,
            name:'Cızbız Köftecisi',
            image: require('../assets/images/kofte-izgara.jpg'),
            adress: 'Beylikdüzü',
            star: 4.4,
            reviews: '4k',
            category: 'Köfte',
            dishes:[
                {
                    id: 1,
                    name: 'Izgara Köfte',
                    price: 200, 
                    image: require('../assets/images/cizbiz-kofteci.jpg'),
                },
            ]
        },
    ]
}
export const featured7={
    id:7,
    title: "Balık",
    restaurants: [
        {
            id: 1,
            name:'Roka Balık',
            image: require('../assets/images/balikci.jpeg'),
            adress: 'Beylikdüzü',
            star: 4.4,
            reviews: '4k',
            category: 'Balık',
            dishes:[
                {
                    id: 1,
                    name: 'Çupra Balık',
                    price: 250, 
                    image: require('../assets/images/roka-balik-restaurant-kadikoy-.jpg'),
                },
            ]
        },
    ]
}
export const featured8={
    id:8,
    title: "Salata",
    restaurants: [
        {
            id: 1,
            name:'Salata Dünyası',
            image: require('../assets/images/salata.jpg'),
            adress: 'Beylikdüzü',
            star: 4,
            reviews: '1k',
            category: 'Salata',
            dishes:[
                {
                    id: 1,
                    name: 'Akdeniz Salatası',
                    price: 75, 
                    image: require('../assets/images/roka-balik-restaurant-kadikoy-.jpg'),
                },
            ]
        },
    ]
}
export const featured10={
    id:10,
    title: "Pastane",
    restaurants: [
        {
            id: 1,
            name:'Aslı Börek',
            image: require('../assets/images/asli_borek.jpg'),
            adress: 'Beylikdüzü',
            star: 4.1,
            reviews: '3k',
            category: 'Pastane',
            dishes:[
                {
                    id: 1,
                    name: 'Su Böreği',
                    price: 300, 
                    image: require('../assets/images/su_böreği.jpeg'),
                },
            ]
        },
        {
            id:2,
            name:'Otantik Unlu Mamülleri',
            image: require('../assets/images/firin2.jpg'),
            adress: 'Beylikdüzü',
            star: 4.1,
            reviews: '3k',
            category: ' Pastane',
            dishes:[
                {
                    id: 1,
                    name: 'Poğaça Çeşitleri',
                    price: 35, 
                    image: require('../assets/images/firin.jpg'),
                },
            ]
        }
    ]
} 