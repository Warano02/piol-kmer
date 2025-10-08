import { useAppContext } from "@/hooks/useAppContext";
import { classNames } from "@/utils/style";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> { style?: Record<string, string>, dark?: boolean, children: React.ReactNode, rounded?: boolean }

function BtnPrimary({ rounded = false, dark, children, style, ...rest }: Props) {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const { destination, selectedDay, selectedEnd } = useAppContext()
    const animate = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (buttonRef.current) {
            buttonRef.current.style.backgroundPosition = `
      ${100 - (e.nativeEvent.offsetX / buttonRef.current.offsetWidth) * 100}% ${100 - (e.nativeEvent.offsetY / buttonRef.current.offsetHeight) * 100
                }%`;
        }
    };
    const navigate = useNavigate()

    const cliqueHandler = () => {
        const url = `/search?destination=${destination || "any"}${selectedDay && selectedEnd ? "&check-in=" + new Date(selectedDay) + "&check-out=" + new Date(selectedEnd) : ""}`
        navigate(url)
    }

    return (
        <button
            style={style}
            ref={buttonRef}
            onMouseMove={(e) => {
                animate(e);
            }}
            onClick={() => cliqueHandler()}
            className={classNames(
                `${rounded ? "btn-primary-rounded" : "btn-primary"} ${dark ? "dark-bg" : "light-bg"
                } text-sm md:text-md lg:text-xl px-4 py-2 md:py-3 flex cursor-pointer`
            )}
            {...rest}
        >
            {children}
        </button>
    )
}

export default BtnPrimary