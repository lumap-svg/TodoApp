import AddIcon from '@mui/icons-material/Add';
import '../styles/textarea.css'

const TextArea = ({text, funct, handleChange}) => {

  
    

  return (
    <>
    <div className='inputContainer'>
        <input
        value={text}
        onChange={handleChange}
        type="text"
         />
        <button onClick={funct}> 
            <AddIcon fontSize='large'/>
        </button>
      
    </div>
    </>
  )
}

export default TextArea

