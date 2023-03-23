import Link from "next/link";
import Counter from "../../components/Counter";
import { getPokemonList } from "../../store/query/pokemonApi";
import { wrapper } from "../../store/store";


const Ssr = ({ res }) => {
   // const result = useGetPokemonListQuery();
   // const { data } = result;
   const { isLoading, data } = res;

   if (isLoading) {
      return (<>Loading..</>);
   }

   return (
      <>
         <div className="container">
            <div className="row d-flex justify-content-center py-vh-5 pb-0">
               <div className="col-12 col-lg-10 col-xl-8">
                  <div className="row">
                     <div className="col-12">

                        <h2>Test Counter</h2>
                        <Counter />

                        <br />

                        <h2>Test Redux Toolkit Query</h2>
                        <button>
                           <Link href="/pokemon/csr">{'<<'} Go To CSR Mode</Link>
                        </button>

                        <ul>
                           {data.results.map((res, i) => (
                              <li key={i}>{res.name}</li>
                           ))}
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export const getServerSideProps = wrapper.getServerSideProps((store) => async () => {
   // const result = await store.dispatch(getPokemonByName.initiate('pikachu'));
   const result = await store.dispatch(getPokemonList.initiate());
   return { props: { res: result } };
});

export default Ssr;