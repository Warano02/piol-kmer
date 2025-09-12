import { classNames } from "@/utils/style";
import { useRef } from "react";
interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> { dark: boolean, children: React.ReactNode, rounded: boolean }

function BtnPrimary({ rounded = false, dark, children, ...rest }: Props) {
    const buttonRef = useRef<HTMLButtonElement>(null);

    const animate = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (buttonRef.current) {
            buttonRef.current.style.backgroundPosition = `
      ${100 - (e.nativeEvent.offsetX / buttonRef.current.offsetWidth) * 100}% ${100 - (e.nativeEvent.offsetY / buttonRef.current.offsetHeight) * 100
                }%`;
        }
    };
    return (
        <button
            ref={buttonRef}
            onMouseMove={(e) => {
                animate(e);
            }}
            className={classNames(
                `${rounded ? "btn-primary-rounded" : "btn-primary"} ${dark ? "dark-bg" : "light-bg"
                } text-sm md:text-md lg:text-xl px-4 py-2 md:py-3 flex`
            )}
            {...rest}
        >
            {children}
        </button>
    )
}

export default BtnPrimary