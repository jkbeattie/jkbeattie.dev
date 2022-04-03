type ButtonProps = {
    buttonType: string
}

export const Button: React.FC<ButtonProps> = ({
    buttonType,
    children
}) => {
    return (
        <button
            className={buttonType}>
            {children}
        </button>
    )
}