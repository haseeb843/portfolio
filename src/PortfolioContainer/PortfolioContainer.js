import React from "react";
import { TOTAL_SCREENS } from "../Utilities/commonUtils";

const PortfolioContainer = () => {
  const mapAllScreen = () => {
    return TOTAL_SCREENS.map((screen) =>
      screen.component ? (
        <screen.component
          screenName={screen.screen_name}
          key={screen.screen_name}
          id={screen.screen_name}
        />
      ) : (
        <div Key={screen.screen_name}></div>
      )
    );
  };

  return <div className="portfolio-container">{mapAllScreen()}</div>;
};

export default PortfolioContainer;
