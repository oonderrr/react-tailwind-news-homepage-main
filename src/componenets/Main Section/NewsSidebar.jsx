const news = [
    {
        id: '1',
        title: "Hydrogen VS Electric Cars",
        newItem: "Will hydrogen-fueled cars ever catch up to EVs?"
    },
    {
        id: '2',
        title: "The Downsides of AI Artistry",
        newItem: "What are the possible adverse effects of on-demand AI image generation?"
    },
    {
        id: '3',
        title: "Is VC Funding Drying Up?",
        newItem: "Private funding by VC firms is down 50% YOY. We take a look at what that means."
    }
]

const NewsSidebar = () => {

  return(
      <>
          <div className="basis-1/3 bg-p-very-dark-blue p-4 flex flex-col gap-4">
              <h3 className="text-p-soft-orange text-xl font-bold">New</h3>
              {
                  news.map((item, index) => {
                      return (
                          <div key={item.id}>
                              <h4 className="text-p-off-white font-bold">{item.title}</h4>
                              <p className="text-p-grayish-blue text-xs pb-4">{item.newItem}</p>
                              {index !== news.length  - 1 ?  <hr /> : ""} {/* Kontrol burada */}
                          </div>
                      )
                  })
              }
          </div>
      </>
  )
}

export default NewsSidebar;
