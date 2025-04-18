import amazonoayLogo from "../../assets/imgs/amazon-pay.png";
import AmericanExpress from "../../assets/imgs/American-Express-Color.png";
import Paypal from "../../assets/imgs/paypal.png";
import MasterCard from "../../assets/imgs/mastercard.webp";
import AppStore from "../../assets/imgs/get-apple-store.png"
import googleStore from "../../assets/imgs/get-google-play.png"
export default function Footer() {
  return (
    <>
 

<footer className="bg-slate-100 shadow-sm py-8 px-2">
        <div className="container space-y-6">
          {/* Header Section */}
          <header>
            <h2 className="text-xl font-semibold text-slate-800">
              Get the FreshCart App
            </h2>
            <p className="text-slate-400">
              We will send you a link, open it on your phone to download the app
            </p>
          </header>

          {/* Input Section */}
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              className="form-control grow px-4 py-2 rounded-md border border-slate-300 focus:ring-2 focus:ring-primary-800"
              placeholder="Email Address"
            />
          <div>
          <button className="btn  block  ms-auto mx-3  uppercase text-sm font-semibold text-white bg-primary-800 hover:bg-primary-900 py-2 px-4 rounded-md">
              Share App Link
            </button>
          </div>
          </div>

          {/* Partners and Downloads */}
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6 border-y-2 border-slate-400 border-opacity-50 py-6">
            {/* Payment Partners */}
            <div className="payment-partners flex flex-wrap items-center gap-3">
              <h3 className="text-sm font-medium text-slate-800 mb-2 lg:mb-0">
                Payment Partners
              </h3>
              <img src={amazonoayLogo} className="w-20 md:w-24" alt="Amazon Pay" />
              <img
                src={AmericanExpress}
                className="w-20 md:w-24"
                alt="American Express"
              />
              <img
                src={MasterCard}
                className="w-16 md:w-20"
                alt="MasterCard"
              />
              <img src={Paypal} className="w-20 md:w-24" alt="PayPal" />
            </div>

            {/* Download Links */}
            <div className="download flex justify-center items-center gap-3">
              <h3 className="text-sm font-medium text-slate-800  lg:mb-0">
                Get deliveries with FreshCart
              </h3>
              <img
                src={AppStore}
                className="w-16 md:w-24"
                alt="App Store"
              />
              <img
                src={googleStore}
                className="w-[70px] md:w-[110px]"
                alt="Google Play"
              />
            </div>
          </div>
        </div>
      </footer>




    </>

  )
}
