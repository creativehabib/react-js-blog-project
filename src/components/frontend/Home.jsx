import {DamIcon, GithubIcon, HomeIcon, Info, Podcast, TagIcon, TrendingUpIcon, Video, XIcon} from "lucide-react";
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
                            <span className="hidden font-bold lg:inline-block">Shadcn Ui</span>
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
                        <div className="bg-background/80 p-4 rounded-md border">
                            <p className="text-justify">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet culpa debitis dicta
                                maiores
                                molestias
                                quisquam suscipit! Amet consequuntur culpa cum doloremque, doloribus ea, et id illo iusto
                                nesciunt nisi
                                quisquam repudiandae sit, tempore ut? Adipisci ex sapiente temporibus? Aliquam asperiores
                                aspernatur
                                beatae blanditiis consectetur consequuntur debitis dicta distinctio dolor dolorum est eveniet
                                excepturi
                                explicabo fuga fugiat fugit inventore, ipsum iste libero maiores modi molestiae mollitia neque
                                officia
                                quas qui ratione recusandae sapiente sed sit sunt suscipit ullam, veritatis? Aliquam blanditiis
                                commodi
                                culpa excepturi itaque laudantium quia. Ab, ad animi architecto autem corporis cupiditate
                                deleniti
                                deserunt dicta doloremque dolorum eaque eligendi excepturi, expedita facere facilis fugit harum
                                hic illo
                                laboriosam magni neque odio quam quidem quis quisquam repellat reprehenderit repudiandae, sed
                                sit
                                tenetur totam veniam voluptatem voluptates. Accusamus ad deserunt dolore doloremque eos illo
                                impedit
                                molestias necessitatibus, nostrum perspiciatis porro quibusdam sequi veniam! A, autem beatae
                                deserunt
                                dolor dolore dolorem et excepturi impedit ipsa iste itaque iusto laudantium minima, molestias
                                nemo nobis
                                non nulla optio provident quaerat quasi qui quidem repellendus, repudiandae rerum sunt ut vero.
                                Consequuntur eligendi facere incidunt non omnis quod quos veritatis. Accusantium aliquam amet,
                                beatae
                                cum deleniti dicta doloremque eveniet minima officiis quasi quibusdam, reiciendis, repudiandae
                                rerum.
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta dolore eligendi enim error
                                expedita
                                facere, fuga fugiat harum iure laudantium maxime pariatur perspiciatis quam rem veniam vero
                                voluptatem?
                                Accusamus accusantium aliquam aspernatur atque beatae doloribus eligendi illo illum, laboriosam
                                maiores
                                obcaecati officia omnis, perferendis quisquam reprehenderit temporibus veritatis. Eaque, harum,
                                ratione!
                                Ex nam perferendis tempora veritatis? Animi cum illo in non ut! Aliquam eligendi excepturi fuga
                                inventore iure nostrum sapiente. Consequatur eaque iusto, nihil quidem sit voluptate! Assumenda
                                corporis
                                cupiditate deleniti eveniet ipsa iure laboriosam laudantium molestiae nihil nulla officia,
                                perferendis,
                                quaerat quas, rem repellendus saepe soluta vel veniam voluptatem voluptates. At blanditiis fuga fugit id
                                necessitatibus possimus quod sit ullam velit voluptates? Aliquam architecto beatae delectus, distinctio
                                enim eos esse est inventore ipsa laboriosam, magni officiis perspiciatis placeat quidem quo, quod sed
                                velit. Earum incidunt iure nam nemo nostrum, odio omnis tenetur? Fugiat incidunt omnis tempore. Aliquam
                                aspernatur debitis deserunt doloribus error expedita ipsum iusto maxime molestiae molestias nesciunt,
                                nisi nobis pariatur perspiciatis placeat quas quis tempore tenetur. Ab accusamus adipisci amet animi
                                architecto atque autem beatae debitis distinctio earum facere fuga id labore magni, nesciunt, nihil non
                                omnis pariatur porro provident quae quia quidem quod repudiandae ullam ut veritatis! Amet aperiam
                                commodi delectus doloremque dolores dolorum eos obcaecati, omnis praesentium repellat sapiente tenetur
                                vitae! Accusamus, deserunt eveniet hic itaque libero nam nemo quibusdam quis recusandae rem, voluptas
                                voluptate voluptates? Amet assumenda autem distinctio dolore ducimus earum, et fuga fugiat maiores
                                minima nam nemo obcaecati perspiciatis repellat sint soluta veritatis voluptate voluptatum. Accusantium
                                atque blanditiis dolorum enim est, eum ipsa itaque, modi nemo porro provident repellendus rerum saepe
                                sit vero. A accusantium ad amet cum dignissimos doloremque, ducimus eaque error ex facere in laboriosam
                                magni mollitia neque nesciunt nostrum quam quasi ratione repellat, rerum saepe sequi sint sit sunt unde
                                vero vitae voluptas? Aliquid amet animi aperiam asperiores assumenda consequatur culpa debitis doloribus
                                eaque earum eius eos excepturi exercitationem facere facilis illo illum impedit inventore laboriosam
                                laborum laudantium magni maxime molestiae mollitia nam, pariatur porro quia quibusdam quidem ratione
                                rerum saepe sit suscipit tenetur vel voluptates voluptatum. Ab atque, autem corporis cupiditate debitis
                                delectus dignissimos error et eveniet explicabo harum laborum molestias necessitatibus nostrum odio
                                officiis reiciendis rerum ullam velit voluptatibus. Impedit molestiae, tenetur. Ab ad alias aliquid aut
                                blanditiis cum cumque earum enim eum, in, ipsum iste iusto maxime molestiae nihil odio omnis quas quos
                                saepe similique sint sunt suscipit tempora tenetur voluptatibus! Eius et excepturi labore maxime
                                mollitia praesentium quam quod quos ratione velit. Aliquam architecto assumenda autem commodi corporis
                                deserunt dignissimos distinctio dolor ea earum eius excepturi facere fugiat harum ipsam ipsum labore
                                laudantium natus necessitatibus nemo nesciunt nihil, nisi, officia omnis placeat possimus, quasi
                                quisquam recusandae repellat repellendus saepe sapiente sed sint soluta tempora unde vitae. Aperiam
                                deleniti deserunt dolorem dolorum enim eos impedit, ipsa iste nihil numquam quas ratione rerum sapiente
                                sit tempora tempore veniam. Amet beatae incidunt ipsum qui sit. Blanditiis eaque facere illum pariatur
                                saepe. Accusamus autem corporis debitis delectus dicta dolor earum enim, hic minus nemo odit
                                perspiciatis quaerat quas ratione sint? Ad autem commodi cumque cupiditate debitis ducimus earum eveniet
                                facilis inventore libero magni maiores maxime minus nesciunt nisi nostrum numquam porro quasi quis,
                                quisquam quod ratione recusandae rem repellat, saepe tenetur vitae voluptate voluptatem voluptates
                                voluptatum. Aliquid animi, aspernatur aut beatae doloribus earum ex excepturi ipsum labore laboriosam,
                                modi molestias nihil non nulla placeat quod suscipit temporibus veritatis voluptate voluptatum!
                                Accusantium adipisci aperiam architecto cupiditate et facere fuga fugit, impedit in itaque iure odio
                                optio pariatur rerum soluta temporibus ullam. A ab accusantium amet, aperiam asperiores at autem beatae
                                culpa cupiditate dignissimos ducimus eligendi fugiat id laborum maiores modi molestiae nemo non placeat
                                porro possimus provident quae quas qui quia quis quod recusandae repudiandae, saepe similique veritatis
                                voluptate voluptatem voluptatibus! Consectetur ea, eaque ex facere ipsa praesentium qui temporibus
                                tenetur? Minus molestiae neque nisi rem totam ullam! Alias harum, illum minus optio reiciendis unde
                                veniam! Aperiam consectetur et ex nobis optio quas quis sapiente. Ab cumque delectus distinctio, dolores
                                facere, fugiat id illum inventore iusto minima minus modi, odit quaerat rem similique! Aliquid aperiam
                                asperiores commodi corporis culpa earum enim ex exercitationem fugit illum in iste laboriosam mollitia
                                odit, omnis quas qui quod quos rerum tenetur veritatis voluptatem, voluptatum! Commodi dicta facilis
                                harum molestiae obcaecati repellendus tempore voluptatibus! Adipisci aperiam consectetur cum dolore
                                dolorum error esse hic illo incidunt ipsa molestias omnis pariatur, quia quos reprehenderit sed
                                voluptatem? Autem deleniti earum eius ipsum maiores perferendis reiciendis reprehenderit rerum sit
                                voluptatem. Eos, esse et harum nam non repellat sapiente. A, accusamus ad commodi consectetur delectus
                                doloribus eaque, eius eveniet facere fuga ipsam, nisi placeat quas quibusdam velit! Aliquam aliquid
                                architecto debitis deserunt, dicta dolore doloremque dolorum earum eius expedita facilis ipsam iste
                                iure, laboriosam laudantium minus nisi nobis non nulla porro quasi quidem quis rem similique sint unde
                                vitae voluptas. Ad aspernatur cum cupiditate doloribus eius, explicabo harum illo impedit ipsa ipsam
                                laboriosam magni natus numquam rem repellendus, sed similique tenetur, vitae voluptates voluptatibus!
                                Aut deleniti earum explicabo iure molestiae. Alias, atque delectus doloremque ea eveniet explicabo id
                                illum inventore mollitia, odio recusandae voluptas voluptatem voluptates. Ad architecto delectus
                                doloribus dolorum earum error et excepturi explicabo fuga impedit in inventore ipsum laudantium libero
                                molestiae non numquam quis quisquam recusandae reiciendis, saepe temporibus vero vitae! Accusamus
                                aliquam assumenda at aut consectetur consequatur culpa cumque debitis distinctio dolor doloribus dolorum
                                ea earum eius et excepturi facere illum, in incidunt ipsa iure magni nesciunt nobis non officia officiis
                                omnis, perspiciatis quae quo quod ratione rem sed unde velit vitae voluptas voluptatem. A adipisci, amet
                                aperiam, corporis earum et illo in molestias natus neque numquam omnis pariatur provident quo,
                                recusandae repudiandae sapiente ullam voluptas! Alias amet atque corporis deleniti dolor eligendi ex id
                                in nulla, odit ratione reprehenderit, repudiandae similique sunt, unde? A, esse, saepe. Architecto
                                aspernatur autem beatae blanditiis consequatur consequuntur culpa dolorem ea error esse expedita fuga
                                fugit harum illum laboriosam magnam molestiae, molestias natus numquam officia sapiente sunt vel
                                veritatis! Dolorem iste non voluptatum! Accusamus animi aspernatur commodi consequuntur, culpa doloribus
                                et exercitationem itaque molestiae odit perferendis perspiciatis qui, quo ratione vel vitae voluptatum!
                                Dolorem inventore labore laboriosam rem, sed tempore temporibus tenetur voluptatem? Adipisci alias autem
                                beatae exercitationem illum libero magnam, tenetur vitae! Architecto at consectetur dolorum error eum
                                impedit ipsum, laboriosam maiores, natus porro quasi repellendus voluptates. Aliquid at aut dolor ea
                                esse hic magni molestias natus nisi nostrum, numquam quaerat quas ratione repellat saepe tempora, ut. A
                                aperiam magni molestias quam sint! Ab aliquid, amet animi asperiores assumenda consectetur cupiditate
                                deleniti, deserunt ea enim eum explicabo facere fugit id inventore ipsum iste iusto laboriosam modi
                                neque nostrum perspiciatis possimus provident quae quas qui quia quisquam repellat tempora vel veritatis
                                vitae voluptate voluptatem. Accusantium, animi aut beatae commodi corporis eos esse eum expedita facere
                                fugit illo incidunt ipsum iusto laboriosam laborum libero magni minus mollitia natus necessitatibus
                                numquam pariatur quae quam quia quidem quisquam ratione tenetur, veritatis vitae voluptatem. Accusantium
                                aspernatur in laborum saepe soluta? Assumenda beatae deserunt facilis fuga maxime minima molestiae nemo
                                obcaecati, odio odit omnis quam sit velit. Aperiam consequuntur delectus, impedit maxime quis
                                reiciendis? Adipisci assumenda beatae, cumque dicta iste laudantium magni minus nemo nesciunt officia
                                perspiciatis placeat porro possimus quas qui quo rerum sequi similique voluptate voluptatum. Alias
                                aliquid, atque commodi consequatur dignissimos dolore ea facere, fuga neque nesciunt repellendus
                                voluptate! Aliquam aut blanditiis culpa et reiciendis! Amet dolore error iure magni non nulla quae quas
                                totam veritatis voluptatum. Alias animi aut delectus eius id itaque laudantium molestiae neque nisi non
                                obcaecati, officiis omnis quidem quisquam tempora ut voluptas voluptatibus voluptatum! Architecto atque
                                consequuntur culpa deleniti dicta dolor, dolorem ducimus, enim excepturi fuga illo, illum labore modi
                                nemo neque numquam officia placeat quae quam quas qui sed sequi totam? Adipisci architecto autem commodi
                                consequuntur corporis culpa deserunt distinctio dolore eligendi enim eos error ex expedita harum hic
                                impedit incidunt inventore ipsam ipsum labore laborum minus molestias nam necessitatibus nihil nobis
                                omnis pariatur perferendis quo recusandae repellat saepe similique sunt totam ullam, ut voluptatum!
                                Beatae corporis cum eius obcaecati provident quia, repellendus voluptatem. Ab assumenda, at distinctio
                                dolorem eaque eius in quisquam rem velit voluptate! Iusto libero molestiae quidem? Ab debitis deleniti
                                dolorem excepturi itaque nisi officia porro temporibus! Adipisci alias architecto autem cum dolores
                                doloribus fuga illo iste iure molestiae nobis, nulla officia perspiciatis placeat quaerat quam rem
                                tempora. Ab assumenda aut cumque debitis delectus dignissimos, enim, eos est facilis in natus nulla,
                                officiis perferendis porro quas quisquam recusandae voluptatum. Aperiam cumque doloribus maxime neque!
                                Ad adipisci aspernatur consequatur doloremque, dolores ea, facilis fugiat illum inventore laudantium
                                nihil non porro quasi quia quibusdam sint soluta unde voluptate? Aperiam aspernatur beatae doloribus
                                facere illum laudantium molestiae possimus quia? Commodi cupiditate, debitis dicta distinctio fugit
                                incidunt magnam minima minus nulla obcaecati odit quae quidem repellat repellendus repudiandae unde vel!
                                Aliquid architecto delectus dolore magni nihil officia quam quod, reprehenderit voluptatum. Nemo,
                                numquam sequi. Doloribus dolorum error eum fugiat harum itaque laboriosam nostrum officiis quos ratione!
                                Adipisci aliquid asperiores blanditiis commodi consectetur consequuntur, debitis delectus dignissimos
                                earum ex explicabo facilis fuga id iste laborum, maiores, minima molestias mollitia necessitatibus neque
                                nisi odio officia officiis quaerat quia quis quod quos ratione reiciendis repudiandae saepe temporibus
                                vel voluptatem? Animi aperiam assumenda commodi consequatur consequuntur corporis dolor eos facere
                                facilis, harum hic labore magni maiores nam nulla perferendis perspiciatis provident, quia rem
                                reprehenderit tempore vel velit. Ad aperiam culpa cumque debitis earum eius eligendi, enim eveniet
                                exercitationem id, ipsam iure laborum non odit provident quibusdam ratione reiciendis tempore voluptas
                                voluptatibus? Animi aperiam asperiores autem beatae deleniti deserunt eligendi enim ex fugiat, illum
                                ipsum laboriosam necessitatibus optio porro possimus praesentium repudiandae vel. Aliquam amet autem
                                consequatur deserunt dolor eum neque odio reiciendis rem voluptatibus. Consectetur dicta dolorem
                                eligendi eos iusto nesciunt nulla perspiciatis quisquam soluta, veniam vitae voluptate! Alias
                                consequuntur eligendi enim exercitationem, in modi mollitia neque odio possimus veniam. Ab aperiam at
                                blanditiis delectus, dignissimos dolor ducimus fuga, incidunt ipsum modi non nulla odio pariatur porro
                                quaerat quibusdam repudiandae sint soluta sunt velit! A, adipisci dicta dolores excepturi, illo magni
                                minima nemo obcaecati perspiciatis quae recusandae sed sunt vero? A accusantium at, atque consequatur
                                debitis deleniti error esse excepturi itaque iusto nihil nisi optio perferendis quae quaerat quas quasi
                                quod reiciendis rerum soluta tempore tenetur veniam vero voluptas voluptatum? Aliquid, minus veniam?
                                Aliquid amet assumenda beatae corporis delectus, distinctio, dolorum eaque expedita maiores numquam
                                obcaecati optio porro quaerat saepe sapiente totam voluptates. Blanditiis doloribus earum esse excepturi
                                magni, maxime nulla porro repellat? Aperiam consequatur eos fugiat magni nihil provident soluta suscipit
                                tempore! Labore, minus, sit. A aperiam aspernatur, atque consequatur, culpa deleniti dolore doloribus
                                ducimus enim eum eveniet ex explicabo facere id illo illum iusto molestiae natus nemo neque nisi nobis
                                numquam obcaecati omnis quibusdam quod ratione repellat reprehenderit sed sint tenetur vel vero
                                voluptatum! Asperiores, natus, omnis. Ad, consequuntur corporis dolorum fugiat id labore, modi molestiae
                                molestias odit perspiciatis, quo similique sit voluptatem! Alias asperiores aut commodi consectetur
                                cumque delectus dolor dolore doloribus earum error eum ex harum inventore ipsa ipsam iure iusto minima
                                molestiae molestias nam neque nulla omnis qui quia reiciendis rerum suscipit tempora, vel veritatis
                                voluptatum? Accusantium aut cum, dolore eveniet, exercitationem fugiat hic illum incidunt libero natus
                                nostrum officia placeat quas quod reiciendis similique tempore tenetur. Culpa eligendi et eum expedita
                                libero nesciunt quas quia, quisquam sapiente! Alias ipsum modi nobis odio officiis placeat quos sapiente
                                veniam vero voluptates. Accusantium aut dolore doloribus fugit, illum ipsam laboriosam nam natus neque
                                numquam omnis, optio perspiciatis possimus qui repellendus! A amet asperiores assumenda consectetur
                                culpa, cumque dolores doloribus ea excepturi, facere facilis fugiat id illo in inventore ipsam itaque
                                laudantium maxime molestiae molestias natus nemo neque non nostrum numquam odit pariatur perspiciatis
                                quaerat quam quasi quia quidem quis quod quos repudiandae similique voluptatum? Aliquid animi cum
                                delectus dolore esse est fugit illo magni maxime non, optio sint unde vel voluptatibus voluptatum.
                                Consequatur dolores expedita ipsam magnam maiores, nam voluptatibus? Cum iste laudantium placeat
                                provident, qui similique vel.
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni nulla possimus quidem? A ab accusamus
                                aliquam asperiores atque consequuntur, debitis delectus distinctio dolorem ducimus error et ex fugit
                                iste itaque iure maxime molestiae possimus provident quisquam recusandae reiciendis, repudiandae
                                sapiente temporibus vel? Aspernatur at commodi doloribus fugit, illum laudantium libero optio porro qui
                                reiciendis reprehenderit sed! A aliquam amet consequuntur debitis delectus dolore doloribus
                                exercitationem facere fugiat harum illum incidunt iusto laboriosam magni maiores nemo nesciunt nihil
                                nisi nobis officiis omnis perferendis placeat porro quam quas quos ratione repellat rerum sed sit ullam,
                                velit veritatis vitae. Ab architecto blanditiis consequatur debitis dignissimos doloremque eius eos
                                error excepturi exercitationem expedita id, laudantium magnam minima necessitatibus neque nesciunt nihil
                                obcaecati odio omnis optio perspiciatis quaerat quas quo quod repellat totam vel, velit voluptas
                                voluptatem? Alias blanditiis enim excepturi, explicabo molestiae quisquam quo repellat saepe similique
                                tenetur! Assumenda beatae delectus eius exercitationem illum ipsam quos repudiandae! Assumenda dolores
                                doloribus ea officia praesentium quam quod veritatis. A aliquid blanditiis consequatur delectus in
                                libero odio, officia perferendis suscipit voluptates! Ab deleniti dicta doloremque dolores illo, impedit
                                iusto natus necessitatibus nesciunt omnis, pariatur perferendis porro praesentium provident saepe
                                sapiente sed ut voluptas. Accusantium aliquam aliquid consequatur dicta enim incidunt necessitatibus
                                officia pariatur quas, quia quibusdam quos sint soluta ullam veritatis? Accusamus commodi dolorem ea eum
                                exercitationem maiores nisi porro provident saepe tempora? Earum esse eum harum incidunt laborum maxime
                                non, similique sit tenetur velit. Consectetur eaque, fugiat non omnis optio quo rem. Adipisci aliquam
                                asperiores assumenda blanditiis commodi dicta, dignissimos distinctio doloribus, ducimus ea enim est
                                exercitationem explicabo id illo iure laboriosam magnam magni minima molestias mollitia nobis numquam
                                pariatur perferendis quaerat qui ratione reprehenderit, repudiandae sed soluta totam vel voluptas
                                voluptates? A facilis ipsa nostrum quasi, quos vel? Delectus eaque natus qui, ratione totam ullam.
                            </p>
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