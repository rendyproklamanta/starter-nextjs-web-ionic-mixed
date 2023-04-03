import React from 'react';
import { IonBackButton, IonButtons, IonContent, IonHeader, IonItem, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Image from 'next/image';

const ChatList = () => (
   <IonPage>
      <IonHeader>
         <IonToolbar>
            <IonButtons slot="start">
               <IonBackButton defaultHref="/tabs/lists" />
            </IonButtons>
            <IonTitle>
               <div className="flex py-4 items-center">
                  <div className="flex-1">
                     <div className="flex space-x-3">
                        <div className="flex-none">
                           <div className="h-10 w-10 rounded-full relative"><span className=" status ring-1 ring-white inline-block h-[10px] w-[10px] rounded-full absolute -right-0 top-0
                     bg-secondary-500
                     " /><Image src="http://dashcode-react.codeshaper.net/assets/user-2.2006f1b4.jpg" alt="img-placeholder" className="w-full h-full object-cover rounded-full" fill /></div>
                        </div>
                        <div className="flex-1 text-start">
                           <span className="block text-slate-800 dark:text-slate-300 text-sm font-medium mb-[2px] truncate">My First Name</span>
                           <span className="block text-slate-500 dark:text-slate-300 text-xs font-normal">Available</span>
                        </div>
                     </div>
                  </div>
               </div>
            </IonTitle>
         </IonToolbar>
      </IonHeader>

      <IonContent>
         <div className="card-body relative p-0 h-full overflow-hidden ">
            <div className="border-b border-slate-100 dark:border-slate-700 py-1">
               <div className="search px-3 mx-6 rounded flex items-center space-x-3">
                  <div className="flex-none text-base text-slate-900 dark:text-slate-400">
                     <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--bytesize" width="1em" height="1em" viewBox="0 0 32 32">
                        <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}>
                           <circle cx={14} cy={14} r={12} />
                           <path d="m23 23l7 7" />
                        </g>
                     </svg>
                  </div>
                  <input placeholder="Search..." className="w-full flex-1 block bg-transparent placeholder:font-normal placeholder:text-slate-400 py-2 focus:ring-0 focus:outline-none dark:text-slate-200 dark:placeholder:text-slate-400" />
               </div>
            </div>
            <IonItem routerLink={`/chat/message`} className="list-entry">
               <div className="w-full py-5">
                  <div className="flex space-x-3 px-6">
                     <div className="flex-none">
                        <div className="h-10 w-10 rounded-full relative"><span className="  status ring-1 ring-white inline-block h-[10px] w-[10px] rounded-full absolute -right-0 top-0 bg-secondary-500                        " />
                           <Image src="http://dashcode-react.codeshaper.net/assets/user-2.2006f1b4.jpg" alt="img-placeholder" className="block w-full h-full object-cover rounded-full" fill />
                        </div>
                     </div>
                     <div className="flex-1 text-start flex">
                        <div className="flex-1">
                           <IonLabel className="block text-slate-800 dark:text-slate-300 text-sm font-medium mb-[2px]">Kathryn Murphys</IonLabel>
                           <span className="block text-slate-600 dark:text-slate-300 text-xs font-normal">Hey! there Im here...</span>
                        </div>
                        <div className="flex-none ltr:text-right rtl:text-end"><span className="block text-xs text-slate-400 dark:text-slate-400 font-normal">12:20 pm</span><span className="inline-flex flex-col items-center justify-center text-[10px] font-medium w-4 h-4 bg-[#FFC155] text-white rounded-full">5</span></div>
                     </div>
                  </div>
               </div>
            </IonItem>
         </div>
      </IonContent>
   </IonPage>

);

export default ChatList;
