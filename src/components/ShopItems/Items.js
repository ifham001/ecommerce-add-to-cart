import React from 'react'
import SingleItem from './SingleItem/SingleItem'


const dummyData=[
  {
    id:'m1',
    item:'burger',
    price:12,
    description:'my favorite burger is chicken chease burger'
  },
  {
    id:'m2',
    item:'pizaa',
    price:22,
    description:'my favorite burger is chicken chease burger'
  },
  {
    id:'m3',
    item:'pasta',
    price:33,
    description:'my favorite burger is chicken chease burger'
  }
]


function Items() {
  return (
    <div>
      {dummyData.map(data=>{
        return <SingleItem 
                    key={data.id}
                    id={data.id}
                    item={data.item}
                    price={data.price}
                    description={data.description}/>
      })}
        
    </div>
  )
}

export default Items