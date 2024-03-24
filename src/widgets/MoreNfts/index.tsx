import SectionHeader from "@/features/SectionHeader";
import Eye from "./assets/Eye.png"
import User from "./assets/Avatar.png"
import Space from "./assets/Image Placeholder.png"
import "./index.scss"
import NftCard from "@/features/NftsCard/NftCard";
const DiscoverMoreNfts = () => {
    return (
        <div className="discover__more">
            <div className="container__min">
                <SectionHeader title={"Discover More NFTs"} about={"Explore new trending NFTs"} image={Eye} button={"See All"} />
                <div   className="discover__more__cards"> 
                    {Array.from({ length: 3}, (_, index) => (
                        <NftCard title="Distant Galaxy" user="MoonDancer" eth="1.63 ETH" weth="0.33 wETH"  nftImage={Space} userAvatar={User} />
                        ))}
                    </div>
            </div>
        </div>
    );
}

export default DiscoverMoreNfts;