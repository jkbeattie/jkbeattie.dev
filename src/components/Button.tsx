type Props = {
    buttonType: string
}

export const Button: React.FC<Props> = ({
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