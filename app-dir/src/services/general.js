export async function getUsers() {
   const res = await fetch("https://jsonplaceholder.typicode.com/users");
   const data = await res.json();
   return data;
}

export const getPokemons = async ({ offset, limit }) => {
   const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}reactquery/api?offset=${offset ?? 1}&limit=${limit ?? 10}`, {
      method: "POST",
      headers: {
         'API-KEY': process.env.NEXT_PUBLIC_API_KEY,
      },
   });
   const data = await res.json();

   return data;
};

export const getFacts = async () => {
   const res = await fetch('https://random-facts2.p.rapidapi.com/getfact');
   return res.json();
};