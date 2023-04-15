import Ssr from "@/src/components/Reactquery/Ssr";

export default function Page({ searchParams }) {

   // const queryClient = getQueryClient();
   // await queryClient.prefetchQuery(["pokemons"], getUsers);
   // const dehydratedState = dehydrate(queryClient);

   // return (
   //    <Hydrate state={dehydratedState}>
   //       <HydratedUsers />
   //    </Hydrate>
   // );

   // const searchParams = useSearchParams();
   // const page = searchParams.get('page');

   return <Ssr search={searchParams} />;
}
