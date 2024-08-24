import BannerImage from "../../assets/images/banner.jpeg";

function Banner() {
    return (
        <div className="w-full h-[25rem] relative overflow-hidden">

        <img 
            src={BannerImage}
            className="h-full w-full object-cover"
            alt="Banner"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex flex-col items-center gap-4 text-center">

                <div className="font-semibold text-5xl text-gold drop-shadow-lg">
                    Crypto Tracker
                </div>

                <div className="font-semibold text-sm text-gold drop-shadow-lg">
                    Get all info regarding cryptocurrencies
                </div>

            </div>
        </div>

    </div>
    );
}

export default Banner;