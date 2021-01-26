
var library = [
    {
    author: "'Bill Gates'",
    title: 'The Road Ahead',
    readingStatus: true
    },
    {
    author: "'Steve Jobs'",
    title: 'Walter Isaacson' ,
    readingStatus: true
    },
    {
    author: 'Suzanne Collins',
    title: "'Mockingjay: The Final Book of The Hunger Games'",
    readingStatus: false
    }];
    var answer =prompt("your reading status");

    if(answer == "true")

    {
        console.log("Already read", library[0].author,"by",library[0].title );
        console.log("Already read", library[1].author,"by",library[1].title);
    }

    else{

        console.log("You still need to read",library[2].title,"by",library[2].author);

    }



    










