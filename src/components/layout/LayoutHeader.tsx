import { cart, logo } from "../../consts";

const Navbar = () => {
    return (
        <div>
            <div className="bg-black text-white px-12 max-sm:px-6 py-2 flex justify-center items-center gap-2 font-mono max-lg:flex-col">
                <p className="text-center text-2xl">NOS OFFRES SE TERMINENT À MINUIT!
                </p>
                <div className="grid grid-flow-col gap-3 text-center auto-cols-max">
                    <div className="flex flex-col p-2 text-neutral bg-white rounded-md text-neutral-content">
                        <span className="countdown font-mono text-xl">
                            <span>23</span>
                        </span>
                    </div>
                    <div className="flex flex-col p-2 text-neutral bg-white rounded-md text-neutral-content">
                        <span className="countdown font-mono text-xl">
                            <span>23</span>
                        </span>
                    </div>
                    <div className="flex flex-col p-2 text-neutral bg-white rounded-md text-neutral-content">
                        <span className="countdown font-mono text-xl">
                            <span>23</span>
                        </span>
                    </div>
                </div>
            </div>
            <div className="px-12 max-sm:px-6 flex justify-between py-6 border-b border-gray-300">
                <div className="flex gap-12 items-center font-semibold text-lg">
                    <img src={logo} className="h-16" alt="" />
                    <div className="flex gap-12 max-xl:hidden">
                        <a href="/">Accueil</a>
                        <a href="/">FAQ</a>
                        <a href="/">Contactez-nous</a>
                        <a href="/">Suivi des commandes</a>
                    </div>
                </div>
                <div className="flex justify-center items-center max-sm:hidden">
                    <div className="relative py-2">
                        <div className="absolute top- right-0">
                            <p className="flex h-2 w-2 items-center justify-center rounded-full bg-black p-3 text-xs text-white">0</p>
                        </div>
                        <img src={cart} className="w-12 h-12" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;