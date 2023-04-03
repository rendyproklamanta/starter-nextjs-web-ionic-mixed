import React from 'react';
import { IonBackButton, IonButtons, IonContent, IonFooter, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Image from 'next/image';


const ChatMessage = () => (
   <IonPage>
      <IonHeader>
         <IonToolbar className="border-b border-slate-100 dark:border-slate-700">
            <IonButtons slot="start">
               <IonBackButton defaultHref="/chat" />
            </IonButtons>
            <IonTitle>
               <div className="flex py-4 items-center">
                  <div className="flex-1">
                     <div className="flex space-x-3">
                        <div className="flex-none">
                           <div className="h-10 w-10 rounded-full relative"><span className=" status ring-1 ring-white inline-block h-[10px] w-[10px] rounded-full absolute -right-0 top-0 bg-secondary-500
                     " /><Image src="http://dashcode-react.codeshaper.net/assets/user-2.2006f1b4.jpg" alt="img-placeholder" className="w-full h-full object-cover rounded-full" fill /></div>
                        </div>
                        <div className="flex-1 text-start"><span className="block text-slate-800 dark:text-slate-300 text-sm font-medium mb-[2px] truncate">Kathryn Murphy</span><span className="block text-slate-500 dark:text-slate-300 text-xs font-normal">Active now</span></div>
                     </div>
                  </div>
               </div>
            </IonTitle>
            <IonButtons slot="end">
               <div className="flex-none flex md:space-x-3 space-x-5 items-center">
                  <div className="msg-action-btn">
                     <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--heroicons-outline" width="1em" height="1em" viewBox="0 0 24 24">
                        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 0 1 2-2h3.28a1 1 0 0 1 .948.684l1.498 4.493a1 1 0 0 1-.502 1.21l-2.257 1.13a11.042 11.042 0 0 0 5.516 5.516l1.13-2.257a1 1 0 0 1 1.21-.502l4.493 1.498a1 1 0 0 1 .684.949V19a2 2 0 0 1-2 2h-1C9.716 21 3 14.284 3 6V5Z" />
                     </svg>
                  </div>
                  <div className="msg-action-btn">
                     <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--heroicons-outline" width="1em" height="1em" viewBox="0 0 24 24">
                        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m15 10l4.553-2.276A1 1 0 0 1 21 8.618v6.764a1 1 0 0 1-1.447.894L15 14M5 18h8a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2Z" />
                     </svg>
                  </div>
                  <div className="msg-action-btn">
                     <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--heroicons-outline" width="1em" height="1em" viewBox="0 0 24 24">
                        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm7 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm7 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0Z" />
                     </svg>
                  </div>
               </div>
            </IonButtons>
         </IonToolbar>
      </IonHeader>

      <IonContent>
         <div className="card-body p-0 h-full">
            <div className="divide-y divide-slate-100 dark:divide-slate-700 h-full">
               <div className="h-full">
                  <div className="chat-content parent-height pb-20">
                     <div className="msgs overflow-y-auto msg-height pt-6 space-y-6">
                        <div className="block md:px-6 px-4">
                           <div className="flex space-x-2 items-start group">
                              <div className="flex-none">
                                 <div className="h-8 w-8 rounded-full">
                                    <Image fill src="/assets/user-2.2006f1b4.jpg" alt="img-placeholder" className="block w-full h-full object-cover rounded-full" /></div>
                              </div>
                              <div className="flex-1 flex space-x-4">
                                 <div>
                                    <div className="text-contrent p-3 bg-slate-100 dark:bg-slate-600 dark:text-slate-300 text-slate-600 text-sm font-normal mb-1 rounded-md flex-1 whitespace-pre-wrap break-all">Hey! How are you?</div>
                                    <span className="font-normal text-xs text-slate-400 dark:text-slate-400">12:20 pm</span>
                                 </div>
                                 <div className="opacity-0 invisible group-hover:opacity-100 group-hover:visible">
                                    <div className="relative inline-block">
                                       <div className="block w-full " data-headlessui-state>
                                          <button className="block w-full" id="headlessui-menu-button-:r4j:" type="button" aria-haspopup="menu" aria-expanded="false" data-headlessui-state>
                                             <div className="label-class-custom">
                                                <div className="h-8 w-8 bg-slate-100 dark:bg-slate-600 dark:text-slate-300 text-slate-900 flex flex-col justify-center items-center text-xl rounded-full">
                                                   <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--heroicons-outline" width="1em" height="1em" viewBox="0 0 24 24">
                                                      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm7 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm7 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0Z" />
                                                   </svg>
                                                </div>
                                             </div>
                                          </button>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="block md:px-6 px-4">
                           <div className="flex space-x-2 items-start group">
                              <div className="flex-none">
                                 <div className="h-8 w-8 rounded-full"><Image fill src="/assets/user-2.2006f1b4.jpg" alt="img-placeholder" className="block w-full h-full object-cover rounded-full" /></div>
                              </div>
                              <div className="flex-1 flex space-x-4">
                                 <div>
                                    <div className="text-contrent p-3 bg-slate-100 dark:bg-slate-600 dark:text-slate-300 text-slate-600 text-sm font-normal mb-1 rounded-md flex-1 whitespace-pre-wrap break-all">Good, I will book the meeting room for you.</div>
                                    <span className="font-normal text-xs text-slate-400 dark:text-slate-400">12:20 pm</span>
                                 </div>
                                 <div className="opacity-0 invisible group-hover:opacity-100 group-hover:visible">
                                    <div className="relative inline-block">
                                       <div className="block w-full " data-headlessui-state>
                                          <button className="block w-full" id="headlessui-menu-button-:r4k:" type="button" aria-haspopup="menu" aria-expanded="false" data-headlessui-state>
                                             <div className="label-class-custom">
                                                <div className="h-8 w-8 bg-slate-100 dark:bg-slate-600 dark:text-slate-300 text-slate-900 flex flex-col justify-center items-center text-xl rounded-full">
                                                   <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--heroicons-outline" width="1em" height="1em" viewBox="0 0 24 24">
                                                      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm7 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm7 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0Z" />
                                                   </svg>
                                                </div>
                                             </div>
                                          </button>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="block md:px-6 px-4">
                           <div className="flex space-x-2 items-start justify-end group w-full">
                              <div className="no flex space-x-4">
                                 <div className="opacity-0 invisible group-hover:opacity-100 group-hover:visible">
                                    <div className="relative inline-block">
                                       <div className="block w-full " data-headlessui-state>
                                          <button className="block w-full" id="headlessui-menu-button-:r4l:" type="button" aria-haspopup="menu" aria-expanded="false" data-headlessui-state>
                                             <div className="label-class-custom">
                                                <div className="h-8 w-8 bg-slate-300 dark:bg-slate-900 dark:text-slate-400 flex flex-col justify-center items-center text-xl rounded-full text-slate-900">
                                                   <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--heroicons-outline" width="1em" height="1em" viewBox="0 0 24 24">
                                                      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm7 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm7 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0Z" />
                                                   </svg>
                                                </div>
                                             </div>
                                          </button>
                                       </div>
                                    </div>
                                 </div>
                                 <div className="whitespace-pre-wrap break-all">
                                    <div className="text-contrent p-3 bg-slate-300 dark:bg-slate-900 dark:text-slate-300 text-slate-800 text-sm font-normal rounded-md flex-1 mb-1">Hi, I am good, what about you?</div>
                                    <span className="font-normal text-xs text-slate-400">2:06 pm</span>
                                 </div>
                              </div>
                              <div className="flex-none">
                                 <div className="h-8 w-8 rounded-full"><Image fill src="/assets/user-2.2006f1b4.jpg" alt="img-placeholder" className="block w-full h-full object-cover rounded-full" /></div>
                              </div>
                           </div>
                        </div>
                        <div className="block md:px-6 px-4">
                           <div className="flex space-x-2 items-start justify-end group w-full">
                              <div className="no flex space-x-4">
                                 <div className="opacity-0 invisible group-hover:opacity-100 group-hover:visible">
                                    <div className="relative inline-block">
                                       <div className="block w-full " data-headlessui-state>
                                          <button className="block w-full" id="headlessui-menu-button-:r4m:" type="button" aria-haspopup="menu" aria-expanded="false" data-headlessui-state>
                                             <div className="label-class-custom">
                                                <div className="h-8 w-8 bg-slate-300 dark:bg-slate-900 dark:text-slate-400 flex flex-col justify-center items-center text-xl rounded-full text-slate-900">
                                                   <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--heroicons-outline" width="1em" height="1em" viewBox="0 0 24 24">
                                                      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm7 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm7 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0Z" />
                                                   </svg>
                                                </div>
                                             </div>
                                          </button>
                                       </div>
                                    </div>
                                 </div>
                                 <div className="whitespace-pre-wrap break-all">
                                    <div className="text-contrent p-3 bg-slate-300 dark:bg-slate-900 dark:text-slate-300 text-slate-800 text-sm font-normal rounded-md flex-1 mb-1">Thanks, It will be great.</div>
                                    <span className="font-normal text-xs text-slate-400">2:06 pm</span>
                                 </div>
                              </div>
                              <div className="flex-none">
                                 <div className="h-8 w-8 rounded-full"><Image fill src="/assets/user-2.2006f1b4.jpg" alt="img-placeholder" className="block w-full h-full object-cover rounded-full" /></div>
                              </div>
                           </div>
                        </div>
                        <div className="block md:px-6 px-4">
                           <div className="flex space-x-2 items-start group">
                              <div className="flex-none">
                                 <div className="h-8 w-8 rounded-full"><Image fill src="/assets/user-2.2006f1b4.jpg" alt="img-placeholder" className="block w-full h-full object-cover rounded-full" /></div>
                              </div>
                              <div className="flex-1 flex space-x-4">
                                 <div>
                                    <div className="text-contrent p-3 bg-slate-100 dark:bg-slate-600 dark:text-slate-300 text-slate-600 text-sm font-normal mb-1 rounded-md flex-1 whitespace-pre-wrap break-all">Hey! How are you?</div>
                                    <span className="font-normal text-xs text-slate-400 dark:text-slate-400">12:20 pm</span>
                                 </div>
                                 <div className="opacity-0 invisible group-hover:opacity-100 group-hover:visible">
                                    <div className="relative inline-block">
                                       <div className="block w-full " data-headlessui-state>
                                          <button className="block w-full" id="headlessui-menu-button-:r4n:" type="button" aria-haspopup="menu" aria-expanded="false" data-headlessui-state>
                                             <div className="label-class-custom">
                                                <div className="h-8 w-8 bg-slate-100 dark:bg-slate-600 dark:text-slate-300 text-slate-900 flex flex-col justify-center items-center text-xl rounded-full">
                                                   <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--heroicons-outline" width="1em" height="1em" viewBox="0 0 24 24">
                                                      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm7 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm7 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0Z" />
                                                   </svg>
                                                </div>
                                             </div>
                                          </button>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="block md:px-6 px-4">
                           <div className="flex space-x-2 items-start group">
                              <div className="flex-none">
                                 <div className="h-8 w-8 rounded-full"><Image fill src="/assets/user-2.2006f1b4.jpg" alt="img-placeholder" className="block w-full h-full object-cover rounded-full" /></div>
                              </div>
                              <div className="flex-1 flex space-x-4">
                                 <div>
                                    <div className="text-contrent p-3 bg-slate-100 dark:bg-slate-600 dark:text-slate-300 text-slate-600 text-sm font-normal mb-1 rounded-md flex-1 whitespace-pre-wrap break-all">Good, I will book the meeting room for you.</div>
                                    <span className="font-normal text-xs text-slate-400 dark:text-slate-400">12:20 pm</span>
                                 </div>
                                 <div className="opacity-0 invisible group-hover:opacity-100 group-hover:visible">
                                    <div className="relative inline-block">
                                       <div className="block w-full " data-headlessui-state>
                                          <button className="block w-full" id="headlessui-menu-button-:r4o:" type="button" aria-haspopup="menu" aria-expanded="false" data-headlessui-state>
                                             <div className="label-class-custom">
                                                <div className="h-8 w-8 bg-slate-100 dark:bg-slate-600 dark:text-slate-300 text-slate-900 flex flex-col justify-center items-center text-xl rounded-full">
                                                   <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--heroicons-outline" width="1em" height="1em" viewBox="0 0 24 24">
                                                      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm7 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm7 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0Z" />
                                                   </svg>
                                                </div>
                                             </div>
                                          </button>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="block md:px-6 px-4">
                           <div className="flex space-x-2 items-start justify-end group w-full">
                              <div className="no flex space-x-4">
                                 <div className="opacity-0 invisible group-hover:opacity-100 group-hover:visible">
                                    <div className="relative inline-block">
                                       <div className="block w-full " data-headlessui-state>
                                          <button className="block w-full" id="headlessui-menu-button-:r4p:" type="button" aria-haspopup="menu" aria-expanded="false" data-headlessui-state>
                                             <div className="label-class-custom">
                                                <div className="h-8 w-8 bg-slate-300 dark:bg-slate-900 dark:text-slate-400 flex flex-col justify-center items-center text-xl rounded-full text-slate-900">
                                                   <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--heroicons-outline" width="1em" height="1em" viewBox="0 0 24 24">
                                                      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm7 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm7 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0Z" />
                                                   </svg>
                                                </div>
                                             </div>
                                          </button>
                                       </div>
                                    </div>
                                 </div>
                                 <div className="whitespace-pre-wrap break-all">
                                    <div className="text-contrent p-3 bg-slate-300 dark:bg-slate-900 dark:text-slate-300 text-slate-800 text-sm font-normal rounded-md flex-1 mb-1">Hi, I am good, what about you?</div>
                                    <span className="font-normal text-xs text-slate-400">2:06 pm</span>
                                 </div>
                              </div>
                              <div className="flex-none">
                                 <div className="h-8 w-8 rounded-full"><Image fill src="/assets/user-2.2006f1b4.jpg" alt="img-placeholder" className="block w-full h-full object-cover rounded-full" /></div>
                              </div>
                           </div>
                        </div>
                        <div className="block md:px-6 px-4">
                           <div className="flex space-x-2 items-start justify-end group w-full">
                              <div className="no flex space-x-4">
                                 <div className="opacity-0 invisible group-hover:opacity-100 group-hover:visible">
                                    <div className="relative inline-block">
                                       <div className="block w-full " data-headlessui-state>
                                          <button className="block w-full" id="headlessui-menu-button-:r4q:" type="button" aria-haspopup="menu" aria-expanded="false" data-headlessui-state>
                                             <div className="label-class-custom">
                                                <div className="h-8 w-8 bg-slate-300 dark:bg-slate-900 dark:text-slate-400 flex flex-col justify-center items-center text-xl rounded-full text-slate-900">
                                                   <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--heroicons-outline" width="1em" height="1em" viewBox="0 0 24 24">
                                                      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm7 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm7 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0Z" />
                                                   </svg>
                                                </div>
                                             </div>
                                          </button>
                                       </div>
                                    </div>
                                 </div>
                                 <div className="whitespace-pre-wrap break-all">
                                    <div className="text-contrent p-3 bg-slate-300 dark:bg-slate-900 dark:text-slate-300 text-slate-800 text-sm font-normal rounded-md flex-1 mb-1">Thanks, It will be great.</div>
                                    <span className="font-normal text-xs text-slate-400">2:06 pm</span>
                                 </div>
                              </div>
                              <div className="flex-none">
                                 <div className="h-8 w-8 rounded-full"><Image fill src="/assets/user-2.2006f1b4.jpg" alt="img-placeholder" className="block w-full h-full object-cover rounded-full" /></div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <IonFooter className="fixed left-0 bottom-0 w-full bg-gray-900 text-white text-center md:px-6 px-4 sm:flex md:space-x-4 sm:space-x-2 border-t md:pt-6 pt-4 border-slate-100 dark:border-slate-700">
                     <div className="flex-none sm:flex hidden md:space-x-3 space-x-1">
                        <div className="h-8 w-8 cursor-pointer bg-slate-100 dark:bg-slate-900 dark:text-slate-400 flex flex-col justify-center items-center text-xl rounded-full">
                           <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--heroicons-outline" width="1em" height="1em" viewBox="0 0 24 24">
                              <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 0 0-5.656 0l-4 4a4 4 0 1 0 5.656 5.656l1.102-1.101m-.758-4.899a4 4 0 0 0 5.656 0l4-4a4 4 0 0 0-5.656-5.656l-1.1 1.1" />
                           </svg>
                        </div>
                        <div className="h-8 w-8 cursor-pointer bg-slate-100 dark:bg-slate-900 dark:text-slate-400 flex flex-col justify-center items-center text-xl rounded-full">
                           <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--heroicons-outline" width="1em" height="1em" viewBox="0 0 24 24">
                              <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 0 1-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0Z" />
                           </svg>
                        </div>
                     </div>
                     <div className="flex-1 relative flex space-x-3">
                        <div className="flex-1"><textarea type="text" placeholder="Type your message..." className="focus:ring-0 focus:outline-0 block w-full bg-transparent dark:text-white resize-none" defaultValue={""} /></div>
                        <div className="flex-none md:pr-0 pr-3">
                           <button type="button" className="h-8 w-8 bg-slate-900 text-white flex flex-col justify-center items-center text-lg rounded-full">
                              <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="transform rotate-[60deg] iconify iconify--heroicons-outline" width="1em" height="1em" viewBox="0 0 24 24">
                                 <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m12 19l9 2l-9-18l-9 18l9-2Zm0 0v-8" />
                              </svg>
                           </button>
                        </div>
                     </div>
                  </IonFooter>
               </div>
            </div>
         </div>

      </IonContent>
   </IonPage>

);

export default ChatMessage;
