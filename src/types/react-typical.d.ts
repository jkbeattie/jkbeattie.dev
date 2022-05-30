declare module 'react-typical' {
    interface TypicalProps {
        steps: (string | number)[];
        loop: number;
        wrapper: string;
        className: string;
    }

    declare const Typical: React.FC<TypicalProps>;

    export default Typical;
}