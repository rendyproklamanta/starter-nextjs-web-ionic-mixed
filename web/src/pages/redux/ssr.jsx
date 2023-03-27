import Link from "next/link";
import { getPokemonList } from "../../store/api/pokemonApi";
import { wrapper } from "../../store/store";
import Router from "next/router";
import { useEffect, useState } from "react";
import { shuffle } from "lodash";
import Counter from "../../components/Counter";

const Ssr = ({ res }) => {
   const [page, setPage] = useState(1);
   const [data, setData] = useState([]);
   const { data: resData } = res;

   useEffect(() => {
      setData(shuffle(resData.results));
   }, [resData.results]);

   useEffect(() => {
      if (page < 1) setPage(1);
      Router.push('?page=' + page);
   }, [page]);

   const handleRefetch = () => {
      Router.push('?page=' + page);
      setData(shuffle(resData.results));
   };

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
                        <button onClick={handleRefetch}>
                           🔄 Refetch SSR
                        </button>
                        <button>
                           <Link href="/redux/csr">Go To CSR Mode {'>>'}</Link>
                        </button>

                        <ul>
                           {data.map((res, i) => (
                              <li key={i}>{res.name}</li>
                           ))}
                        </ul>
                        <button onClick={() => setPage((prev) => prev - 10)}>
                           Prev
                        </button>
                        <button onClick={() => setPage((next) => next + 10)}>
                           Next
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export const getServerSideProps = wrapper.getServerSideProps((store) => async (context) => {
   // const result = await store.dispatch(getPokemonByName.initiate('pikachu'));
   const result = await store.dispatch(getPokemonList.initiate(
      { offset: context.query.page, limit: 10 }
   ));

   return { props: { res: result } };
});

export default Ssr;