export default function Category({cat}){
    return(
        <nav>
            <ul className="cat">
        {cat.map((b) => {
          return (
          
              <li><a href="">{b.name}</a></li>
        
          )
        })}
            </ul>
      </nav>
    )
}