import clsx from "clsx";
import { buttonClasses } from "../styles";

export function Button({children, outline, className}) {

    const type = outline ? "outline" : "prime"

    return (
        <button className={clsx(className, buttonClasses[type])}>
            {children}
        </button>
    )
}