const books = [
 {  
     ISBN: "12345ABC",
     title: "Love Time",
     pubdate: "June 26 2021",
     language: "en",
     numpage: "120",
     author: [1,2],
     publication: [1],
     category: ["self-feeling", "Desire"],
},
];

const author =[
{
 id:1,
 name:"Bharat",
 books: ["12345ABC", "123456ABC"],
},

{
    id:2,
    name:"Raju",
    books: ["12345ABC"],

},

];

const publication = [
    {
      id: 1,
      name:"Sharma's publication", 
      books:["12345ABC"],


    },
];


module.exports  = {books, author, publication};

              
            