import SectionHeader from "@/features/SectionHeader";
import Eye from "./assets/Eye.png"
const DiscoverMoreNfts = () => {
    return ( 
        <div className="discover__more">
            <div className="container__min">
                <SectionHeader title={"Discover More NFTs"} about={"Explore new trending NFTs"} image={Eye} button={"See All"}  />
            </div>
        </div>
     );
}
 
export default DiscoverMoreNfts;