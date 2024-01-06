

export default async function Home() {

    return (
        <>
            <div id="Contact" className="container px-8 mx-auto xl:px-5  max-w-screen-lg py-5 lg:py-8">
                <h1 className="mt-2 mb-3 text-3xl font-semibold tracking-tight text-center lg:leading-snug text-brand-primary lg:text-4xl ">Contact</h1>
                <div className="text-center">
                    <p className="text-lg">I am here to help.</p>
                </div>
                <div className="grid my-10 md:grid-cols-2">
                    <div className="my-10">
                        <h2 className="text-2xl font-semibold">Contact Us</h2>
                        <p className="max-w-sm mt-5">Have something to say? I am here to help. Fill up the form or send email or call phone.</p>
                        <div className="mt-5">
                            <div className="flex items-center mt-2 space-x-2 text-dark-600 ">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"></path>
                                </svg>
                                <span>ISLAMABAD</span>
                            </div>
                            <div className="flex items-center mt-2 space-x-2 text-dark-600 ">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"></path>
                                </svg>
                                <a href="mailto:hello@stablotemplate.com">aliwaqas55488@gmail.com</a>
                            </div>
                            <div className="flex items-center mt-2 space-x-2 text-dark-600 ">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"></path>
                                </svg>
                                <a href="tel:+1 (987) 4587 899">+92 323 1529432</a>
                            </div>
                        </div>
                    </div>
                    <div>
                        <form className="my-10">
                            <input type="checkbox" id="" className="hidden" name="botcheck" />
                            <div className="mb-5">
                                <input type="text" placeholder="Full Name" autoComplete="false" className="w-full px-4 py-3 border-2 placeholder:text-gray-800 dark:text-white rounded-md outline-none dark:placeholder:text-gray-200 dark:bg-gray-900   focus:ring-4  border-red-600 focus:border-red-600 ring-red-100 dark:ring-0" name="name" />
                                <div className="mt-1 text-red-600">
                                    <small>Full name is required</small>
                                </div>
                            </div>
                            <div className="mb-5">
                                <label htmlFor="email_address" className="sr-only">Email Address</label>
                                <input id="email_address" type="email" placeholder="Email Address" name="email" autoComplete="false" className="w-full px-4 py-3 border-2 placeholder:text-gray-800 dark:text-white rounded-md outline-none dark:placeholder:text-gray-200 dark:bg-gray-900   focus:ring-4  border-red-600 focus:border-red-600 ring-red-100 dark:ring-0" />
                                <div className="mt-1 text-red-600">
                                    <small>Enter your email</small>
                                </div>
                            </div>
                            <div className="mb-3">
                                <textarea name="message" placeholder="Your Message" className="w-full px-4 py-3 border-2 placeholder:text-gray-800 dark:text-white dark:placeholder:text-gray-200 dark:bg-gray-900   rounded-md outline-none  h-36 focus:ring-4  border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"></textarea>
                            </div>
                            <button type="submit" className="w-full py-4 font-semibol px-7 bg-gradient-to-br from-purple-500 via-blue-500 to-purple-500 hover:bg-slate-800 text-white mt-3  ">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}