import Banner from "@/components/common/banner";
import Container from "@/components/common/container";
import Vet from "@/app/introduction/vets/vet";
import { VETS } from "@/constants/constants";

export default function VetsPage() {
  return (
    <main>
      <Banner
        imageClassName="vets_banner"
        title="수의사 소개"
        subTitle="각분야 최고의 전문가들이 함께합니다"
      />

      <Container>
        <ul className="grid grid-cols-2 gap-8 pt-10 pb-12">
          {VETS.map((vet) => (
            <Vet key={vet.name} {...vet} />
          ))}
        </ul>
      </Container>
    </main>
  );
}
