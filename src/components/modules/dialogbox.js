import close from "../../assets/close.png"
export const DialogBox=(props)=>{
    
    return props.open ? <div className="dialog-screen">
    <div className="backdrop" onClick={props.close}></div>
    <div className="dialog-box slideTop" style={props.styles}>
            <div className="close" onClick={props.close}><img src={close}/></div>
            {props.children}
    </div>
    </div>: <></> 
}