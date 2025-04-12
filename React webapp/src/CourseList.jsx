import port from './assets/port.png';
import mini from './assets/mini.webp';
import Products from './Products';
import { useState } from 'react';

function CourseList(){

    const[courses, setCourses] = useState([
        {
             id:1,
             name :"Portfolio Website",
             abt:"Showcase Yourself",
             price: 200,
             img: port, 
             login:true
        },
        {
             id:2, 
             name:"Mini Project",
             abt:"Showcase Yourself",
             price:1000,
             img:mini, 
             login:false
        },
        {
            id:3,
            name:"Landing Page",
            abt:"Single page website",
            price:400,
            img:mini, 
            login:true
       }
    ]);

    function Delete(id){
        const UpdatedList = courses.filter((course)=> course.id != id)
        setCourses(UpdatedList);
    }

    courses.sort((x,y) => y.price-x.price)

    const ProList2 = courses.filter((PriceList)=> PriceList.price<200)
    
    const ProList = courses.map(
    (pro)=> <Products id={pro.id}
                      name={pro.name}
                      abt ={pro.abt}
                      price ={pro.price}
                      img = {pro.img}
                      login = {pro.login}
                      delete = {Delete} />
    )
    return(
        <>
            {ProList}
        </>
    );
}

export default CourseList