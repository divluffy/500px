import React from "react";
import { TitlesSection } from "../components/Cards";

function Community() {
  return (
    <div className="community">
      <TitlesSection
        title="Join our community today"
        description="Do you love photography? Want to constantly stay inspired and be surrounded by millions of like-minded creators? Then sign-up today and get rewarded for your love of photography."
        btn="Sign up"
        btn2={true}
      />
    </div>
  );
}

export default Community;
