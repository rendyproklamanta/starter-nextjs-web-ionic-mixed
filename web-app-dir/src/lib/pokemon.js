const apiUrl = 'https://pokeapi.co/api/v2/pokemon';

export async function getPokemon({ searchParams }) {
   const res = await fetch(`${apiUrl}/?offset=${searchParams.offset ?? 1}&limit=${searchParams.limit ?? 10}`, {
      headers: {
         'Content-Type': 'application/json',
         'Authorization': 'aaa',
         'API-Key': 'process.env.DATA_API_KEY',
      },
   });
   
   return res.json();
}