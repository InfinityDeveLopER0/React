import port from './assets/port.png';
import mini from './assets/mini.webp';
import Products from './products';

function CourseList(){

    const courses = [
        {
             name :"Portfolio Website",
             abt:"Showcase Yourself",
             price: 200,
             img: port, 
             login:true
        },
        {
             name:"Mini Project",
             abt:"Showcase Yourself",
             price:1000,
             img:mini, 
             login:true
        },
        {
            name:"Landing Page",
            abt:"Single page website",
            price:400,
            img:mini, 
            login:true
       }
    ]

    courses.sort((x,y) => y.price-x.price)

    const ProList2 = courses.filter((PriceList)=> PriceList.price<200)
    const ProList = courses.map(
    (pro)=> <Products name={pro.name}
                      abt ={pro.abt}
                      price ={pro.price}
                      img = {pro.img}
                      login = {pro.login} />
    )
    return(
        <>
            {ProList}
        </>
    );
}

export default CourseList