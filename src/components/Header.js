export default function Header({ nav }) {
    return (
        <header className="App-header">
            <nav className='menu'>
                <div className='col'>
                    <img src={require("../images/Logo.png")}/>
                    <img src={require("../images/Hire Me (1).png")} alt="" />
                </div>
                <ul>
                    {nav.map((e) => {
                        return (
                            <li><a href="">{e.name}</a></li>
                        )
                    })}
                </ul>
            </nav>
        </header>
    )
}