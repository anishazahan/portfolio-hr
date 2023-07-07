import React from 'react'
import {data} from './homeBlogData.js'
import { useParams } from 'react-router-dom'

const BlogDetails = () => {

    const {id}=useParams()
    const filterData = data.filter(item=>item.id==id)
    // console.log(filterData);
  return (
    <div>
      <div className="max-w-5xl px-5 xl:px-0 mx-auto mt-20">
      {
        filterData.map((item,index)=>{
            return <div key={index} className="">
                <div className="">
                <img className='border rounded-sm border-gray-700' src={item.img} alt="" />
                <h2 className='text-xl font-bold my-10 text-zinc-900'>{item.title}</h2>
                <p className='text-gray-500 mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam nihil distinctio reiciendis, ratione obcaecati itaque, unde nemo minus, vero ipsum officiis quo nostrum voluptatem magnam hic consequuntur illo iure soluta animi eveniet praesentium ducimus ex. Unde voluptate facilis neque sed, quisquam numquam obcaecati itaque nostrum excepturi dignissimos possimus, accusantium ab?</p>
                <p className='text-gray-500 mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam nihil distinctio reiciendis, ratione obcaecati itaque, unde nemo minus, vero ipsum officiis quo nostrum voluptatem magnam hic consequuntur illo iure soluta animi eveniet praesentium ducimus ex. Unde voluptate facilis neque sed, quisquam numquam obcaecati itaque nostrum excepturi dignissimos possimus, accusantium ab?</p>
                <p className='text-gray-500 mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam nihil distinctio reiciendis, ratione obcaecati itaque, unde nemo minus, vero ipsum officiis quo nostrum voluptatem magnam hic consequuntur illo iure soluta animi eveniet praesentium ducimus ex. Unde voluptate facilis neque sed, quisquam numquam obcaecati itaque nostrum excepturi dignissimos possimus, accusantium ab?</p>
                <p className='text-gray-500 mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam nihil distinctio reiciendis, ratione obcaecati itaque, unde nemo minus, vero ipsum officiis quo nostrum voluptatem magnam hic consequuntur illo iure soluta animi eveniet praesentium ducimus ex. Unde voluptate facilis neque sed, quisquam numquam obcaecati itaque nostrum excepturi dignissimos possimus, accusantium ab?</p>
                <p className='text-gray-500 mt-4 mb-28'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam nihil distinctio reiciendis, ratione obcaecati itaque, unde nemo minus, vero ipsum officiis quo nostrum voluptatem magnam hic consequuntur illo iure soluta animi eveniet praesentium ducimus ex. Unde voluptate facilis neque sed, quisquam numquam obcaecati itaque nostrum excepturi dignissimos possimus, accusantium ab?</p>
                </div>
             
            </div>
        })

      }
      </div>

    </div>
  )
}

export default BlogDetails