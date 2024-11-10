import clsx from "clsx";

export function Header({children, className}) {
    return (
        <div className={clsx(className, "px-4 w-full h-20 shadow bg-white flex items-center")}>
            {children}
        </div>
    )
}