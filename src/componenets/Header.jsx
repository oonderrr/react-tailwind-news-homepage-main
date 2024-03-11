import logo from '../assets/images/logo.svg';
const Header = () => {
  return[
      <>
        <div className="flex justify-between">
            <div >
                <img src={logo} alt="Logo"/>
            </div>
            <div className="text-p-dark-grayish-blue flex gap-9 items-center ">
                <a href="#">Home</a>
                <a href="#">New</a>
                <a href="#">Popular</a>
                <a href="#">Trending</a>
                <a href="#">Categories</a>
            </div>
        </div>
      </>
  ]
}

export default Header

//  Home
// //   New
// //   Popular
// //   Trending
// //   Categories