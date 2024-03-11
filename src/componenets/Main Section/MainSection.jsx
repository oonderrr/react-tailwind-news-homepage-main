import FeaturedNew from "./FeaturedNew.jsx";
import NewsSidebar from "./NewsSidebar.jsx";

const MainSection = () => {
  return(
      <>
        <div className="flex gap-5 mt-20">
            <FeaturedNew />
            <NewsSidebar />
        </div>

      </>
  )
}
export default MainSection;