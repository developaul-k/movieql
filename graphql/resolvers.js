import { getMovies, getById, addMovie, deleteMovie, modifyMovie } from './db';

const resolvers = {
    Query: {
        movies: () => getMovies(),
        movie: (_, { id }) => getById(id)
    },
    Mutation: {
        addMovie: (_, { name, score }) => addMovie(name, score),
        deleteMovie: (_, {id}) => deleteMovie(id),
        modifyMovie: (_, { id, score }) => modifyMovie( id, score )
    }
}

export default resolvers;