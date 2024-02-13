type Props = {
    label:string
    className?:string
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}
const Button = (props:Props)=>{
    const {className , label , onClick} = props;
    return (
        <button onClick={onClick} className ={className}>{label}</button>
    )
}

export default Button;