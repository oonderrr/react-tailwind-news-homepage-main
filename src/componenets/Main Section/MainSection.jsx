import FeaturedNew from "./FeaturedNew.jsx";
import NewsSidebar from "./NewsSidebar.jsx";
import BottomItem from "./BottomItem.jsx";

const MainSection = () => {
  return(
      <>
        <div className="flex gap-5 mt-20">
            <FeaturedNew />
            <NewsSidebar />
        </div>
        <div className="grid grid-cols-3 gap-3 mt-7">
            <BottomItem />
        </div>

      </>
  )
}
export default MainSection;