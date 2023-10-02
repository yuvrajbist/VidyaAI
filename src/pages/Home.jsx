import {React,useState} from 'react'
import { well } from '../assets';


const features = [
    {
        name: 'Push to deploy',
        description:
            'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.',
    },
    {
        name: 'SSL certificates',
        description:
            'Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.',
    },
    {
        name: 'Simple queues',
        description:
            'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
    },
    {
        name: 'Advanced security',
        description:
            'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
    },
]
const navigation = [
    { name: 'Know your Water', href: '#' },
    { name: 'Blogs', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'About Us', href: '#' },
]

const Home = () => {
    const [text,setText] = useState('');
    const [hid,setHid] = useState(true);

    const handleClick = () => {
        let newText='Introduction to Software Engineering: Software Components, Software Characteristics, Software Crisis, Software Engineering Processes; Software Development Life Cycle(SDLC) Models: Water Fall Model, Prototype Model, Spiral Model; Requirement Engineering Process: Analysis, Documentation, Data Flow Diagrams, SRS Document, IEEE Standards for SRS; Estimation: Estimation of Various Parameters Such as Cost, Efforts, Use Case Point, Class Point Method Estimating, Constructive Cost Models (COCOMO) and its Types, Function Point, Reusability, Object Points, The Putnam Resource Allocation Model; Software Design: Architectural Design, Low Level Design, Modularization, Design Structure Charts, Pseudo Codes, Coupling and Cohesion Measures, Function Oriented Design, Object Oriented Design; Coding Standards: Code Review and Walkthrough, Code Inspection; Testing : Testing Objectives, Testing and Debugging, Various Types of Testing Methods; Software Maintenance: Categories of Maintenance, Maintenance Process, Maintenance Models, Estimation of Maintenance Cost, Regression Testing, Software Re-Engineering, Reverse Engineering, Configuration Management and Certification; Software Quality: The Management Spectrum- (The People, The Product, The Process, The Project), SEI Capability Maturity Model, Verification and Validation, SQA Plans, Software Quality Frameworks, ISO 9126 Model, Certification Case Study.';
        setText(newText)
        setHid(false);
    }
    return (
        <div>
            <div className="flex flex-col items-center justify-center isolate">
                <div className="flex inset-x-0 -z-10 h-[545px] bg-layeredWaves bg-no-repeat bg-cover bg-bottom 2xl:bg-none lg:pl-20">
                    <div className="flex flex-col items-center pt-[50px] justify-start text-center p-5  lg:items-start lg:pt-[70px] lg:text-left lg:p-0 lg:w-3/6">
                        <h1 className='text-3xl w-full text-theme1 pb-6 md:text-5xl'>Here catering your every educational need...</h1>
                        <h2 className='text-lg text-theme2 pb-5'>1. Simply just upload your course curriculum document.
                            <br />2. Click on Upload.
                            <br />
                            3. Enjoy your free study resources.</h2>
                    </div>
                    <div className='flex items-start justify-center lg:w-3/6 lg:h-auto'>
                        <img src={well} alt="well" className='rounded-lg border bg-white lg:mt-20 border-theme2 drop-shadow-xl  border-8' />
                    </div>
                </div>
                <div className="flex flex-col w-full -z-10 bg-white sm:px-10">
                    <h2 className="my-10 text-center text-3xl font-bold">Upload your file here...</h2>
                    <input type="file" id="inpFile" />
                    <button className='inline-block rounded border-2 border-neutral-800 px-4 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-neutral-800 transition duration-150 mt-10 ease-in-out hover:border-neutral-800 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-800' value={text} type="button" id="btnUpload" onClick={handleClick}>Upload</button>
                    <br />
                    <br />
                    <textarea height='400px' id="resultText" placeholder="Your PDF text will appear here..." value={text}></textarea>
                    <div className={`${hid == true ? 'hidden' : ''}`}>
                        <h4 className='mb-5 mt-5'>Introduction to Software Engineering</h4>
                        <div className="w-full flex justify-between">
                            <iframe width="400" height="250" src="https://www.youtube.com/embed/zNRlDF_gaOs?si=3FmPl2qTbff5RzPo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            <iframe width="400" height="250" src="https://www.youtube.com/embed/jPjimIJ-Mr8?si=k__bh-_WzR14eCfx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            <iframe width="400" height="250" src="https://www.youtube.com/embed/soNnQjJ6FBQ?si=Xg-TQ0gRcoziLz25" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                        <h4 className='mb-5 mt-5'>Processes and Models</h4>
                        <div className="w-full flex justify-between">
                            <iframe width="400" height="250" src="https://www.youtube.com/embed/HvAxdpeOoKA?si=-BFOH1HmUfa7N5wO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            <iframe width="400" height="250" src="https://www.youtube.com/embed/y2CnstDLhXM?si=wJqJGH0k7yQRKGgW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            <iframe width="400" height="250" src="https://www.youtube.com/embed/Xs6E-MAJbfE?si=K68DOCITaQ-K2DIk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                        <h4 className='mb-5 mt-5'>Requirement Engineering</h4>
                        <div className="w-full flex justify-between">
                            <iframe width="400" height="250" src="https://www.youtube.com/embed/KN-inGJG540?si=HEuda2yQH-jOtMOw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            <iframe width="400" height="250" src="https://www.youtube.com/embed/p72mCYQBM8o?si=nGZUdKZ18P17xn7m" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            <iframe width="400" height="250" src="https://www.youtube.com/embed/soNnQjJ6FBQ?si=Xg-TQ0gRcoziLz25" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                    </div>
                    {/* <FileUpload/> */}
                </div>
                {/* <div className="flex flex-col w-full pt-[150px] -z-10 h-[730px] lg:h-[700px] bg-waveUpsideDown bg-no-repeat bg-cover bg-top 2xl:bg-none lg:px-20">
                    <h1 className='text-3xl text-center px-10 text-theme1 pb-6 md:text-5xl'>Know about water in your area</h1>
                    <div className="flex w-full justify-center items-center justify-around pb-20 pt-20">
                        <Dropdown trigger="Rajasthan   &#x2794;"></Dropdown>
                        <Dropdown trigger="Jaipur   &#x2794;"></Dropdown>
                    </div>
                    <div class="flex flex-col">
                        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                                <div class="overflow-hidden">
                                    <table class="min-w-full text-left text-sm font-light">
                                        <thead class="border-b font-medium dark:border-neutral-500">
                                            <tr>
                                                <th scope="col" class="px-6 py-4">#</th>
                                                <th scope="col" class="px-6 py-4">Area</th>
                                                <th scope="col" class="px-6 py-4">Waterlevel Depth (Nov-10)</th>
                                                <th scope="col" class="px-6 py-4">Location</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr class="border-b dark:border-neutral-500">
                                                <td class="whitespace-nowrap px-6 py-4 font-medium">1</td>
                                                <td class="whitespace-nowrap px-6 py-4">Durgapura</td>
                                                <td class="whitespace-nowrap px-6 py-4">58.4</td>
                                                <td class="whitespace-nowrap px-6 py-4">(26.845814,75.786564)</td>
                                            </tr>
                                            <tr class="border-b dark:border-neutral-500">
                                                <td class="whitespace-nowrap px-6 py-4 font-medium">2</td>
                                                <td class="whitespace-nowrap px-6 py-4">Jhotwara</td>
                                                <td class="whitespace-nowrap px-6 py-4">66.95</td>
                                                <td class="whitespace-nowrap px-6 py-4">(26.953628,75.743064)</td>
                                            </tr>
                                            <tr class="border-b dark:border-neutral-500">
                                                <td class="whitespace-nowrap px-6 py-4 font-medium">3</td>
                                                <td class="whitespace-nowrap px-6 py-4">MES Jaipur</td>
                                                <td class="whitespace-nowrap px-6 py-4">57.35</td>
                                                <td class="whitespace-nowrap px-6 py-4">(26.912519,75.787514)</td>
                                            </tr>
                                            <tr class="border-b dark:border-neutral-500">
                                                <td class="whitespace-nowrap px-6 py-4 font-medium">4</td>
                                                <td class="whitespace-nowrap px-6 py-4">Sirsi</td>
                                                <td class="whitespace-nowrap px-6 py-4">65.1</td>
                                                <td class="whitespace-nowrap px-6 py-4">(26.951331,75.804003)</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                {/* <div className="flex w-full -z-10  bg-stackedWaves bg-no-repeat bg-cover bg-bottom h-auto 2xl:bg-none px-5">
                    <div className="container mt-10 mx-auto md:pt-6">
                        <section className="mb-[50px]">
                            <h2 className="mb-12 text-center text-3xl font-bold">Pricing</h2>
                            <div className="grid gap-6 lg:grid-cols-3 lg:gap-x-12">
                                <div className="mb-6 lg:mb-0">
                                    <div
                                        className="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                                        <div className="border-b-2 border-neutral-100 border-opacity-100 p-6 text-center dark:border-opacity-10">
                                            <p className="mb-4 text-sm uppercase">
                                                <strong>Basic</strong>
                                            </p>
                                            <h3 className="mb-6 text-3xl">
                                                <strong>$ 129</strong>
                                                <small className="text-base text-neutral-500 dark:text-neutral-300">/year</small>
                                            </h3>

                                            <button type="button"
                                                className="inline-block w-full rounded bg-primary-100 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-theme1 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
                                                data-te-ripple-init data-te-ripple-color="light">
                                                Buy
                                            </button>
                                        </div>
                                        <div className="p-6">
                                            <ol className="list-inside">
                                                <li className="mb-4 flex">
                                                    <TickMark />Unlimited
                                                    updates
                                                </li>
                                                <li className="mb-4 flex">
                                                    <TickMark />Git
                                                    repository
                                                </li>
                                                <li className="mb-4 flex">
                                                    <TickMark />npm
                                                    installation
                                                </li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-6 lg:mb-0">
                                    <div
                                        className="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
                                        <div className="border-b-2 border-neutral-100 border-opacity-100 p-6 text-center">
                                            <p className="mb-4 text-sm uppercase">
                                                <strong>Advanced</strong>
                                            </p>
                                            <h3 className="mb-6 text-3xl">
                                                <strong>$ 299</strong>
                                                <small className="text-base text-neutral-500 ">/year</small>
                                            </h3>
                                            <button type="button"
                                                className="inline-block w-full rounded bg-theme1 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-theme1 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                                                data-te-ripple-init data-te-ripple-color="light">
                                                Buy
                                            </button>
                                        </div>
                                        <div className="p-6">
                                            <ol className="list-inside">
                                                <li className="mb-4 flex">
                                                    <TickMark /> Unlimited
                                                    updates
                                                </li>
                                                <li className="mb-4 flex">
                                                    <TickMark />Git
                                                    repository
                                                </li>
                                                <li className="mb-4 flex">
                                                    <TickMark />npm
                                                    installation
                                                </li>
                                                <li className="mb-4 flex">
                                                    <TickMark />Code examples
                                                </li>
                                                <li className="mb-4 flex">
                                                    <TickMark />Premium
                                                    snippets
                                                </li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-6 lg:mb-0">
                                    <div
                                        className="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                                        <div className="border-b-2 border-neutral-100 border-opacity-100 p-6 text-center dark:border-opacity-10">
                                            <p className="mb-4 text-sm uppercase">
                                                <strong>Enterprise</strong>
                                            </p>
                                            <h3 className="mb-6 text-3xl">
                                                <strong>$ 499</strong>
                                                <small className="text-base text-neutral-500 dark:text-neutral-300">/year</small>
                                            </h3>
                                            <button type="button"
                                                className="inline-block w-full rounded bg-primary-100 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-theme1 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
                                                data-te-ripple-init data-te-ripple-color="light">
                                                Buy
                                            </button>
                                        </div>
                                        <div className="p-6">
                                            <ol className="list-inside">
                                                <li className="mb-4 flex">
                                                    <TickMark />Unlimited
                                                    updates
                                                </li>
                                                <li className="mb-4 flex">
                                                    <TickMark />Git
                                                    repository
                                                </li>
                                                <li className="mb-4 flex">
                                                    <TickMark />npm
                                                    installation
                                                </li>
                                                <li className="mb-4 flex">
                                                    <TickMark />Code examples
                                                </li>
                                                <li className="mb-4 flex">
                                                    <TickMark />Premium
                                                    snippets
                                                </li>
                                                <li className="mb-4 flex">
                                                    <TickMark />Premium
                                                    support
                                                </li>
                                                <li className="mb-4 flex">
                                                    <TickMark />Drag&amp;Drop
                                                    builder
                                                </li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div> */}
                {/* <div className="flex flex-col items-center justify-between w-full -z-10 h-[400px] bg-theme2 bg-no-repeat bg-cover bg-bottom 2xl:bg-none">
                    <hr className="my-2 mx-0 w-11/12 h-0.5 z-10 border-t-0 bg-theme1 opacity-50" />
                    <div className="flex flex-col items-center text-center w-5/6 lg:w-3/6">
                        <h1 className='text-3xl text-theme1 pb-6 md:text-5xl'>Save time and get REAL results on social media.</h1>
                        <h2 className='text-lg text-white pb-5'>By leveraging insights from our network of industry insiders, you'll know exactly when to buy to maximize profit, and exactly when to sell to avoid painful losses.</h2>
                        <FreeTrialButton />
                    </div>
                    <hr className="my-2 mx-0 w-11/12 h-0.5 z-10 border-t-0 bg-theme1 opacity-50" />
                </div> */}
                <div className="flex items-center justify-center w-full -z-10 h-auto pt-5 bg-gradient-to-b from-theme2 to-theme1">
                    <div className="flex flex-col w-full h-full justify-start md:w-2/6">
                        <div className="flex justify-evenly items-center">
                            {navigation.map((item) => (
                                <a key={item.name} href={item.href} className='text-base text-xs leading-7 text-gray-700'>{item.name}</a>
                            ))}
                        </div>
                        <div className="flex justify-center items-center my-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 mx-2 text-gray-700"
                                fill="currentColor"
                                viewBox="0 0 24 24">
                                <path
                                    d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                            </svg>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 mx-2 text-gray-700"
                                fill="currentColor"
                                viewBox="0 0 24 24">
                                <path
                                    d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                            </svg>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 mx-2 text-gray-700"
                                fill="currentColor"
                                viewBox="0 0 24 24">
                                <path
                                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 mx-2 text-gray-700"
                                fill="currentColor"
                                viewBox="0 0 24 24">
                                <path
                                    d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                            </svg>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 mx-2 text-gray-700"
                                fill="currentColor"
                                viewBox="0 0 24 24">
                                <path
                                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                        </div>
                        <div className="flex justify-center items-center my-2">
                            <p className="text-xs text-gray-700">© 2020 Your Company, Inc. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home