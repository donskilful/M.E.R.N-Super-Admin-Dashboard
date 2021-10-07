import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";

const FeaturedInfo = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Revenue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,554</span>
          <span className="featuredMoneyRate">
            -11.6 <ArrowDownward className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featuredSubTitle">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$4,554</span>
          <span className="featuredMoneyRate">
            -17.6 <ArrowDownward className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featuredSubTitle">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$9,594</span>
          <span className="featuredMoneyRate">
            +41.6 <ArrowUpward className="featuredIcon"/>
          </span>
        </div>
        <span className="featuredSubTitle">Compared to last month</span>
      </div>
    </div>
  );
};

export default FeaturedInfo;
