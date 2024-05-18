import '../styles/list.css'
const List = ({items}) => {



  return (
    <div className="dolist">
      
    <ol>
     <h2>list item </h2> 
      {items.map((item)=> (<li key={item.id} >{item.name}</li>))}
    </ol>
    </div>
  )
}

export default List
