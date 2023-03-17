
async function search(searchTerm) {
    const key = "74a5f20d87544d866a9d15c602f4656c957bed8e7f1fa1a69c9a9875b3cc9b12"
    const res = await fetch(`https://serpapi.com/search.json?engine=google&q=${searchTerm}&api_key=74a5f20d87544d866a9d15c602f4656c957bed8e7f1fa1a69c9a9875b3cc9b12`);
    const data = await res.json();
    return data;
}

export default async function ({ params: { searchTerm } }) {
    const searchResults = await search(searchTerm);
    return (
        <div>
            <p className="text-primary">Search Results for: {searchTerm}</p>

            <ol className="space-y-6 p-6">
                {searchResults.organic_results.map((res) => (
                    <li key={res.position} className='list-decimal'>
                        <p className="font-bold">{res.title}</p>
                        <p>{res.snippet}</p>
                    </li>
                ))}
            </ol>
        </div>
    )
}