import ThreeD from "../../assets/3D-quality.svg"
import Seventwenty from "../../assets/720p-quality.svg"
import Thousandeighty from "../../assets/1080p-quality.svg"
// import Twentyonesixty from "../../assets/2160p-quality.svg"
export const DownloadBox=(props)=>
{
    return <>
            <div className="download-box">
                <div className="quality">{props.torrent.quality==='3D'?<img src={ThreeD}/>:props.torrent.quality==='720p'?<img src={Seventwenty}/>:props.torrent.quality==='1080p'?<img src={Thousandeighty}/>:props.torrent.quality}</div>
                <div className="type">{props.torrent.type==='web'?'WEB':props.torrent.type==='bluray'?'BluRay':props.torrent.type}</div>
                <div className="gray">File size</div>
                <div className="size">{props.torrent.size}</div>
                <a href={props.torrent.url}><div className="button" style={{marginTop:'8px'}}><button className="green"><span class="material-icons">download</span>Download</button></div></a>
            </div>
    </>
}   