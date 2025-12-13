import v4 as uuidv4 from 'uuid';
export const bookData = [
    {
        id: uuidv4(),
        title: "Designing Data-intensive Application",
        author: "Martin Kleppmann",
        tags: [
            {
                id: uuidv4(),
                title: "O Really",
                tagColor: "bg-green-100"
            },

             {
                id: uuidv4(),
                title: "O Really",
                tagColor: "bg-orange-100"
            },

             {
                id: uuidv4(),
                title: "O Really",
                tagColor: "bg-pink-100"
            },
        ],

    },

   {
         id: uuidv4(),
        title: "Eloquent Javascript",
        author: "Martin",
        tags: [
            {
                id: uuidv4(),
                title: "O Really",
                tagColor: "bg-green-100"
            },

             {
                id: uuidv4(),
                title: "O Really",
                tagColor: "bg-orange-100"
            },

             {
                id: uuidv4(),
                title: "O Really",
                tagColor: "bg-pink-100"
            },
        ],

    },

     {
         id: uuidv4(),
        title: "Clean Architecture",
        author: "Robert Martin",
        tags: [
            {
                id: uuidv4(),
                title: "O Really",
                tagColor: "bg-green-100"
            },

             {
                id: uuidv4(),
                title: "O Really",
                tagColor: "bg-orange-100"
            },

             {
                id: uuidv4(),
                title: "O Really",
                tagColor: "bg-pink-100"
            },
        ],

    },
      
     
]