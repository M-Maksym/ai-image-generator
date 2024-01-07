import React from 'react'
import { useSelector } from 'react-redux';
import './History.css'

function History() {
    const history = useSelector((state) => state.history);
    console.log(history);
    
  return (
    <div>
    {history.totalAmount > 0 ?    
    <div className='list'>
        <div className='title'>
            History
        </div>
        {history.history.map((item, index) =>{
            return(
                <div className='history' key={index}>
                    <div className='history-text'>
                        {item.text}
                    </div>
                    <div className='history-image'>
                        <img src={item.url} alt="h" />
                    </div>
                </div>
            )
        })}
    </div>:
        <div className='list'>
        <div className='title'>
            History is empty
        </div>
        </div>}
    </div>
  )
}

export default History