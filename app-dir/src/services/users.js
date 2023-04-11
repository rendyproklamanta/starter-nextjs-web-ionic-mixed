export async function getUsers() {
   const res = await fetch("https://jsonplaceholder.typicode.com/users");
   const users = await res.json();
   return users;
}

export const getFacts = async () => {
   const res = await fetch('https://random-facts2.p.rapidapi.com/getfact');
   return res.json();
};