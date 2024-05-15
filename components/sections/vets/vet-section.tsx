import SectionLayout from "../section-layout";
import SectionTitle from "../section-title";
// vet infos
import vet1 from "@/public/vets/crop-vet1.png";
import vet2 from "@/public/vets/crop-vet2.png";
import vet3 from "@/public/vets/crop-vet3.png";
import vet4 from "@/public/vets/crop-vet4.png";
import VetArticle from "./vet-article";

const VETS = [
  {
    name: "고재진",
    title: "원장",
    subjects: ["응급의학", "외과", "내과"],
    image: vet1,
    schedule: [1, 1, 1, 0, 1, 1, 1],
    history: [
      "전북대학교 수의과대학 대학원 외과학박사 졸업",
      "전북대학교 수의과대학 대학원 외과학석사 졸업",
      "북미수의사면허시험 BCSE/NAVLE 합격",
      "전북대학교 외과임상조교",
      "전북대학교 외과연구원",
      "미국 미주리주립수의과대학 중증질환센터 SAECC",
      "(Small Animal Emergency&Critical Care) POST-Doc, USA",
      "現 24시동탄시티동물의료센터 대표원장",
    ],
    expert: [
      "ACVS(미국수의외과전문의학회) 정회원",
      "AOVET(세계수의정형외과학회)정회원",
      "IVECCS(국제응급수의학회) 정회원",
      "ISFM(세계고양이의학회) 정회원",
      "박사학위논문 : Evaluation of Diagnostic Parameters and Emergency Treatment with Fluid Resuscitations in Canine Hypovolemic Shock Model.",
    ],
    education: [
      "Cruciate Management by CBLO by Dr. Donald Hulse (Las Vegas, NV, USA)",
      "Tibial Plateau Leveling Osteotomy(TPLO) by Dr. Brian Beale (Las Vegas, NV, USA)",
      "Top Ten Surgical Procedures by Drs. Otto Lanz; Dennis Olsen; Donald Waldron (Las Vegas, NV, USA)",
      "Fracture Repair in Toy Breed Dogs & Cats by Drs. Caleb Hudson & Brian Beale (Las Vegas, NV, USA)",
      "Comprehensive Patellar Luxation Correction by Dr. Karl Kraus (Boston, MA, USA)",
      "Comprehensive Extracapsular Stifle Stabilization Course by Dr. Ross Palmer (Boston, MA, USA)",
      "IVECCS : Ventilator Simulator Dry Lab: Dry Lab by Dr. Daniel Fletcher, Total Intravenous Anesthesia for the Critical Care Ventilator, Patient by Dr. Thomas Day, Emergency Airway Management by Drs. Marc Raffe; Andre Shih; William Muir, FASTVet Ultrasound Training (AFAST/TFAST/VetBLUE) by Dr. Gregory Lisciandro (Grapevine, TX, USA)",
      "AOVET : Principles in Small Animal Fracture Management (Columbus, OH, USA)",
      "IVECCS : Basic and Advanced Regional Anesthesia Techniques in Small Animal: Dry/Wet Lab by Dr.Pedro Boscan (San Diego, CA, USA)",
      "VATLS : Veterinary Advanced Traumatic Life Support trainer training by Dr. Dennis Crowe (Columbia, MO, USA)",
      "IVECCS : Advanced Surgical Techniques: Dry/Wet-Lab by Dr. F.A. (Tony) Mann, Advanced ECG Interpretation: Dry/Wet-Lab by Dr. Teresa DeFrancesco (San Antonio, TX, USA)",
    ],
  },
  {
    name: "김경채",
    title: "정형외과 과장",
    subjects: ["정형외과", "일반외과"],
    image: vet2,
    schedule: [1, 1, 1, 1, 1, 0, 0],
    history: [
      "충북대학교 수의학과 학사 졸업",
      "충북대학교 임상수의학 (외과) 석사 졸업",
      "달래 동물 의료센터 (서울, 용산구) 진료 수의사",
      "충북대학교 동물 병원 외과 수련의",
      "충북대학교 동물 병원 일반 외과 팀장",
      "SNC 동물 메디컬 센터 (서울, 강남구) 외과 팀장",
      "現 24시동탄시티동물의료센터 외과 과장",
    ],
    expert: [
      " 로얄캐닌 앰버서더 (7기)",
      " 한국 수의외과 학회 (정회원)",
      " NAVER 강아지 질병백과 감수 : 강아지 고관절이형성증",
      " NAVER 고양이 질병백과 감수 : 고양이 만성 치은 구내염, 고양이 장염, 고양이 상상 임신",
      " SBS 세상에 이런일이 ‘누워서 먹는 신기한 강아지 모카’ 방송 출연",
      "PennHIP 인증 수의사",
    ],
    education: [
      "2021 춘계 대한수의사회 학회 포스터 발표 : Postoperative Application of Fentanyl Transdermal Patch in Lynx with Tibial Fracture",
      "VETHONORS 증례 발표 : 고양이 전십자인대 단열 및 치료과정",
      "VETHONORS 증례 발표 : TTA rapid를 활용한 강아지 십자인대 단열 및 슬개골 탈구의 교정",
      "석사 졸업 논문 : 과체중 개에서 산책이 체중 감량에 미치는 영향 그리고 헤어 코티솔의 평가",
      "세종 충북대학교 동물병원 중재적 시술 세미나 및 실습 참가 (강사 : 장동우 교수님)",
    ],
  },
  {
    name: "김준희",
    title: "내과수의사",
    subjects: ["내과", "신장투석"],
    image: vet3,
    schedule: [0, 0, 1, 1, 1, 1, 1],
    history: [
      "충북대학교 수의학과 학사 졸업",
      "충북대학교 피부신경과학 실험실 근무",
      "용인, 남양주 공중방역수의사 복무",
      "분당 리더스 동물의료원 내과 수의사",
      "분당 리더스 동물병원 응급 수의사",
      "동탄 핸즈 동물병원 응급수의사",
      "現 24시동탄시티동물의료센터 진료수의사",
    ],
    expert: ["미국수의신장비뇨기 학회 정회원(ASVNU)"],
    education: [
      "2017 춘계 대한수의사회 구두 발표",
      "학부 졸업논문 : Retrospective study of 23 dogs with meningoencephalomyelitis of unknown etiology",
      "오르바이오 복부초음파 및 심장초음파 교육 이수",
      "FMC CRRT(신대체요법) Hands on course 이수",
    ],
  },
  {
    name: "최한일",
    title: "일반외과 과장",
    subjects: ["일반외과", "정형외과"],
    image: vet4,
    schedule: [1, 1, 1, 0, 1, 1, 0],
    history: [
      "강원대학교 수의학과 학사 졸업",
      "강원대학교 심장내과 실험실, 동물병원 근무",
      "신촌 웨스턴 의료센터 인턴 수료",
      "용인 이리온 의료센터 진료의",
      "송파 바로 의료센터 진료의",
      "건국대학교 외과대학원 석사 졸업",
      "건국대학교 외과대학원 박사과정",
      "現 24시동탄시티동물의료센터 외과 과장",
    ],
    expert: ["한국 수의외과 학회 (정회원)"],
    education: [
      "졸업논문 : PDA 진단에 있어 심장초음파 마커의 유용성",
      "2023 한국임상수의학회 발표",
      "석사 논문 : Biomechanical comparison of a technique using Sonntag with Fiberwire and wire for surgical management of Atlantoaxial subluxation : 3D printed study",
      "아시아 수의외과학회 2023 나고야 참석",
      "스킨앤이어 피부과 전문가 과정 수료",
      "해마루 골절 세미나 수료",
      "KAHA 동물 행동학 intermeate 수료",
      "웨스턴 인턴 세미나 수료",
    ],
  },
];

export default function VetSection() {
  return (
    <SectionLayout hash="vets">
      <div className="flex flex-col items-center">
        <SectionTitle subtitle="아주대병원, 강남성심병원 임상교수 출신으로 임상자문의로서 대학병원과 밀접한 협진 시스템을 구축하고 있습니다.">
          <span className="text-primary font-bold">USA, POST-DOC</span> 출신
          대표 원장!
          <br />
          <span className="text-primary font-bold">석박사 출신</span> 의료진!
          <br />
          <span className="text-primary font-bold">최고 실력</span>의 의료진을
          소개합니다!
        </SectionTitle>

        <ul className="w-full pb-[90px] bg-olive-drab-50">
          {VETS.map((vet) => (
            <li key={vet.name}>
              <VetArticle {...vet} />
            </li>
          ))}
        </ul>
      </div>
    </SectionLayout>
  );
}
