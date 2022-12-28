import styles from './Container.module.css'
// props children encaixará tudas as properties
function Container(props){
 return (
  <div className={`${styles.container} ${styles[props.customClass]}`}>
   {props.children}
  </div>
 )
}

export default Container;