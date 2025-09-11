import { Link } from "react-router-dom"
import Logo from "../Icons"
import homeImg from "@/assets/icon/home.avif"
import { useAppContext } from "@/hooks/useAppContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGlobe, faBars, type IconDefinition } from "@fortawesome/free-solid-svg-icons"
import { faHeart, faCircleQuestion } from "@fortawesome/free-regular-svg-icons"
import { useState } from "react"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
function Header() {
    const { user, setShowCurrencySettings } = useAppContext()
    const [menu, setMenu] = useState(false)
    const list1 = [
        {
            text: "Whitlist",
            icon: faHeart,
            to: "/whitlist"
        },
        {
            text: "trips",
            icon: faHeart,
            to: "/trip"
        },
        {
            text: "messages",
            icon: faHeart,
            to: "/guest/inbox"
        },
        {
            text: "profile",
            icon: faHeart,
            to: "/profil"
        },
    ]
    const list2 = [
        {
            text: "Find a co-host",
            icon: undefined,
            to: "/co-host"
        },
        {
            text: "Gift Cards",
            icon: undefined,
            to: "/giftcards"
        }
    ]
    return (
        <div className="w-full h-[83px] relative px-8 bg-white-secondary flex justify-between items-center">
            <Logo />
            <HeaderMainSection />
            <div className="flex gap-1">
                <Link to={"/host"} className="px-8 py-2 font-medium hover:bg-gray rounded-2xl">{user ? "Switch to hosting" : "Become a Host"} </Link>
                {!user && <span className="w-10 h-10 rounded-full bg-gray cursor-pointer flex items-center justify-center" onClick={() => setShowCurrencySettings(pv => !pv)}><FontAwesomeIcon icon={faGlobe} className="text-gray-500" /> </span>}
                {user && <Link to={"/user/profile"}>
                    <img src={user?.profile} alt="Profile pricture" className="w-10 h-10 rounded-full" />
                </Link>}
                <span className="w-10 h-10 rounded-full bg-gray cursor-pointer flex items-center justify-center" onClick={() => setMenu(pv => !pv)}><FontAwesomeIcon icon={faBars} className="text-gray-500" /> </span>
                {menu && <ul className="absolute w-[276px] py-2 bg-white shadow top-20 right-2 p-4 flex flex-col gap-2" style={{ borderRadius: "10px 0 0 10px" }}>
                    {user && list1.map(el => <Li text={el.text} icon={el.icon} to={el.to} />)}
                    <Li text="Help Center" to="/faq" icon={faCircleQuestion} />
                    <hr />
                    {list2.map(el => <Li text={el.text} icon={el.icon} to={el.to} />)}
                    <hr />
                    {user ? <div className="hover:bg-gray w-full cursor-pointer">Logout</div> : <div className="hover:bg-gray w-full cursor-pointer">Log in or sign up</div>}

                </ul>}
            </div>


        </div>
    )
}

function Li({ text, icon, to }: { text: string, icon: IconDefinition | undefined, to: string }) {
    return <Link to={to} className="hover:bg-gray w-full ">
        {icon && <FontAwesomeIcon icon={icon} />}
        <span>{text} </span>
    </Link>
}

function HeaderMainSection() {
    const { showPlaceFilter } = useAppContext()
    if (!showPlaceFilter) {
        return <div className="h-10  rounded-2xl border-1 font-stretch-110% border-white shadow flex justify-around items-center gap-1 relative px-2 font-medium hover:shadow-xl transition-all">
            <div className="flex items-center cursor-pointer">
                <img src={homeImg} alt="Image of home" width={40} />
                <span> Anywhere</span>
            </div>
            <span className="w-[2px] h-3/4 bg-gray-200"></span>
            <div className="cursor-pointer">
                Anytime
            </div>
            <span className="w-[2px] h-3/4 bg-gray-200"></span>
            <div className="flex items-center cursor-pointer">
                <span>Add guests</span>
                <span className="w-9 h-9 rounded-full bg-primary ml-1 flex justify-center items-center">
                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="text-white" aria-hidden="true" role="presentation" height="12" width="12">
                        <path d="m20.666 20.666 10 10" stroke="#ffff" fill="none"></path>
                        <path d="m24.0002 12.6668c0 6.2593-5.0741 11.3334-11.3334 11.3334-6.2592 0-11.3333-5.0741-11.3333-11.3334 0-6.2592 5.0741-11.3333 11.3333-11.3333 6.2593 0 11.3334 5.0741 11.3334 11.3333z" fill="none" stroke="black"></path>
                    </svg>
                </span>
            </div>
        </div>
    }
    return <Dialog>
        <DialogTrigger asChild>
            <Button variant="outline">Share</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
            <DialogHeader>
                <DialogTitle>Share link</DialogTitle>
                <DialogDescription>
                    Anyone who has this link will be able to view this.
                </DialogDescription>
            </DialogHeader>
            <div className="flex items-center gap-2">
                <div className="grid flex-1 gap-2">
                    <Label htmlFor="link" className="sr-only">
                        Link
                    </Label>
                    <Input
                        id="link"
                        defaultValue="https://ui.shadcn.com/docs/installation"
                        readOnly
                    />
                </div>
            </div>
            <DialogFooter className="sm:justify-start">
                <DialogClose asChild>
                    <Button type="button" variant="secondary">
                        Close
                    </Button>
                </DialogClose>
            </DialogFooter>
        </DialogContent>
    </Dialog>
}

export default Header