import './Chart.css';
import ChartBar from './ChartBar';
export default function Chart(props){
const dataPointsValue=props.chartDataPOints.map((item)=>item.value);
const totalMax=Math.max(...dataPointsValue);
return(
    <div className='chart'>
      {
        props.chartDataPOints.map((item)=>(
            <ChartBar key={item.label} label={item.label} value={item.value} totalMax={totalMax} />
        ))
      }
    </div>
)
}