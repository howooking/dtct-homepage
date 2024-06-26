import Banner from "@/components/common/banner";
import Container from "@/components/common/container";
import { EXPERTY_SUBMENUS } from "@/constants/nav-menues";
import vetBanner from "@/public/photo/consulting-room.jpeg";
import { Metadata } from "next";
import ReferralInfos from "./referral-infos";
import ReferralProcedures from "./referral-procedures";

export const metadata: Metadata = {
  title: "진료의뢰",
};

export default function OperationPage() {
  return (
    <main>
      <Banner
        image={vetBanner}
        upperRoute="전문 진료"
        subRoute="진료 의뢰"
        subMenus={EXPERTY_SUBMENUS}
      />

      <Container>
        <ReferralInfos />
        <ReferralProcedures />
      </Container>
    </main>
  );
}
