import Image from 'next/image';
import Link from 'next/link';
import DefaultLayout from '../components/layout/DefaultLayout';

const Home = () => {

   return (
      <>
         <DefaultLayout>
            <div data-aos="fade">
               <div className="container py-vh-4 position-relative mt-5 px-vw-5 text-center">
                  <div className="row d-flex align-items-center justify-content-center py-vh-5">
                     <div className="col-12 col-xl-10">
                        <span className="h5 text-secondary fw-lighter">Our Mission</span>
                        <h1 className="display-huge mt-3 mb-3 lh-1">We do ordinary stuff for cool people</h1>
                     </div>
                     <div className="col-12 col-xl-8">
                        <p className="lead text-secondary">We are some sort of DAO working with AI, NFT´s, web 4.0 and the so called
                           blockchain...in the Metaverse. You don´t understand a word? No problem, we neither!</p>
                     </div>
                     <div className="col-12 text-center">
                        <Link href="/dashboard" className="btn btn-xl btn-light">Join us &nbsp;
                           <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-arrow-right inline" viewBox="0 0 16 16">
                              <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                           </svg>
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
            <div className="w-100 position-relative bg-black text-white bg-cover d-flex align-items-center">
               <div className="container-fluid px-vw-5">
                  <div className="position-absolute w-100 h-50 bg-dark bottom-0 start-0" />
                  <div className="row d-flex align-items-center position-relative justify-content-center px-0 g-5">
                     <div className="col-12 col-lg-6">
                        <Image src="/img/abstract18.webp" width={2280} height={1732} alt="abstract image" className="img-fluid position-relative rounded-5 shadow" data-aos="fade-up" />
                     </div>
                     <div className="col-12 col-md-6 col-lg-3">
                        <Image src="/img/abstract6.webp" width={1116} height={1578} alt="abstract image" className="img-fluid position-relative rounded-5 shadow" data-aos="fade-up" data-aos-duration={2000} />
                     </div>
                     <div className="col-12 col-md-6 col-lg-3">
                        <Image src="/img/abstract9.webp" width={1116} height={848} alt="abstract image" className="img-fluid position-relative rounded-5 shadow" data-aos="fade-up" data-aos-duration={3000} />
                     </div>
                  </div>
               </div>
            </div>
            <div className="bg-dark">
               <div className="container px-vw-5 py-vh-5">
                  <div className="row d-flex align-items-center">
                     <div className="col-12 col-lg-7 text-lg-end" data-aos="fade-right">
                        <span className="h5 text-secondary fw-lighter">What we do</span>
                        <h2 className="display-4 text-white">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                           invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</h2>
                     </div>
                     <div className="col-12 col-lg-5" data-aos="fade-left">
                        <h3 className="pt-5">Product Design &amp; Strategy</h3>
                        <p className="text-secondary">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                           tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.<br />
                           <a href="#" className="link-fancy link-fancy-light me-2">Tell me more &nbsp;</a>
                           <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" className="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                              <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                           </svg>
                        </p>
                        <h3 className="border-top border-secondary pt-5 mt-5">Development &amp; Engineering</h3>
                        <p className="text-secondary">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                           tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.<br />
                           <a href="#" className="link-fancy link-fancy-light me-2">Tell me more</a>
                           <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" className="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                              <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                           </svg>
                        </p>
                     </div>
                  </div>
               </div>
            </div>
            <div className="bg-black py-vh-3">
               <div className="container bg-black px-vw-5 py-vh-3 rounded-5 shadow">
                  <div className="row gx-5">
                     <div className="col-12 col-md-6">
                        <div className="card bg-transparent mb-5" data-aos="zoom-in-up">
                           <div className="bg-dark shadow rounded-5 p-0">
                              <Image src="/img/abstract3.webp" width={582} height={327} alt="abstract image" className="img-fluid rounded-5 no-bottom-radius" loading="lazy" />
                              <div className="p-5">
                                 <h2 className="fw-lighter text-white">Ipsum dolor est</h2>
                                 <p className="pb-4 text-secondary">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                                    nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</p>
                                 <a href="#" className="link-fancy link-fancy-light">Read more</a>
                              </div>
                           </div>
                        </div>
                        <div className="card bg-transparent" data-aos="zoom-in-up">
                           <div className="bg-dark shadow rounded-5 p-0">
                              <Image src="/img/abstract3.webp" width={582} height={327} alt="abstract image" className="img-fluid rounded-5 no-bottom-radius" loading="lazy" />
                              <div className="p-5">
                                 <h2 className="fw-lighter text-white">Ipsum dolor est</h2>
                                 <p className="pb-4 text-secondary">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                                    nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</p>
                                 <a href="#" className="link-fancy link-fancy-light">Read more</a>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-12 col-md-6">
                        <div className="p-5 pt-0 mt-5" data-aos="fade">
                           <span className="h5 text-secondary fw-lighter">What we don´t know</span>
                           <h2 className="display-4 text-white">There is a lot we don´t know. Here is a small sneak peek</h2>
                        </div>
                        <div className="card bg-transparent mb-5 mt-5" data-aos="zoom-in-up">
                           <div className="bg-dark shadow rounded-5 p-0">
                              <Image src="/img/abstract3.webp" width={582} height={327} alt="abstract image" className="img-fluid rounded-5 no-bottom-radius" loading="lazy" />
                              <div className="p-5">
                                 <h2 className="fw-lighter text-white">Ipsum dolor est</h2>
                                 <p className="pb-4 text-secondary">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                                    nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</p>
                                 <a href="#" className="link-fancy link-fancy-light">Read more</a>
                              </div>
                           </div>
                        </div>
                        <div className="card bg-transparent" data-aos="zoom-in-up">
                           <div className="bg-dark shadow rounded-5 p-0">
                              <Image src="/img/abstract3.webp" width={582} height={327} alt="abstract image" className="img-fluid rounded-5 no-bottom-radius" loading="lazy" />
                              <div className="p-5">
                                 <h2 className="fw-lighter text-white">Ipsum dolor est</h2>
                                 <p className="pb-4 text-secondary">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                                    nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</p>
                                 <a href="#" className="link-fancy link-fancy-light">Read more</a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="bg-dark position-relative">
               <div className="container px-vw-5 py-vh-5">
                  <div className="row d-flex align-items-center">
                     <div className="col-12 col-lg-7">
                        <Image src="/img/person9.webp" className="img-fluid rounded-5 mb-n5 shadow" width={512} height={512} alt="a nice person" loading="lazy" data-aos="zoom-in-right" />
                        <Image src="/img/person11.webp" className="img-fluid rounded-5 ms-5 mb-n5 shadow" width={512} height={512} alt="another nice person" loading="lazy" data-aos="zoom-in-up" />
                     </div>
                     <div className="col-12 col-lg-5 bg-dark rounded-5 py-5" data-aos="fade">
                        <span className="h5 text-secondary fw-lighter">Do you like faces?</span>
                        <h2 className="display-4">We constantly adding new images to our website. Does it make sense? No!</h2>
                     </div>
                  </div>
               </div>
            </div>
            <div className="bg-black">
               <div className="container px-vw-5 py-vh-5">
                  <div className="row d-flex align-items-center">
                     <div className="col-12 col-lg-5 text-center text-lg-end" data-aos="zoom-in-right">
                        <span className="h5 text-secondary fw-lighter">What we charge</span>
                        <h2 className="display-4">You get all our knowledge for one simple price</h2>
                     </div>
                     <div className="col-12 col-lg-7 bg-dark rounded-5 py-vh-3 text-center my-5" data-aos="zoom-in-up">
                        <h2 className="display-huge mb-5">
                           <span className="fs-4 me-2 fw-light">$</span><span className="border-bottom border-5">499</span><span className="fs-6 fw-light">/day</span>
                        </h2>
                        <p className="lead text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                           tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                           ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <a href="#" className="btn btn-xl btn-light">Sign up
                           <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                              <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                           </svg>
                        </a>
                     </div>
                  </div>
               </div>
            </div>

            <div className="container-fluid px-vw-5 position-relative mb-5" data-aos="fade">
               <div className="position-absolute w-100 h-50 bg-black top-0 start-0" />
               <div className="position-relative py-vh-5 bg-cover bg-center rounded-5" style={{ backgroundImage: 'url(/img/abstract12.webp)' }}>
                  <div className="container bg-black px-vw-5 py-vh-3 rounded-5 shadow">
                     <div className="row d-flex align-items-center">
                        <div className="col-6 d-flex align-items-center bg-dark shadow rounded-5 p-0" data-aos="zoom-in-up">
                           <div className="row d-flex justify-content-center">
                              <div className="col-12">
                                 <Image src="/img/person103.webp" width={684} height={457} alt="our CEO with some nice numbers" className="img-fluid rounded-5" loading="lazy" />
                              </div>
                              <div className="col-12 col-lg-10 col-xl-8 text-center my-5">
                                 <p className="lead border-bottom pb-4 border-secondary">Lorem ipsum dolor sit amet, consetetur sadipscing
                                    elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                                    voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                                    takimata sanctus est Lorem ipsum dolor sit amet.</p>
                                 <p className="text-secondary text-center">Jane Doe, CEO</p>
                              </div>
                           </div>
                        </div>

                        <div className="col-5 offset-1">
                           <span className="h5 text-secondary fw-lighter">The numbers</span>
                           <h2 className="display-huge fw-bolder" data-aos="zoom-in-left">+400</h2>
                           <p className="h4 fw-lighter text-secondary">
                              Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                           </p>
                           <h2 className="display-huge fw-bolder border-top border-secondary pt-5 mt-5" data-aos="zoom-in-left">78.981
                           </h2>
                           <p className="h4 fw-lighter text-secondary">
                              Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                           </p>
                           <h2 className="display-huge fw-bolder border-top border-secondary pt-5 mt-5" data-aos="zoom-in-left">98%</h2>
                           <p className="h4 fw-lighter text-secondary">
                              Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="bg-dark py-vh-5">
               <div className="container px-vw-5">
                  <div className="row d-flex gx-5 align-items-center">
                     <div className="col-12 col-lg-6">
                        <div className="rounded-5 bg-black p-5 shadow" data-aos="zoom-in-right">
                           <div className="fs-1">
                              <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                 <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                              </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                 <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                              </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                 <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                              </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                 <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                              </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                 <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                              </svg>
                           </div>
                           <p className="text-secondary lead">Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore et
                              dolore magna aliqua ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                           <div className="d-flex justify-content-start align-items-center border-top border-secondary pt-3">
                              <Image src="/img/person14.webp" width={96} height={96} className="rounded-circle me-3" alt="a nice person" data-aos="fade" loading="lazy" />
                              <div>
                                 <span className="h6 fw-5">Jane Doemunsky</span><br />
                                 <small className="text-secondary">COO, The Boo Corp.</small>
                              </div>
                           </div>
                        </div>
                        <div className="rounded-5 bg-black p-5 shadow mt-5" data-aos="zoom-in-right">
                           <div className="fs-1">
                              <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                 <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                              </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                 <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                              </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                 <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                              </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                 <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                              </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-star-half" viewBox="0 0 16 16">
                                 <path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z" />
                              </svg>
                           </div>
                           <p className="text-secondary lead">Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore et
                              dolore magna aliqua. Ut enim ad minim veniam. quis nostrud exercitation ullamco laboris nisi ut aliquip
                              ex ea commodo consequat.</p>
                           <div className="d-flex justify-content-start align-items-center border-top border-secondary pt-3">
                              <Image src="/img/person14.webp" width={96} height={96} className="rounded-circle me-3" alt="a nice person" data-aos="fade" loading="lazy" />
                              <div>
                                 <span className="h6 fw-5">Jane Doemunsky</span><br />
                                 <small className="text-secondary">COO, The Boo Corp.</small>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-12 col-lg-6">
                        <div className="p-5 pt-0" data-aos="fade">
                           <span className="h5 text-secondary fw-lighter">What others have to say</span>
                           <h2 className="display-4">Invidunt ut labore et dolore magna aliquyam erat.</h2>
                        </div>
                        <div className="rounded-5 bg-black p-5 shadow mt-5 gradient" data-aos="zoom-in-left">
                           <div className="fs-1">
                              <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                 <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                              </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                 <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                              </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                 <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                              </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                 <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                              </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                 <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                              </svg>
                           </div>
                           <p className="lead">Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                              consequat.</p>
                           <div className="d-flex justify-content-start align-items-center border-top pt-3">
                              <Image src="/img/person14.webp" width={96} height={96} className="rounded-circle me-3" alt="a nice person" data-aos="fade" loading="lazy" />
                              <div>
                                 <span className="h6 fw-5">Jane Doemunsky</span><br />
                                 <small>COO, The Boo Corp.</small>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </DefaultLayout>
      </>
   );
};

export default Home;
