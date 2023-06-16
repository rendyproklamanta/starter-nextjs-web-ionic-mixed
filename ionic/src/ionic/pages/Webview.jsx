import { IonBackButton, IonButtons, IonHeader, IonContent, IonToolbar, IonTitle, IonPage } from '@ionic/react';
// import { getMyToken } from '../../utils/global';
import { useGetToken } from '../../hooks/useAuth';

const Webview = () => {
   // const [data, setData] = useState();

   // useEffect(() => {
   //    (async () => {
   //       setData(await getMyToken());
   //    })();
   // }, []);

   const token = useGetToken();
   // console.log("🚀 ~ file: Webview.jsx:16 ~ Webview ~ userInfo:", token)

   return (
      <IonPage>
         <IonHeader>
            <IonToolbar>
               <IonButtons slot="start">
                  <IonBackButton defaultHref="/tabs/home" />
               </IonButtons>
               <IonTitle>Webview</IonTitle>
            </IonToolbar>
         </IonHeader>
         <IonContent>
            <iframe src={`https://member.growcoconut.com/member/generation?token=${token}`} width="100%" height="110%" style={{ marginTop: '-60px' }}></iframe>
         </IonContent>
      </IonPage >
   );
};

export default Webview;