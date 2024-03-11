import web3 from "../../assets/images/image-web-3-desktop.jpg"
const FeaturedNew = () => {
  return(
      <>
        <div className="basis-2/3 ">
            <div className="mb-4">
                <img src={web3} alt="Web 3"/>
            </div>
            <div className="flex">
                <div className="basis-1/2 text-4xl font-extrabold">
                    <h1>The Bright Future of Web 3.0?</h1>
                </div>
                <div className="basis-1/2">
                    <p className="mb-4"> We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
                    <button className="w-32 h-9 bg-p-soft-red text-p-off-white uppercase text-xs tracking-widest">Read more</button>
                </div>
            </div>

        </div>
      </>
  )
}

export default FeaturedNew;


//
//
//
//   We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people.
//   But is it really fulfilling its promise?
//
//   Read more
//