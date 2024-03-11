import gaming from "../../assets/images/image-gaming-growth.jpg"
import keyboard from "../../assets/images/image-top-laptops.jpg"
import computer from "../../assets/images/image-retro-pcs.jpg"

const bottomItems = [
    {
        image: gaming,
        number : "01",
        title : "Reviving Retro PCs",
        newItem : "What happens when old PCs are given modern upgrades?"
    },
    {
        image: keyboard,
        number : "02",
        title : "Top 10 Laptops of 2022",
        newItem : "Our best picks for various needs and budgets."
    },
    {
        image: computer,
        number : "03",
        title : "The Growth of Gaming",
        newItem : "How the pandemic has sparked fresh opportunities."
    }
]
const BottomItem = () => {
  return(
      <>
          {
              bottomItems.map((item, index) => {
                  return (
                      <div key={index} className="flex items-center gap-3">
                          <img className="w-36" src={item.image} alt=""/>
                          <div>
                              <h2 className="font-bold text-3xl text-p-grayish-blue">{item.number}</h2>
                              <h3 className="font-bold">{item.title}</h3>
                              <p className="text-p-dark-grayish-blue">{item.newItem}</p>
                          </div>
                      </div>
                  )
              })
          }
      </>
  )
}

export default BottomItem;


//
//   01
//   Reviving Retro PCs
//   What happens when old PCs are given modern upgrades?
//
//   02
//   Top 10 Laptops of 2022
//   Our best picks for various needs and budgets.
//
//   03
//   The Growth of Gaming
//   How the pandemic has sparked fresh opportunities.
//