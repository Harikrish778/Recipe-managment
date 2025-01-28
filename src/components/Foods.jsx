import React from 'react'
import Edit from './Edit'
import { useEffect,useState } from 'react'
import { getRecipeApi,delRecipeApi } from '../services/allApis'

function Foods({success}) {

    const[recilist,setRecilist]=useState([])
    const [editRes,setEditRes]=useState("")

    useEffect(()=>{
        getData();
    },[success,editRes]);
    const getData=async()=>{
        const result= await getRecipeApi()
        console.log(result)
        if(result.status===200){
            setRecilist(result.data)
        }
    }
    const deleteData=async(id)=>{
        const result=await delRecipeApi(id)
        console.log(result)
        if(result.status==200){
            getData()
        }
        else{
            alert("something went wrong")
        }
      }

  return (
    <>
    {recilist.length>0 ?
    <table className='table table-bordered table-striped table-responsive border-5' > 
    <thead>
        <tr>
            <th>ID</th>
            <th>Recipe title</th>
            <th>Incredients</th>
            <th>Image</th>
            <th>Options</th>
           
        </tr>
    </thead>
    <tbody>
        {recilist.map(item=>(
            <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.incredients}</td>
                <td>
                    <img
                      src={item.image}
                      style={{height:"200px",width:"300px"}}
                      
                      alt="image not available"
                    />
                  </td>
                  <td>
            <div>
                    <td>
                    <Edit recipe={item} edit={setEditRes}/>
                    </td>

                    <td>
                    <button className='btn btn-danger me-4' onClick={()=>{deleteData(item.id)}}>Delete</button>
                    </td>
                </div>
            </td>

            </tr>
        ))}
    </tbody>

</table> :
<h2 className='text-warning text-center'>No recipes added</h2> }
    
    </>
  )
}

export default Foods