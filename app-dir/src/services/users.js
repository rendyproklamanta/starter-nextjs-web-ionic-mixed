export async function getUsers() {
   const res = await fetch("https://jsonplaceholder.typicode.com/users");
   const users = await res.json();
   return users;
}

export const getPokemons = async ({ offset, limit }) => {
   const res = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${offset ?? 1}&limit=${limit ?? 10}`);
   const users = await res.json();
   return users;
};

export const getFacts = async () => {
   const res = await fetch('https://random-facts2.p.rapidapi.com/getfact');
   return res.json();
};