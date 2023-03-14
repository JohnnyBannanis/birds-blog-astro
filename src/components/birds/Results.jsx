import Fuse from 'fuse.js';
import { useState } from 'react';
import Card from './Card';
import Searchbar from './Searchbar';


const options = {
	keys: ["data.names.spanish"],
	includeMatches: true,
	minMatchCharLength: 1,
	threshold: 0.5,
};

function Results({ searchList }) {
    // Following code
    // User's input
    const [query, setQuery] = useState('');

    const fuse = new Fuse(searchList, options);

    // Set a limit to the posts: 5
    const found = fuse
        .search(query)
        .map((result) => result.item)
        .slice(0, 10);

    function handleImput({ target = {} }) {
        const { value } = target;
        setQuery(value);
    }

    return (
        <div className="flex flex-col items-center mt-4 w-full">
            <Searchbar query={query} handleImput={handleImput}/>
            <section className="my-4 min-[450px]:mx-4 grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 place-items-stretch">
                {query.length === 0 && (
                    searchList.map((bird) => (
                        <Card 
                            uid={bird.data.uid} 
                            latin={bird.data.names.latin} 
                            image={bird.data.image.url} 
                            spanish={bird.data.names.spanish} 
                            english={bird.data.names.english}
                        />
                    ))
                )}
                {found &&
					found.map((bird) => (
                        <Card 
                            uid={bird.data.uid} 
                            latin={bird.data.names.latin} 
                            image={bird.data.image.url} 
                            spanish={bird.data.names.spanish} 
                            english={bird.data.names.english}
                        />
                    ))}
            </section>
        </div>
    );
}
export default Results;