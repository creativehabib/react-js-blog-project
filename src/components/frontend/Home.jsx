import {Bookmark, BookMarked, CommandIcon, DamIcon, EyeIcon, GithubIcon, HomeIcon, Info, MessageSquareTextIcon, Podcast, Share2Icon, ShareIcon, TagIcon, TrendingUpIcon, Video, XIcon} from "lucide-react";
import { ModeToggle } from "@/components/ThemeToggle.jsx";
import { Button } from "@/components/ui/button.jsx";

const Home = () => {
    return (
        <div className="relative flex min-h-screen flex-col bg-accent">
            <header className="sticky top-0 z-50 shadow-md border-b dark:border-gray-800 px-2 lg:px-8 sm:px-2 md:px-4 w-full border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container flex h-14 max-w-screen-2xl items-center">
                    <div className="mr-4 hidden md:flex">
                        <a href={'/'} className="mr-4 flex items-center space-x-2 lg:mr-6">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="h-6 w-6">
                                <rect width="256" height="256" fill="none"></rect>
                                <line x1="208" y1="128" x2="128" y2="208" fill="none" stroke="currentColor"
                                      stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></line>
                                <line x1="192" y1="40" x2="40" y2="192" fill="none" stroke="currentColor"
                                      stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></line>
                            </svg>
                            <span className="hidden font-bold lg:inline-block">Creativehabib</span>
                        </a>

                        <nav className="flex items-center gap-4 text-sm lg:gap-6"><a
                            className="transition-colors hover:text-foreground/80 text-foreground/60"
                            href="/docs">Docs</a><a
                            className="transition-colors hover:text-foreground/80 text-foreground"
                            href="/docs/components">Components</a><a
                            className="transition-colors hover:text-foreground/80 text-foreground/60"
                            href="/blocks">Blocks</a><a
                            className="transition-colors hover:text-foreground/80 text-foreground/60"
                            href="/charts">Charts</a><a
                            className="transition-colors hover:text-foreground/80 text-foreground/60"
                            href="/themes">Themes</a><a
                            className="transition-colors hover:text-foreground/80 text-foreground/60"
                            href="/examples">Examples</a><a
                            className="transition-colors hover:text-foreground/80 text-foreground/60"
                            href="/colors">Colors</a></nav>
                    </div>
                    <button
                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:text-accent-foreground h-9 py-2 mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
                        type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:R15u6ja:"
                        data-state="closed">
                        <svg stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                             className="h-5 w-5">
                            <path d="M3 5H11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                  stroke-linejoin="round"></path>
                            <path d="M3 12H16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                  stroke-linejoin="round"></path>
                            <path d="M3 19H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                  stroke-linejoin="round"></path>
                        </svg>
                        <span className="sr-only">Toggle Menu</span></button>
                    <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                        <div className="w-full flex-1 md:w-auto md:flex-none">
                            <button
                                className="inline-flex items-center gap-2 whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input hover:bg-accent hover:text-accent-foreground px-4 py-2 relative h-8 w-full justify-start rounded-[0.5rem] bg-muted/50 text-sm font-normal text-muted-foreground shadow-none sm:pr-12 md:w-40 lg:w-64">
                                <span className="hidden lg:inline-flex">Search documentation...</span><span
                                className="inline-flex lg:hidden">Search...</span><kbd
                                className="pointer-events-none absolute right-[0.3rem] top-[0.3rem] hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex"><span
                                className="text-xs">⌘</span>K</kbd>
                            </button>
                        </div>
                        <nav className="flex items-center space-x-2">
                            <a href={'/'}>
                                <Button variant="outline" size="icon" className="h-8 w-8">
                                    <GithubIcon/>
                                </Button>
                            </a>
                            <Button variant="outline" size="icon" className="h-8 w-8">
                                <XIcon/>
                            </Button>
                            <ModeToggle/>
                        </nav>
                    </div>
                </div>
            </header>
            <div className="px-2 lg:px-8 md:px-4 mt-4">
                <div className="grid grid-cols-12 gap-4">
                    {/*Left column*/}
                    <div className="col-span-2">
                        {/*Content for the left column*/}
                        <div className="sticky top-0">
                            <div className="p-4 border rounded-md bg-background/80">
                                <h1 className="text-xl font-bold mb-2">DEV Community is a community of 2,279,267 amazing
                                    developers</h1>
                                <p>We're a place where coders share, stay up-to-date and grow their careers.</p>
                                <Button variant="outline" className="w-full mt-4">Create Article</Button>
                            </div>
                            <nav
                                className="p-4">
                                <ul className="flex flex-col space-y-4">
                                    <li>
                                        <a href="/"
                                           className="flex items-center space-x-2 hover:text-gray-500 dark:hover:text-gray-300">
                                            <TrendingUpIcon size={18}/>
                                            <span>Popular</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/"
                                           className="flex items-center space-x-2 hover:text-gray-500 dark:hover:text-gray-300">
                                            <DamIcon size={18}/>
                                            <span>DEV++</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/"
                                           className="flex items-center space-x-2 hover:text-gray-500 dark:hover:text-gray-300">
                                            <Podcast size={18}/>
                                            <span>Podcasts</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/"
                                           className="flex items-center space-x-2 hover:text-gray-500 dark:hover:text-gray-300">
                                            <Video className="h-5 w-5"/>
                                            <span>Video</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/"
                                           className="flex items-center space-x-2 hover:text-gray-500 dark:hover:text-gray-300">
                                            <TagIcon size={18}/>
                                            <span>Tags</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/"
                                           className="flex items-center space-x-2 hover:text-gray-500 dark:hover:text-gray-300">
                                            <Info size={18}/>
                                            <span>DEV Help</span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                            <div className="p-4 border rounded-md bg-background/80">
                                <h1 className="text-xl font-bold mb-2">DEV Community is a community of 2,279,267 amazing
                                    developers</h1>
                                <p>We're a place where coders share, stay up-to-date and grow their careers.</p>
                                <Button variant="outline" className="w-full mt-4">Create Article</Button>
                            </div>

                        </div>


                    </div>

                    {/*Middle column*/}
                    <div className="col-span-6">
                        {/*Content for the middle column*/}

                        {/* Single Post item */}
                        <div className="bg-background/80 p-4 rounded-md border mb-4">
                            <div className="flex items-center">
                                <div className="mr-3">
                                    <a href="">
                                        <img className="h-10 w-10 rounded-full" src="https://media2.dev.to/dynamic/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F38578%2F5cadc1f1-fbca-496d-a375-667c21d9c122.jpg"/>
                                    </a>
                                </div>
                                <div className="flex flex-col">
                                    <a href="">
                                        Michael Tharrington
                                    </a>
                                    <span>0ct 29</span>
                                </div>
                            </div>
                            <div className="pl-12">
                                <div>
                                    <div className=" my-4">
                                        <h2 className="text-2xl font-bold transition-all duration-300 hover:text-blue-800 hover:underline">
                                            <a href="">
                                            🚀 pgai Vectorizer: Automate AI Embeddings With One SQL Command in PostgreSQL
                                            </a>
                                        </h2>
                                    </div>
                                    <div className="mt-5">
                                        <a href="" className="mr-2 p-1.5 rounded-md hover:bg-gray-200 dark:hover:bg-slate-800">#podcast</a>
                                        <a href="" className="mr-2 p-1.5 rounded-md hover:bg-gray-200 dark:hover:bg-slate-800">#career</a>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between mt-5">
                                    <div className="flex items-center space-x-6">
                                        <div className="flex items-center space-x-1.5">
                                            <EyeIcon size={18}/>
                                            <span>3</span>
                                        </div>
                                        <div className="flex items-center space-x-1.5">
                                            <MessageSquareTextIcon size={18}/>
                                            <span>3</span>
                                        </div>
                                        <div>
                                            <Share2Icon size={18}/>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-4">
                                        <span>3 min read</span>
                                        <a href=""><Bookmark size={20}/></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Single Post item */}
                        <div className="bg-background/80 p-4 rounded-md border mb-4">
                            <div className="flex items-center">
                                <div className="mr-3">
                                    <a href="">
                                        <img className="h-10 w-10 rounded-full" src="https://media2.dev.to/dynamic/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F38578%2F5cadc1f1-fbca-496d-a375-667c21d9c122.jpg"/>
                                    </a>
                                </div>
                                <div className="flex flex-col">
                                    <a href="">
                                        Michael Tharrington
                                    </a>
                                    <span>0ct 29</span>
                                </div>
                            </div>
                            <div className="pl-12">
                                <div>
                                    <div className=" my-4">
                                        <h2 className="text-2xl font-bold transition-all duration-300 hover:text-blue-800 hover:underline">
                                            <a href="">
                                            🚀 pgai Vectorizer: Automate AI Embeddings With One SQL Command in PostgreSQL
                                            </a>
                                        </h2>
                                    </div>
                                    <div className="mt-5">
                                        <a href="" className="mr-2 p-1.5 rounded-md hover:bg-gray-200 dark:hover:bg-slate-800">#podcast</a>
                                        <a href="" className="mr-2 p-1.5 rounded-md hover:bg-gray-200 dark:hover:bg-slate-800">#career</a>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between mt-5">
                                    <div className="flex items-center space-x-6">
                                        <div className="flex items-center space-x-1.5">
                                            <EyeIcon size={18}/>
                                            <span>3</span>
                                        </div>
                                        <div className="flex items-center space-x-1.5">
                                            <MessageSquareTextIcon size={18}/>
                                            <span>3</span>
                                        </div>
                                        <div>
                                            <Share2Icon size={18}/>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-4">
                                        <span>3 min read</span>
                                        <a href=""><Bookmark size={20}/></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Single Post item */}
                        <div className="bg-background/80 p-4 rounded-md border mb-4">
                            <div className="flex items-center">
                                <div className="mr-3">
                                    <a href="">
                                        <img className="h-10 w-10 rounded-full" src="https://media2.dev.to/dynamic/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F38578%2F5cadc1f1-fbca-496d-a375-667c21d9c122.jpg"/>
                                    </a>
                                </div>
                                <div className="flex flex-col">
                                    <a href="">
                                        Michael Tharrington
                                    </a>
                                    <span>0ct 29</span>
                                </div>
                            </div>
                            <div className="pl-12">
                                <div>
                                    <div className=" my-4">
                                        <h2 className="text-2xl font-bold transition-all duration-300 hover:text-blue-800 hover:underline">
                                            <a href="">
                                            🚀 pgai Vectorizer: Automate AI Embeddings With One SQL Command in PostgreSQL
                                            </a>
                                        </h2>
                                    </div>
                                    <div className="mt-5">
                                        <a href="" className="mr-2 p-1.5 rounded-md hover:bg-gray-200 dark:hover:bg-slate-800">#podcast</a>
                                        <a href="" className="mr-2 p-1.5 rounded-md hover:bg-gray-200 dark:hover:bg-slate-800">#career</a>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between mt-5">
                                    <div className="flex items-center space-x-6">
                                        <div className="flex items-center space-x-1.5">
                                            <EyeIcon size={18}/>
                                            <span>3</span>
                                        </div>
                                        <div className="flex items-center space-x-1.5">
                                            <MessageSquareTextIcon size={18}/>
                                            <span>3</span>
                                        </div>
                                        <div>
                                            <Share2Icon size={18}/>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-4">
                                        <span>3 min read</span>
                                        <a href=""><Bookmark size={20}/></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Single Post item */}
                        <div className="bg-background/80 p-4 rounded-md border mb-4">
                            <div className="flex items-center">
                                <div className="mr-3">
                                    <a href="">
                                        <img className="h-10 w-10 rounded-full" src="https://media2.dev.to/dynamic/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F38578%2F5cadc1f1-fbca-496d-a375-667c21d9c122.jpg"/>
                                    </a>
                                </div>
                                <div className="flex flex-col">
                                    <a href="">
                                        Michael Tharrington
                                    </a>
                                    <span>0ct 29</span>
                                </div>
                            </div>
                            <div className="pl-12">
                                <div>
                                    <div className=" my-4">
                                        <h2 className="text-2xl font-bold transition-all duration-300 hover:text-blue-800 hover:underline">
                                            <a href="">
                                            🚀 pgai Vectorizer: Automate AI Embeddings With One SQL Command in PostgreSQL
                                            </a>
                                        </h2>
                                    </div>
                                    <div className="mt-5">
                                        <a href="" className="mr-2 p-1.5 rounded-md hover:bg-gray-200 dark:hover:bg-slate-800">#podcast</a>
                                        <a href="" className="mr-2 p-1.5 rounded-md hover:bg-gray-200 dark:hover:bg-slate-800">#career</a>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between mt-5">
                                    <div className="flex items-center space-x-6">
                                        <div className="flex items-center space-x-1.5">
                                            <EyeIcon size={18}/>
                                            <span>3</span>
                                        </div>
                                        <div className="flex items-center space-x-1.5">
                                            <MessageSquareTextIcon size={18}/>
                                            <span>3</span>
                                        </div>
                                        <div>
                                            <Share2Icon size={18}/>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-4">
                                        <span>3 min read</span>
                                        <a href=""><Bookmark size={20}/></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Single Post item */}
                        <div className="bg-background/80 p-4 rounded-md border mb-4">
                            <div className="flex items-center">
                                <div className="mr-3">
                                    <a href="">
                                        <img className="h-10 w-10 rounded-full" src="https://media2.dev.to/dynamic/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F38578%2F5cadc1f1-fbca-496d-a375-667c21d9c122.jpg"/>
                                    </a>
                                </div>
                                <div className="flex flex-col">
                                    <a href="">
                                        Michael Tharrington
                                    </a>
                                    <span>0ct 29</span>
                                </div>
                            </div>
                            <div className="pl-12">
                                <div>
                                    <div className=" my-4">
                                        <h2 className="text-2xl font-bold transition-all duration-300 hover:text-blue-800 hover:underline">
                                            <a href="">
                                            🚀 pgai Vectorizer: Automate AI Embeddings With One SQL Command in PostgreSQL
                                            </a>
                                        </h2>
                                    </div>
                                    <div className="mt-5">
                                        <a href="" className="mr-2 p-1.5 rounded-md hover:bg-gray-200 dark:hover:bg-slate-800">#podcast</a>
                                        <a href="" className="mr-2 p-1.5 rounded-md hover:bg-gray-200 dark:hover:bg-slate-800">#career</a>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between mt-5">
                                    <div className="flex items-center space-x-6">
                                        <div className="flex items-center space-x-1.5">
                                            <EyeIcon size={18}/>
                                            <span>3</span>
                                        </div>
                                        <div className="flex items-center space-x-1.5">
                                            <MessageSquareTextIcon size={18}/>
                                            <span>3</span>
                                        </div>
                                        <div>
                                            <Share2Icon size={18}/>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-4">
                                        <span>3 min read</span>
                                        <a href=""><Bookmark size={20}/></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Single Post item */}
                        <div className="bg-background/80 p-4 rounded-md border mb-4">
                            <div className="flex items-center">
                                <div className="mr-3">
                                    <a href="">
                                        <img className="h-10 w-10 rounded-full" src="https://media2.dev.to/dynamic/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F38578%2F5cadc1f1-fbca-496d-a375-667c21d9c122.jpg"/>
                                    </a>
                                </div>
                                <div className="flex flex-col">
                                    <a href="">
                                        Michael Tharrington
                                    </a>
                                    <span>0ct 29</span>
                                </div>
                            </div>
                            <div className="pl-12">
                                <div>
                                    <div className=" my-4">
                                        <h2 className="text-2xl font-bold transition-all duration-300 hover:text-blue-800 hover:underline">
                                            <a href="">
                                            🚀 pgai Vectorizer: Automate AI Embeddings With One SQL Command in PostgreSQL
                                            </a>
                                        </h2>
                                    </div>
                                    <div className="mt-5">
                                        <a href="" className="mr-2 p-1.5 rounded-md hover:bg-gray-200 dark:hover:bg-slate-800">#podcast</a>
                                        <a href="" className="mr-2 p-1.5 rounded-md hover:bg-gray-200 dark:hover:bg-slate-800">#career</a>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between mt-5">
                                    <div className="flex items-center space-x-6">
                                        <div className="flex items-center space-x-1.5">
                                            <EyeIcon size={18}/>
                                            <span>3</span>
                                        </div>
                                        <div className="flex items-center space-x-1.5">
                                            <MessageSquareTextIcon size={18}/>
                                            <span>3</span>
                                        </div>
                                        <div>
                                            <Share2Icon size={18}/>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-4">
                                        <span>3 min read</span>
                                        <a href=""><Bookmark size={20}/></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Single Post item */}
                        <div className="bg-background/80 p-4 rounded-md border mb-4">
                            <div className="flex items-center">
                                <div className="mr-3">
                                    <a href="">
                                        <img className="h-10 w-10 rounded-full" src="https://media2.dev.to/dynamic/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F38578%2F5cadc1f1-fbca-496d-a375-667c21d9c122.jpg"/>
                                    </a>
                                </div>
                                <div className="flex flex-col">
                                    <a href="">
                                        Michael Tharrington
                                    </a>
                                    <span>0ct 29</span>
                                </div>
                            </div>
                            <div className="pl-12">
                                <div>
                                    <div className=" my-4">
                                        <h2 className="text-2xl font-bold transition-all duration-300 hover:text-blue-800 hover:underline">
                                            <a href="">
                                            🚀 pgai Vectorizer: Automate AI Embeddings With One SQL Command in PostgreSQL
                                            </a>
                                        </h2>
                                    </div>
                                    <div className="mt-5">
                                        <a href="" className="mr-2 p-1.5 rounded-md hover:bg-gray-200 dark:hover:bg-slate-800">#podcast</a>
                                        <a href="" className="mr-2 p-1.5 rounded-md hover:bg-gray-200 dark:hover:bg-slate-800">#career</a>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between mt-5">
                                    <div className="flex items-center space-x-6">
                                        <div className="flex items-center space-x-1.5">
                                            <EyeIcon size={18}/>
                                            <span>3</span>
                                        </div>
                                        <div className="flex items-center space-x-1.5">
                                            <MessageSquareTextIcon size={18}/>
                                            <span>3</span>
                                        </div>
                                        <div>
                                            <Share2Icon size={18}/>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-4">
                                        <span>3 min read</span>
                                        <a href=""><Bookmark size={20}/></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/*Right column*/}
                    <div className="col-span-4">
                        {/*Content for the right column*/}
                        <div className="sticky top-0">
                            <div className="p-4 border rounded-md bg-background/80">
                                <h1 className="text-xl font-bold mb-2">DEV Community is a community of 2,279,267 amazing
                                    developers</h1>
                                <p>We're a place where coders share, stay up-to-date and grow their careers.</p>
                                <Button variant="outline" className="w-full mt-4">Create Article</Button>
                            </div>

                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Home;