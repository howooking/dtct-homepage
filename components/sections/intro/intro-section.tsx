import { NAME } from "@/constants/general-info";
import icu1 from "@/public/photo/icu1.jpeg";
import covidien from "@/public/tools/covidien.png";
import hr from "@/public/vets/24hr.png";
import vet1 from "@/public/vets/crop-vet1.png";
import Image from "next/image";
import { FaBed, FaMicroscope, FaUserDoctor } from "react-icons/fa6";
import { Ri24HoursFill } from "react-icons/ri";
import SectionLayout from "../section-layout";
import SectionTitle from "../section-title";
import IntroCard from "./intro-card";
import IntroCircle from "./intro-circle";
import Container from "@/components/common/container";

const INTRODUCCTION = [
  {
    title: (
      <>
        최고의 실력을 보유한
        <br /> 석박사 출신 의료진
      </>
    ),
    icon: FaUserDoctor,
    image: vet1,
    subtitle: (
      <>
        청담탑은 대한민국 100대 명의 전문의가 상주하고 있으며,
        <br /> 전문의 3인 진료로 대기시간이 짧아 신속한 진료가 가능합니다.
      </>
    ),
  },
  {
    title: (
      <>
        대학병원급 첨단장비를
        <br /> 사용한 정밀한 치료
      </>
    ),
    icon: FaMicroscope,
    image: covidien,
    subtitle: (
      <>
        가장 고급의 최신 장비를 사용하여, 보다 빠른
        <br />
        증상 완화와 치료 효과를 기대할 수 있고,
        <br />
        안락한 치료 공간에서 편안하게 치료를 받을 수 있습니다.
      </>
    ),
  },
  {
    title: "수술실 입원실 완비",
    icon: FaBed,
    image: icu1,
    subtitle: (
      <>
        청담탑정형외과는 수술실과 1인 입원실이 완비되어 있으며,
        <br /> 하루에 오직 한 분의 환자만 정성을 다하여 수술을 진행합니다.
      </>
    ),
  },
  {
    title: "24시간 수의사 상주",
    icon: Ri24HoursFill,
    image: hr,
    subtitle: (
      <>
        최신 의학 정보 교류 및 학회 활동을 꾸준히 시행하여
        <br /> 지역의료의 수준을 TOP으로 유지하기 위해 협력합니다.
      </>
    ),
  },
];

export default function IntroSection() {
  return (
    <SectionLayout hash="intro">
      <SectionTitle>
        안녕하세요! <span className="text-primary font-bold">{NAME} </span>{" "}
        입니다.
      </SectionTitle>

      <Container>
        <div className="flex gap-10 items-end pb-20">
          <Image alt="원장님 사진" src={vet1} className="w-1/3" />
          <div className="w-2/3 space-y-10 text-2xl">
            <p>
              <span className="text-primary font-bold ">
                24시 동탄시티동물의료센터
              </span>{" "}
              홈페이지를 방문해주셔서 감사합니다.
            </p>
            <p>
              저희 24시동탄시티동물의료센터에서는 반려동물과 보호자에게 최선을
              다하여 진실되게 치료하는 것을 공통의 목표로 나아가고 있습니다.
            </p>
            <p>
              대학 병원 및 2차 동물 병원에서 많은 경험을 갖고 계신 수의사
              선생님들로 구성된 의료진들이 내과/외과 진료를 진행하고 있으며,
              복합적인 질환을 갖는 환자의 경우, 내과와 외과의 협진 시스템이
              효율적으로 구축되어 있습니다.
            </p>
            <p>
              더 나아가 신장/혈액투석 클리닉과 심화 수술 센터를 운영하여, 타
              병원에서 좀 더 심화된 내용의 처치가 필요할 경우, 협업하여 진행하고
              있습니다
            </p>
            <p>
              저희 24시동탄시티동물의료센터를 찾아주신 반려 동물 및 보호자분들께
              다시한번 감사드리며 본원에 내원하는 환자의 빠른 쾌유를 위하여
              최선을 다하겠습니다.
            </p>
            <p className="text-right text-lg">
              {NAME} 대표원장{" "}
              <span className="text-primary font-bold ">고재진</span>
            </p>
          </div>
        </div>
      </Container>

      <ul className="relative w-[1160px] h-[320px] mb-10 mx-auto">
        {INTRODUCCTION.map(({ title, icon }, index) => (
          <IntroCircle key={index} title={title} icon={icon} index={index} />
        ))}
      </ul>

      {/* <ul className="flex flex-col gap-20 w-full">
        {INTRODUCCTION.map(({ image, title, subtitle }, index) => (
          <IntroCard
            key={index}
            index={index}
            image={image}
            title={title}
            subtitle={subtitle}
          />
        ))}
      </ul> */}
    </SectionLayout>
  );
}
