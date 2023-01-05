import { BsTwitter, BsLinkedin, BsMedium } from "react-icons/bs";
export default function Section(){
    return(
        < section className="one">
        <div className="col hi">
          <div className="col-2 seventy">
              <h1>Blog Posts</h1>
              <h3>I think so, this is it.</h3>
              <p className="text">Design begins after I begin to think about how to present an experience most successfully, whether a button I put in can solve a problem. The only point in design is not ui design, if the user does not have a good experience at the end of the product, the design will be considered unsuccessful in my opinion.</p>
              <div className="row">
                <button className="twitter">
                  <BsTwitter />
                  <p>Twitter</p>
                </button>
                <button className="linkedin">
                  <BsLinkedin />
                  <p>Linkedin</p>
                </button>
                <button className="medium">
                  <BsMedium />
                  <p>Medium</p>
                </button>
               </div>
          </div>

          <div className="col-2 pic">
            <img className="pic1" src={require("../images/Group.png")} alt=""/>
          </div>
        </div>
      </section>
    )
}