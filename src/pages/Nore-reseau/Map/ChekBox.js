import React, {useState} from 'react'
import {Checkbox, Collapse} from 'antd'

const {Panel} = Collapse


// List of status de adherent

const AdherentLocation = [
   
    {
        nom: "Taximètre", // TAXs
        numero: 1
    },
    {
        nom: "Gaz / Opa", // GZO
        numero: 2
    },
    {
        nom: "Tachygraphe", // TCO
        numero: 4
    },
    {
        nom: "Ethylotest", // EAD
        numero: 5
    },
    {
        nom: "Auto-Ecole", // AUT
        numero: 6
    },
   
]




const  ChekBox = (props) => {
const [Checked, setChecked] = useState([])


// getting all adherent




// Hander checkbox toggle 

const handleToggle = (value) => {

    const currentIdex = Checked.indexOf(value)
    const newChecked = [...Checked]

    if (currentIdex === -1) {
        newChecked.push(value)
    }else{
        newChecked.splice(currentIdex, 1)
    }

    setChecked(newChecked)
    props.handleFilter(newChecked)

}

// update this checkbox information to the parent components





  return (
    <div>
        <Collapse defaultActiveKey={["0"]}>
        <Panel header key="1">
        {AdherentLocation.map((value, index) => (
            <React.Fragment>
                <Checkbox
                onChange={() => handleToggle(value.numero)}
                checked={Checked.indexOf(value.numero) === -1 ? false : true}
                type='checkbox'
/>
                {value.nom}
            </React.Fragment>

        ))}


        </Panel>
        
        </Collapse>


    </div>
  )
}

export default ChekBox