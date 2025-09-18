import { Link } from "react-router-dom"
import Logo from "../Icons"
import { useAppContext } from "@/hooks/useAppContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGlobe, faBars, type IconDefinition } from "@fortawesome/free-solid-svg-icons"
import { faHeart, faCircleQuestion } from "@fortawesome/free-regular-svg-icons"
import { useState } from "react"

import SemiHeader from "./SemiHeader"
import HeaderSearchLayoutOne from "./HeaderSearchLayoutOne"
import HeaderSearchLayoutTwo from "./HeaderSearchLayoutTwo"

interface Props { width?: string,position?:string }
function Header({ width = "container" ,position="sticky"}: Props) {
    const { user, setShowCurrencySettings } = useAppContext()
    const [menu, setMenu] = useState(false)
    const [overlay, setOverlay] = useState(false)
    const [selection,setSelection]=useState<string|null>(null)
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
        <div className={`${position} top-0  px-8 ${!overlay ? "bg-white-secondary" : "bg-gray"} flex justify-between items-center z-50`}>
            <div className={`w-full xl:${width} relative mx-auto py-2 md:py-5 flex items-center justify-between`}>
                <Logo />
                <HeaderMainSection overlay={overlay} setOverlay={setOverlay} selection={selection} setSelection={setSelection} />
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

            {overlay && (
                <div
                    className="fixed top-0 left-0 w-full h-full z-10 bg-[#22222217] bg-opacity-40"
                    onClick={() => {
                        setSelection(null);
                        setOverlay(false);
                        // setHeaderSearch(false);
                    }}
                ></div>)}

        </div>
    )
}

function Li({ text, icon, to }: { text: string, icon: IconDefinition | undefined, to: string }) {
    return <Link to={to} className="hover:bg-gray w-full ">
        {icon && <FontAwesomeIcon icon={icon} />}
        <span>{text} </span>
    </Link>
}

interface Props2 {
    setOverlay: React.Dispatch<React.SetStateAction<boolean>>,
    overlay: boolean,
    selection: string | null,
    setSelection: React.Dispatch<React.SetStateAction<string | null>>,

}
function HeaderMainSection({ overlay, setOverlay, selection, setSelection }: Props2) {
    const { destination, setDestination, selectedDay, selectedEnd } = useAppContext()

    return <>
        <SemiHeader headerSearch={!overlay} />
        <div className="absolute z-20 hidden lg:block w-full"
            style={{
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
            }}>
            <HeaderSearchLayoutOne setOverlay={setOverlay} selectEnd={selectedEnd} selectedDay={selectedDay} headerSearch={false} setSelection={setSelection} selection={selection} destination={destination} />
            <HeaderSearchLayoutTwo selectEnd={selectedEnd} selectedDay={selectedDay} headerSearch={overlay} setSelection={setSelection} selection={selection} destination={destination} setDestination={setDestination} />
        </div>
    </>
}

export default Header