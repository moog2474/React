const card = [
    {
      id: 1,
      image: require("../images/one.png"),
      date: "NOV 23 2020",
      title: "This way is wrong about UI Design.",
      description: "A quick guide to assisting users in the challenging steps from learning about your podcast on the web.  A quick guide to assisting users in the challenging steps from learning about your podcast on the web."
    },
    {
      id: 2,
      image: require("../images/two.png"),
      date: "NOV 23 2020",
      title: "This way is wrong about UI Design.",
      description: "A quick guide to assisting users in the challenging steps from learning about your podcast on the web.  A quick guide to assisting users in the challenging steps from learning about your podcast on the web."
    },
    {
      id: 3,
      image: require("../images/one.png"),
      date: "NOV 23 2020",
      title: "This way is wrong about UI Design.",
      description: "A quick guide to assisting users in the challenging steps from learning about your podcast on the web.  A quick guide to assisting users in the challenging steps from learning about your podcast on the web."
    },
    {
      id: 4,
      image: require("../images/two.png"),
      date: "NOV 23 2020",
      title: "This way is wrong about UI Design.",
      description: "A quick guide to assisting users in the challenging steps from learning about your podcast on the web.  A quick guide to assisting users in the challenging steps from learning about your podcast on the web."
    },
    {
      id: 5,
      image: require("../images/one.png"),
      date: "NOV 23 2020",
      title: "This way is wrong about UI Design.",
      description: "A quick guide to assisting users in the challenging steps from learning about your podcast on the web.  A quick guide to assisting users in the challenging steps from learning about your podcast on the web."
    },
    {
      id: 6,
      image: require("../images/two.png"),
      date: "NOV 23 2020",
      title: "This way is wrong about UI Design.",
      description: "A quick guide to assisting users in the challenging steps from learning about your podcast on the web.  A quick guide to assisting users in the challenging steps from learning about your podcast on the web."
    }
  ]

  export default function Data(){
   
   return(
       <div className='card'>
        {card.map((e) => {
          return (
            <div className='Card col-2'>
              <img src={e.image} />
              <p>{e.date}</p>
              <h4>{e.title}</h4>
              <p>{e.description}</p>
              <a href="#">Read more</a>
    
            </div>
    
          )
        })}
      </div>
       )
  }