import './Card.css'
export default function Card(props){
    const classesName= "card "+props.className;
    return(
        <div className={classesName}>
          {props.children}
        </div>
    );
}