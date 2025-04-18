import amazonoayLogo from "../../assets/imgs/amazon-pay.png";
import AmericanExpress from "../../assets/imgs/American-Express-Color.png";
import Paypal from "../../assets/imgs/paypal.png";
import MasterCard from "../../assets/imgs/mastercard.webp";
import AppStore from "../../assets/imgs/get-apple-store.png"
import googleStore from "../../assets/imgs/get-google-play.png"
export default function Footer() {
  return (
    <>
  <footer className="bg-slate-200 py-8 ">
    <div className="container space-y-4">
     <header className="px-2" >
     <h2 className="text-xl font-semibold text-slate-800 mb-2">Get the Fresh Cart</h2>
     <p className="text-slate-400 ">We will send you a link , open it on your phone to download the app</p>
     </header>

      <div className="flex gap-2 ">
        <input className="form-control grow" type="email" name="" id="" placeholder="Email Address" />
          <button className="btn uppercase bg-primary-800 hover:bg-primary-900 font-semibold text-sm text-white  "> Share App Link</button>
      </div>
     
      <div className="flex flex-col lg:flex-row     justify-between items-center gap-6 py-4 border-y-2 border-slate-300 border-opacity-50"> 
        <div className="payment flex items-center gap-5 px-2 md:px-0">
          <h3>Payment partners</h3>
              <img className=" w-20 md:w-24" src={amazonoayLogo} alt="amazon pay" />
              <img className=" w-20 md:w-24" src={AmericanExpress} alt="AmericanExpress pay" />
              <img className=" w-20 md:w-24" src={Paypal} alt="Paypal pay" />
              <img className="w-16 md:w-20" src={MasterCard} alt="MasterCard pay" />
        </div>

        <div className="dowmload flex items-center gap-5  px-2 md:px-0">
          <h3>Get deliveries with FreshCart</h3>
           <img className="w-24" src={AppStore} alt="App Store png" />
           <img className="w-[110px]" src={googleStore} alt="googleStore png" />
        </div>
       </div>
      
      </div>
    </footer>
    </>

  )
}
