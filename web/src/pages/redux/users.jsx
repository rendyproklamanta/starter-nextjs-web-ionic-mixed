import { wrapper } from "../../store/store";
import { getUsersList } from "../../store/api/usersApi";

const Users = ({ res }) => {
   let { isLoading, data } = res;

   if (isLoading) {
      return (<>Loading..</>);
   }

   return (
      <>
         <div className="container">
            <div className="row d-flex justify-content-center py-vh-5 pb-0">
               <div className="col-12 col-lg-10 col-xl-8">
                  <h2>Test Redux Toolkit Query</h2>
                  <ul>
                     {data.data.map((res, i) => (
                        <li key={i}>{res.first_name + ' ' + res.last_name}</li>
                     ))}
                  </ul>
               </div>
            </div>
         </div>
      </>
   );
};

export const getServerSideProps = wrapper.getServerSideProps((store) => async () => {
   const result = await store.dispatch(getUsersList.initiate());
   return { props: { res: result } };
});

export default Users;