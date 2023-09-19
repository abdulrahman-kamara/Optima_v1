import React, {useState} from 'react'
import "./Rdv.css"
import AdherentAppointmentForm from '../../components/RDv/appointmentList'

const Rdv = () => {
    const [model, setModel] = useState(false)


    const toggleModel = () => {
        setModel(!model)
    }

  return (
    <div>
    <button onClick={toggleModel}>PrandreRDV</button>
    {model && (
        <div className='model-overlay' >
    <div className='model-content'>
    <h2>Model content</h2>
    <button onClick={toggleModel}>CLose</button>
    
        <AdherentAppointmentForm/>
    
    </div>
    </div>
    )}
    

    </div>
  )
}

export default Rdv