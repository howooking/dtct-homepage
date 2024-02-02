import Banner from "@/components/common/banner";
import Container from "@/components/common/container";
import NotReadyPage from "@/components/common/not-ready-page";
import { EXPERTY_SUBMENUS } from "@/constants/nav-menues";
import vetBanner from "@/public/photo/consulting-room.jpeg";

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
        <NotReadyPage />
      </Container>
    </main>
  );
}