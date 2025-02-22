import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const AllTask = ({data }) => {
    console.log(data)
  return (
    <div>
        <section className="mt-6">
  <h2 className="text-xl font-semibold text-gray-300">Task List</h2>
  <div className="mt-4 flex overflow-x-auto space-x-6 scrollbar-hide">
    {data.tasks.map((elem, idx)=>{
      if(elem.active){
        return <AcceptTask key={idx} data={elem}/>
      }
      if(elem.newTask){
        return <NewTask key={idx} data={elem}/>
      }
      if(elem.completed){
        return <CompleteTask key={idx} data={elem}/>
      }
      if(elem.failed){
        return <FailedTask key={idx} data={elem}/>
      }
    })}

   
  </div>
</section>


    </div>
  )
}

export default AllTask