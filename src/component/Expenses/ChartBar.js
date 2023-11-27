import './ChartBar.css';
export default function ChartBar(props){
let chartFillInner='0%';
if(props.totalMax>0){
     chartFillInner=Math.round(( props.value/props.totalMax)*100)+'%'
}
return(
 <div className='chart-bar'>
    <div className='chart-bar__inner'>
    <div className='chart-bar__fill' style={{height:chartFillInner}}></div>
    </div>
    <div className='chart-bar__label'>{props.label}</div>
 </div>
);
}