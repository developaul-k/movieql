export const people = [
    {
        id: 0,
        name: "Paul",
        age: 30,
        gender: 'female'
    },
    {
        id: 1,
        name: "Nicolas",
        age: 23,
        gender: 'female'
    },
    {
        id: 2,
        name: "henry",
        age: 18,
        gender: 'female'
    },
    {
        id: 3,
        name: "david",
        age: 15,
        gender: 'female'
    },
    {
        id: 4,
        name: "tomas",
        age: 35,
        gender: 'female'
    }
]

let movies = [
    {
        id: 0,
        name: "Star Wars - The new one",
        score: 1
    },
    {
        id: 1,
        name: "Avengers - Thew new one",
        score: 100
    },
    {
        id:2,
        name: "The Godfather I",
        score: 50
    },
    {
        id: 3,
        name: "Logan",
        score: 20
    }
]

export const getMovies = () => movies;

export const getById = id => {
    const filteredPeople = people.filter( person => person.id === id );
    return filteredPeople[0];
}

export const deleteMovie = id => {
    const cleanMovies = movies.filter(movie => movie.id !== id);
    if ( movies.length > cleanMovies.length ) {
        movies = cleanMovies;
        return true;
    } else {
        return false;
    }
}

export const addMovie = (name, score) => {
    const newMovie = {
        id: `${movies.length + 1}`,
        name,
        score
    };
    movies.push(newMovie);

    return newMovie;
}

export const modifyMovie = ( id, score ) => {
    const modifyMovie = movies.filter( movie => movie.id === id );

    modifyMovie[0].score = score;

    return modifyMovie[0];
}