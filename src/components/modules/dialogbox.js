export const DialogBox=(props)=>{
    
    return props.open ? <div className="dialog-screen ">
    <div className="backdrop" onClick={props.close}></div>
    <div className="dialog-box slideTop">
        {props.children}
    </div>
    </div>: <></> 
}