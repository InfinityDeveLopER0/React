import mini from './assets/mini.webp';
import Products from './Products';
import { useState, useEffect } from 'react';

function CourseList(){

    const[courses, setCourses] = useState([
        {
             id:1, 
             name:"Mini Project",
             abt:"Showcase Yourself",
             price:1000,
             img:mini, 
             login:false
        },
        {
            id:2,
            name:"Landing Page",
            abt:"Single page website",
            price:400,
            img:mini, 
            login:true
       }
    ]);

    useEffect(()=> {
        console.log("Use effect called");

        fetch("https://jsonplaceholder.typicode.com/todos")
        .then(response=>{
            console.log(response);
            return response.json()
        }).then(datas=>{
            console.log(datas);
        })

        fetch("http://localhost:3000/courses")
        .then(response=>{
            console.log(response);
            return response.json()
        }).then(proda=>{
            setCourses(proda);
        })
    },[]);

    function Delete(id){
        const UpdatedList = courses.filter((course)=> course.id != id)
        setCourses(UpdatedList);
    }

    courses.sort((x,y) => y.price-x.price)

    const ProList2 = courses.filter((PriceList)=> PriceList.price<200)

    if(!courses){
        return <></>
    }
    
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