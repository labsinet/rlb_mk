import Navbar from "../Navbar/Navbar.jsx"
import GenreItem from './GenreItem/GenreItem.jsx';

const genreArray = [
    { id: 0, title: 'Любовний роман' },
    { id: 1, title: 'Сімейний роман'},
    { id: 2, title: 'Психологічний роман'},
    { id: 3, title: 'Триллер' },
    { id: 4, title: 'Детектив' },
    { id: 5, title: 'Пригодницький роман' },
    { id: 6, title: 'Фентезі' },
    { id: 7, title: 'Фантастика' },
    { id: 8, title: 'Містика' },
    { id: 9, title: 'Хорор' },
    { id: 10, title: 'історичний роман' },
    { id: 11, title: 'науково-популярні книги' },
    { id: 12, title: 'публіцистика' },
    { id: 13, title: 'поема' },
  ];


const Genre = () => {
  
    return (
       <div>
        <Navbar /> 
       
       <div className="flex flex-wrap justify-center gap-4">
                                
                    {genreArray.map((genre) => (
                    <GenreItem key={genre.id} title={genre.title}  />
                    ))}
                
        </div>
        </div>
  )
}

export default Genre;

