import circular from "@/public/subjects/circular.jpg";
import digestive from "@/public/subjects/digestive.jpg";
import hormonal from "@/public/subjects/hormonal.png";
import urinary from "@/public/subjects/urinary.jpg";

import allergy from "@/public/subjects/allergy.jpg";
import demodex from "@/public/subjects/demodex.jpg";
import hormonalDerm from "@/public/subjects/hormonal.jpg";
import immuneMediated from "@/public/subjects/immune-mediated-dermal.jpg";
import skincancer from "@/public/subjects/skincancer.jpg";

import dogVaccine from "@/public/subjects/vaccine-dog.jpg";
import catVaccine from "@/public/subjects/vaccine-cat.jpg";
import heartworm from "@/public/subjects/heartworm.png";
import tick from "@/public/subjects/tick.png";

export const SUBJECTS_SUBMENUS = [
  {
    upperRoute: "/subjects",
    label: "내과",
    route: "/internal",
    contents: [
      {
        categoryName: "소화기내과",
        image: digestive,
        imageDescription: "교체해야함",
        intro:
          "소화기는 섭취된 음식을 분해하고 흡수하는 역할을 하는 기관입니다.",
        description:
          "소화기 내과에서는 소화를 담당하는 장기인 식도, 위, 십이지장, 소장, 대장뿐만 아니라 소화기에 영향을 줄 수 있는 간, 담낭, 췌장에서 발생하는 모든 질환을 다룹니다.<br/><br/>소화기계 질병은 일반적으로 식욕부진, 설사, 구토, 복부 통증, 체중 감소 등의 증상이 나타납니다.<br/><br/>소화계 질병의 원인으로는 가벼운 식이적 문제부터 이물 섭취, 종양성 질환까지 매우 다양합니다.<br/>따라서 구토나 설사가 지속된다면 내원하여 원인을 감별하는 것이 좋습니다.",
        tags: ["설사", "혈변", "구토", "식욕부진", "복통", "체중감소", "변비"],
      },
      {
        categoryName: "심장·호흡기내과",
        image: circular,
        imageDescription: "교체해야함",
        intro: "순환기는 혈액순환을 하게 하는 심장과 혈관들을 말합니다.",
        description:
          "반려동물의 순환기 질병은 대부분 심장에서 발생합니다.<br/>선천적인 심장기형에서 부터 강아지에서 가장 흔한 판막 질환, 그리고 고양이에서 가장 흔한 비대심근병증에 이르기까지 다양한 심장 질환을 다루고 있습니다.<br/><br/>혈액순환을 담당하는 심장에 문제가 생길 경우 전신적으로 영향을 끼치게 되며 특히 신장과 폐에 문제가 발생 할 수 있습니다.<br/>따라서 전문 진료진들과 함께 종합적인 치료계획을 세우는 것이 중요합니다.",

        tags: ["기침", "청색증", "호흡곤란", "기력부진", "운동저하", "심잡음"],
      },

      {
        categoryName: "내분비내과",
        image: hormonal,
        imageDescription: "당뇨병 치료를 위해 연속혈당 관리중인 환자",
        intro:
          "내분비계는 호르몬이라는 화학물질을 생성하고 분비하여 조절하는 생리학적 시스템을 말합니다.",
        description:
          "호르몬을 분비하는 부신, 갑상선, 부갑상선, 뇌하수체, 시상하부, 췌장 등에 이상이 발생할 경우 문제가 발생합니다.<br/><br/>일반적으로 다음, 다뇨, 복부팽만, 탈모, 피부병 등 다양한 증상이 나타납니다.<br/><br/>대부분 호르몬의 양을 조절하기만 하면 되므로 적절한 치료만 한다면 예후는 좋은 편입니다.<br/>그러나 치료 시기를 놓치면 각종 합병증으로 인해 위험해질 수 있으므로 이상 증상이 보일 경우 반드시 정밀검진을 받아야 합니다.",
        tags: [
          "다음다뇨",
          "다식",
          "복부팽만",
          "체중감소",
          "활력감소",
          "당뇨",
          "쿠싱",
          "에디슨",
          "갑상선",
          "탈모",
        ],
      },
      {
        categoryName: "비뇨기내과",
        image: urinary,
        imageDescription: "교체해야함",
        intro:
          "비뇨기계는 혈액 내 노폐물을 소변으로 배출하는 일을 담당하는 기관입니다.",
        description:
          "주요 발생 질환은 신부전, 방광염, 요도염, 신우신염, 결석, 방광요도, 종양 등이 있으며 특히 노령 동물에서는 만성 신부전증을 겪는 환자가 상당히 많습니다.<br/><br/>또한 고양이에서는 하부요로계증후군(FLUTD)이라는 특이적인 질환의 발생 빈도가 높은 편입니다.<br/>고양이가 화장실에서 낑낑거리면서 소변을 못본다면 빨리 병원에 오셔야 합니다.<br/><br/>비뇨기계 질환은 재발이 쉬운 질환으로 치료와 더불어 지속적인 관리가 필요합니다.",
        tags: ["신부전", "FLUTD", "혈뇨", "결석", "배뇨곤란", "다음다뇨"],
      },
    ],
  },
  {
    upperRoute: "/subjects",
    label: "예방의학과",
    route: "/preventive",
    contents: [
      {
        categoryName: "강아지 예방접종",
        image: dogVaccine,
        imageDescription: "강아지 예방접종",
        intro:
          "강아지 예방접종 종류에는 종합백신, 코로나, 켄넬코프, 인플루엔자, 광견병이 있습니다.",
        description:
          "사람 역시 예방접종을 맞아 질병을 예방하듯, 강아지 역시 예방접종을 맞아 질병을 예방해야 합니다. 강아지는 생후 6주부터 어미 개의 초유를 받은 면역항체가 약해지기 때문에 상담 이후 생후 6주 부터 최초 예방 접종을 해주어야 합니다.",
        tags: [
          "종합백신(DHPPL)",
          "코로나 장염",
          "켄넬코프",
          "인플루엔자",
          "광견병",
        ],
      },
      {
        categoryName: "고양이 예방접종",
        image: catVaccine,
        imageDescription: "고양이 예방접종",
        intro: "고양이 예방접종 시기는 대략 8주 이후부터 시작하게 됩니다.",
        description:
          "이 때가 어미로 부터 나오는 모유를 먹을 때 생긴 항체 방어력이 약해지는 시기이기 때문인데요, 새끼 때는 고양이의 몸무게가 600~800g 정도가 되어야 예방접종을 시행할 수 있고 너무 약한 고양이들은 접종을 늦추기도 합니다. 컨디션이 좋지않고 몸무게가 미달일 때는 면역력이 받쳐주지 못하기에 접종을 받지 않고 건강과 컨디션이 회복 될 때 쯤 예방접종을 권장드립니다.",
        tags: [
          "고양이예방접종",
          "파보바이러스",
          "FIP",
          "칼리시바이러스",
          "고양이백혈병",
        ],
      },

      {
        categoryName: "심장사상충",
        image: heartworm,
        imageDescription: "심장내부에 기생하는 심장사상충",
        intro:
          "심장사상충은 개와 고양이 심장에 기생하는 선형 모양의 기생충입니다.",
        description:
          "모기를 통해 개과 동물에서 유충 형태로 감염됩니다. 감염된 유충이 개와 고양이 심장내 (주로 우심실과 폐동맥)에서 성장하여 질병을 일으킵니다. 임상증상으로는 활력저하, 호흡 이상, 체중 감소, 기침, 구토 등이 있습니다. 결과적으로, 심장 사상충에 의해 폐동맥 직경이 좁아지게 되고 결국 심장에서 폐로의 혈액순환이 감소하여 심할 경우 사망까지 이르게 되는 무서운 질병입니다.",
        tags: ["심장사상충", "심장사상충 예방"],
      },
      {
        categoryName: "외부·내부 기생충",
        image: tick,
        imageDescription: "교체해야함",
        intro: "개와 고양이에 기생하는 기생충은 외부와 내부로 나뉩니다.",
        description:
          "외부기생충<br/>풀숲이나 잔디밭에서 산책이나 활동을 할 경우, 진드기에 감염될 가능성이 있습니다. 진드기에 물리게 되면, 진드기의 입 부분까지 전부 제거가 필요하므로, 반드시 동물병원에 내원하여 진드기 제거 및 진드기 매개 감염 질환 (Babesia, Leptospira, Anaplasma, SFTS 등)에 대한 검사 및 진료를 받으셔야 하며, 외부 기생충 약을 정기적으로 해주실 것을 권고 드립니다.<br/><br/>내부기생충<br/>주로 변 혹은 생식을 통해서 장내 기생충 감염에 노출되는 경우가 많습니다. 위 상황에 많이 노출되는 동물들의 경우 내부 기생충약을 정기적으로 투약해주실 것을 권고 드립니다.",
        tags: ["신부전", "FLUTD", "혈뇨", "결석", "배뇨곤란", "다음다뇨"],
      },
    ],
  },
  {
    upperRoute: "/subjects",
    label: "피부과",
    route: "/dermal",
    contents: [
      {
        categoryName: "알러지성",
        image: allergy,
        imageDescription: "피내 알러지 테스트 중인 강아지",
        intro:
          "알러지성 피부병은 특정 외부 물질에 반응하여 피부에 발생하는 여러 가지 질병을 말합니다.",
        description:
          "알러지의 원인으로는 음식물, 진드기, 식물, 약물 등 매우 다양합니다.<br/>아토피 역시 알러지성 피부염에 포함되는 개념입니다.<br/><br/>일반적으로 소양감(간지러움), 피부염, 탈모 등의 증상을 보입니다.",
        tags: ["간지러움", "탈모", "외이염", "피부발적", "얼굴부음"],
      },
      {
        categoryName: "호르몬성",
        image: hormonalDerm,
        imageDescription: "쿠싱으로 인해 탈모 증상을 보이는 강아지",
        intro: "호르몬 질환으로 인해 발생하는 피부질병을 말합니다.",
        description:
          "특정 호르몬은 피부의 생애주기와 털의 생에 주기에 관여합니다.<br/>따라서 호르몬의 이상이 발생하면 피부에도 문제가 발생합니다.<br/><br/>거의 모든 호르몬성 질환이 피부병변을 동반하기 때문에 호르몬성 질환을 감별하는 것은 피부과에서 매우 중요합니다.<br/>대부분 호르몬의 양을 조절하기만 하면 되므로 적절한 치료만 한다면 예후는 좋은 편입니다.<br/>그러나 치료 시기를 놓치면 각종 합병증으로 인해 위험해질 수 있으므로 이상 증상이 보일 경우 반드시 정밀검진을 받아야 합니다.",
        tags: ["간지러움", "다음다뇨", "당뇨", "쿠싱", "에디슨", "갑상선"],
      },
      {
        categoryName: "감염성",
        image: demodex,
        imageDescription: "강아지에서 관찰된 모낭충",
        intro: "세균, 곰팡이, 기생충에 의해서 발생하는 피부병을 말합니다.",
        description:
          "정상적으로 존재하는 감염인자가 과다 증식하거나 정상적으로 존재해서는 안되는 감염인자에 의해서 발생합니다.<br/><br/>약욕과 함께 세균의 경우 항생제, 곰팡이의 경우 항진균제, 기생충의 경우 항기생충제가 사용됩니다.<br/><br/>감염성 피부염은 대부분 2차적으로 발생하므로 1차적 원인을 찾아내는 것이 매우 중요합니다.<br/>1차적 원인으로는 알러지성과 호르몬성이 가장 흔합니다.",
        tags: ["간지러움", "탈모", "화농성피부염", "링웜", "모낭충"],
      },
      {
        categoryName: "자가면역성",
        image: immuneMediated,
        imageDescription: "개 낙엽천포창(pemphigus foliaceus) 환자",
        intro:
          "면역시스템이 비정상적으로 작동하여 자기자신의 피부를 공격하는 질병입니다.",
        description:
          "이러한 면역 반응은 피부 세포 및 조직에 손상을 초래하며 다양한 피부 증상을 유발할 수 있습니다.<br/><br/>치료를 위해서는 대부분 면역 억제제를 투여합니다.",
        tags: ["pemphigus ", "천포창", "피부궤양"],
      },
      {
        categoryName: "종양성",
        image: skincancer,
        imageDescription: "교체해야함",
        intro: "피부에 발생하는 종양성 질병을 말합니다.",
        description:
          "피부에서 발생하는 종양 역시 양성종양과 악성종양으로 구분됩니다.<br/>접근성이 좋기 때문에 생검(세포학적검사)을 통해 감별이 가능합니다.<br/><br/>악성종양은 수술적으로 제거해야합니다.<br/> 양성종양 역시 미용적 목적으로 제거하기도 합니다.",
        tags: ["지방종", "림프종", "조직구종", "흑색종"],
      },
    ],
  },
  {
    upperRoute: "/subjects",
    label: "외과",
    route: "/surgery",
    contents: [
      {
        categoryName: "일반외과",
        image: allergy,
        imageDescription: "피내 알러지 테스트 중인 강아지",
        intro:
          "알러지성 피부병은 특정 외부 물질에 반응하여 피부에 발생하는 여러 가지 질병을 말합니다.",
        description:
          "알러지의 원인으로는 음식물, 진드기, 식물, 약물 등 매우 다양합니다.<br/>아토피 역시 알러지성 피부염에 포함되는 개념입니다.<br/><br/>일반적으로 소양감(간지러움), 피부염, 탈모 등의 증상을 보입니다.",
        tags: ["간지러움", "탈모", "외이염", "피부발적", "얼굴부음"],
      },
      {
        categoryName: "정형외과",
        image: hormonalDerm,
        imageDescription: "쿠싱으로 인해 탈모 증상을 보이는 강아지",
        intro: "호르몬 질환으로 인해 발생하는 피부질병을 말합니다.",
        description:
          "특정 호르몬은 피부의 생애주기와 털의 생에 주기에 관여합니다.<br/>따라서 호르몬의 이상이 발생하면 피부에도 문제가 발생합니다.<br/><br/>거의 모든 호르몬성 질환이 피부병변을 동반하기 때문에 호르몬성 질환을 감별하는 것은 피부과에서 매우 중요합니다.<br/>대부분 호르몬의 양을 조절하기만 하면 되므로 적절한 치료만 한다면 예후는 좋은 편입니다.<br/>그러나 치료 시기를 놓치면 각종 합병증으로 인해 위험해질 수 있으므로 이상 증상이 보일 경우 반드시 정밀검진을 받아야 합니다.",
        tags: [
          "간지러움",
          "다음다뇨",
          "복부팽만",
          "체중감소",
          "당뇨",
          "쿠싱",
          "에디슨",
          "갑상선",
        ],
      },
      {
        categoryName: "신경외과",
        image: demodex,
        imageDescription: "강아지에서 관찰된 모낭충",
        intro: "세균, 곰팡이, 기생충에 의해서 발생하는 피부병을 말합니다.",
        description:
          "정상적으로 존재하는 감염인자가 과다 증식하거나 정상적으로 존재해서는 안되는 감염인자에 의해서 발생합니다.<br/><br/>약욕과 함께 세균의 경우 항생제, 곰팡이의 경우 항진균제, 기생충의 경우 항기생충제가 사용됩니다.<br/><br/>감염성 피부염은 대부분 2차적으로 발생하므로 1차적 원인을 찾아내는 것이 매우 중요합니다.<br/>1차적 원인으로는 알러지성과 호르몬성이 가장 흔합니다.",
        tags: ["간지러움", "탈모", "화농성피부염", "링웜", "모낭충"],
      },
    ],
  },
  {
    upperRoute: "/subjects",
    label: "영상의학과",
    route: "/radiology",
    contents: [
      {
        categoryName: "알러지성",
        image: allergy,
        imageDescription: "피내 알러지 테스트 중인 강아지",
        intro:
          "알러지성 피부병은 특정 외부 물질에 반응하여 피부에 발생하는 여러 가지 질병을 말합니다.",
        description:
          "알러지의 원인으로는 음식물, 진드기, 식물, 약물 등 매우 다양합니다.<br/>아토피 역시 알러지성 피부염에 포함되는 개념입니다.<br/><br/>일반적으로 소양감(간지러움), 피부염, 탈모 등의 증상을 보입니다.",
        tags: ["간지러움", "탈모", "외이염", "피부발적", "얼굴부음"],
      },
      {
        categoryName: "호르몬성",
        image: hormonalDerm,
        imageDescription: "쿠싱으로 인해 탈모 증상을 보이는 강아지",
        intro: "호르몬 질환으로 인해 발생하는 피부질병을 말합니다.",
        description:
          "특정 호르몬은 피부의 생애주기와 털의 생에 주기에 관여합니다.<br/>따라서 호르몬의 이상이 발생하면 피부에도 문제가 발생합니다.<br/><br/>거의 모든 호르몬성 질환이 피부병변을 동반하기 때문에 호르몬성 질환을 감별하는 것은 피부과에서 매우 중요합니다.<br/>대부분 호르몬의 양을 조절하기만 하면 되므로 적절한 치료만 한다면 예후는 좋은 편입니다.<br/>그러나 치료 시기를 놓치면 각종 합병증으로 인해 위험해질 수 있으므로 이상 증상이 보일 경우 반드시 정밀검진을 받아야 합니다.",
        tags: ["간지러움", "다음다뇨", "당뇨", "쿠싱", "에디슨", "갑상선"],
      },
      {
        categoryName: "감염성",
        image: demodex,
        imageDescription: "강아지에서 관찰된 모낭충",
        intro: "세균, 곰팡이, 기생충에 의해서 발생하는 피부병을 말합니다.",
        description:
          "정상적으로 존재하는 감염인자가 과다 증식하거나 정상적으로 존재해서는 안되는 감염인자에 의해서 발생합니다.<br/><br/>약욕과 함께 세균의 경우 항생제, 곰팡이의 경우 항진균제, 기생충의 경우 항기생충제가 사용됩니다.<br/><br/>감염성 피부염은 대부분 2차적으로 발생하므로 1차적 원인을 찾아내는 것이 매우 중요합니다.<br/>1차적 원인으로는 알러지성과 호르몬성이 가장 흔합니다.",
        tags: ["간지러움", "탈모", "화농성피부염", "링웜", "모낭충"],
      },
      {
        categoryName: "자가면역성",
        image: immuneMediated,
        imageDescription: "개 낙엽천포창(pemphigus foliaceus) 환자",
        intro:
          "면역시스템이 비정상적으로 작동하여 자기자신의 피부를 공격하는 질병입니다.",
        description:
          "이러한 면역 반응은 피부 세포 및 조직에 손상을 초래하며 다양한 피부 증상을 유발할 수 있습니다.<br/><br/>치료를 위해서는 대부분 면역 억제제를 투여합니다.",
        tags: ["pemphigus ", "천포창", "피부궤양"],
      },
      {
        categoryName: "종양성",
        image: skincancer,
        imageDescription: "교체해야함",
        intro: "피부에 발생하는 종양성 질병을 말합니다.",
        description:
          "피부에서 발생하는 종양 역시 양성종양과 악성종양으로 구분됩니다.<br/>접근성이 좋기 때문에 생검(세포학적검사)을 통해 감별이 가능합니다.<br/><br/>악성종양은 수술적으로 제거해야합니다.<br/> 양성종양 역시 미용적 목적으로 제거하기도 합니다.",
        tags: ["지방종", "림프종", "조직구종", "흑색종"],
      },
    ],
  },

  {
    upperRoute: "/subjects",
    label: "안과",
    route: "/eye",
    contents: [
      {
        categoryName: "알러지성",
        image: allergy,
        imageDescription: "피내 알러지 테스트 중인 강아지",
        intro:
          "알러지성 피부병은 특정 외부 물질에 반응하여 피부에 발생하는 여러 가지 질병을 말합니다.",
        description:
          "알러지의 원인으로는 음식물, 진드기, 식물, 약물 등 매우 다양합니다.<br/>아토피 역시 알러지성 피부염에 포함되는 개념입니다.<br/><br/>일반적으로 소양감(간지러움), 피부염, 탈모 등의 증상을 보입니다.",
        tags: ["간지러움", "탈모", "외이염", "피부발적", "얼굴부음"],
      },
      {
        categoryName: "호르몬성",
        image: hormonalDerm,
        imageDescription: "쿠싱으로 인해 탈모 증상을 보이는 강아지",
        intro: "호르몬 질환으로 인해 발생하는 피부질병을 말합니다.",
        description:
          "특정 호르몬은 피부의 생애주기와 털의 생에 주기에 관여합니다.<br/>따라서 호르몬의 이상이 발생하면 피부에도 문제가 발생합니다.<br/><br/>거의 모든 호르몬성 질환이 피부병변을 동반하기 때문에 호르몬성 질환을 감별하는 것은 피부과에서 매우 중요합니다.<br/>대부분 호르몬의 양을 조절하기만 하면 되므로 적절한 치료만 한다면 예후는 좋은 편입니다.<br/>그러나 치료 시기를 놓치면 각종 합병증으로 인해 위험해질 수 있으므로 이상 증상이 보일 경우 반드시 정밀검진을 받아야 합니다.",
        tags: ["간지러움", "다음다뇨", "당뇨", "쿠싱", "에디슨", "갑상선"],
      },
      {
        categoryName: "감염성",
        image: demodex,
        imageDescription: "강아지에서 관찰된 모낭충",
        intro: "세균, 곰팡이, 기생충에 의해서 발생하는 피부병을 말합니다.",
        description:
          "정상적으로 존재하는 감염인자가 과다 증식하거나 정상적으로 존재해서는 안되는 감염인자에 의해서 발생합니다.<br/><br/>약욕과 함께 세균의 경우 항생제, 곰팡이의 경우 항진균제, 기생충의 경우 항기생충제가 사용됩니다.<br/><br/>감염성 피부염은 대부분 2차적으로 발생하므로 1차적 원인을 찾아내는 것이 매우 중요합니다.<br/>1차적 원인으로는 알러지성과 호르몬성이 가장 흔합니다.",
        tags: ["간지러움", "탈모", "화농성피부염", "링웜", "모낭충"],
      },
      {
        categoryName: "자가면역성",
        image: immuneMediated,
        imageDescription: "개 낙엽천포창(pemphigus foliaceus) 환자",
        intro:
          "면역시스템이 비정상적으로 작동하여 자기자신의 피부를 공격하는 질병입니다.",
        description:
          "이러한 면역 반응은 피부 세포 및 조직에 손상을 초래하며 다양한 피부 증상을 유발할 수 있습니다.<br/><br/>치료를 위해서는 대부분 면역 억제제를 투여합니다.",
        tags: ["pemphigus ", "천포창", "피부궤양"],
      },
      {
        categoryName: "종양성",
        image: skincancer,
        imageDescription: "교체해야함",
        intro: "피부에 발생하는 종양성 질병을 말합니다.",
        description:
          "피부에서 발생하는 종양 역시 양성종양과 악성종양으로 구분됩니다.<br/>접근성이 좋기 때문에 생검(세포학적검사)을 통해 감별이 가능합니다.<br/><br/>악성종양은 수술적으로 제거해야합니다.<br/> 양성종양 역시 미용적 목적으로 제거하기도 합니다.",
        tags: ["지방종", "림프종", "조직구종", "흑색종"],
      },
    ],
  },
  {
    upperRoute: "/subjects",
    label: "치과",
    route: "/dental",
    contents: [
      {
        categoryName: "알러지성",
        image: allergy,
        imageDescription: "피내 알러지 테스트 중인 강아지",
        intro:
          "알러지성 피부병은 특정 외부 물질에 반응하여 피부에 발생하는 여러 가지 질병을 말합니다.",
        description:
          "알러지의 원인으로는 음식물, 진드기, 식물, 약물 등 매우 다양합니다.<br/>아토피 역시 알러지성 피부염에 포함되는 개념입니다.<br/><br/>일반적으로 소양감(간지러움), 피부염, 탈모 등의 증상을 보입니다.",
        tags: ["간지러움", "탈모", "외이염", "피부발적", "얼굴부음"],
      },
      {
        categoryName: "호르몬성",
        image: hormonalDerm,
        imageDescription: "쿠싱으로 인해 탈모 증상을 보이는 강아지",
        intro: "호르몬 질환으로 인해 발생하는 피부질병을 말합니다.",
        description:
          "특정 호르몬은 피부의 생애주기와 털의 생에 주기에 관여합니다.<br/>따라서 호르몬의 이상이 발생하면 피부에도 문제가 발생합니다.<br/><br/>거의 모든 호르몬성 질환이 피부병변을 동반하기 때문에 호르몬성 질환을 감별하는 것은 피부과에서 매우 중요합니다.<br/>대부분 호르몬의 양을 조절하기만 하면 되므로 적절한 치료만 한다면 예후는 좋은 편입니다.<br/>그러나 치료 시기를 놓치면 각종 합병증으로 인해 위험해질 수 있으므로 이상 증상이 보일 경우 반드시 정밀검진을 받아야 합니다.",
        tags: ["간지러움", "다음다뇨", "당뇨", "쿠싱", "에디슨", "갑상선"],
      },
      {
        categoryName: "감염성",
        image: demodex,
        imageDescription: "강아지에서 관찰된 모낭충",
        intro: "세균, 곰팡이, 기생충에 의해서 발생하는 피부병을 말합니다.",
        description:
          "정상적으로 존재하는 감염인자가 과다 증식하거나 정상적으로 존재해서는 안되는 감염인자에 의해서 발생합니다.<br/><br/>약욕과 함께 세균의 경우 항생제, 곰팡이의 경우 항진균제, 기생충의 경우 항기생충제가 사용됩니다.<br/><br/>감염성 피부염은 대부분 2차적으로 발생하므로 1차적 원인을 찾아내는 것이 매우 중요합니다.<br/>1차적 원인으로는 알러지성과 호르몬성이 가장 흔합니다.",
        tags: ["간지러움", "탈모", "화농성피부염", "링웜", "모낭충"],
      },
      {
        categoryName: "자가면역성",
        image: immuneMediated,
        imageDescription: "개 낙엽천포창(pemphigus foliaceus) 환자",
        intro:
          "면역시스템이 비정상적으로 작동하여 자기자신의 피부를 공격하는 질병입니다.",
        description:
          "이러한 면역 반응은 피부 세포 및 조직에 손상을 초래하며 다양한 피부 증상을 유발할 수 있습니다.<br/><br/>치료를 위해서는 대부분 면역 억제제를 투여합니다.",
        tags: ["pemphigus ", "천포창", "피부궤양"],
      },
      {
        categoryName: "종양성",
        image: skincancer,
        imageDescription: "교체해야함",
        intro: "피부에 발생하는 종양성 질병을 말합니다.",
        description:
          "피부에서 발생하는 종양 역시 양성종양과 악성종양으로 구분됩니다.<br/>접근성이 좋기 때문에 생검(세포학적검사)을 통해 감별이 가능합니다.<br/><br/>악성종양은 수술적으로 제거해야합니다.<br/> 양성종양 역시 미용적 목적으로 제거하기도 합니다.",
        tags: ["지방종", "림프종", "조직구종", "흑색종"],
      },
    ],
  },
  {
    upperRoute: "/subjects",
    label: "응급의학과",
    route: "/emergency",
    contents: [
      {
        categoryName: "알러지성",
        image: allergy,
        imageDescription: "피내 알러지 테스트 중인 강아지",
        intro:
          "알러지성 피부병은 특정 외부 물질에 반응하여 피부에 발생하는 여러 가지 질병을 말합니다.",
        description:
          "알러지의 원인으로는 음식물, 진드기, 식물, 약물 등 매우 다양합니다.<br/>아토피 역시 알러지성 피부염에 포함되는 개념입니다.<br/><br/>일반적으로 소양감(간지러움), 피부염, 탈모 등의 증상을 보입니다.",
        tags: ["간지러움", "탈모", "외이염", "피부발적", "얼굴부음"],
      },
      {
        categoryName: "호르몬성",
        image: hormonalDerm,
        imageDescription: "쿠싱으로 인해 탈모 증상을 보이는 강아지",
        intro: "호르몬 질환으로 인해 발생하는 피부질병을 말합니다.",
        description:
          "특정 호르몬은 피부의 생애주기와 털의 생에 주기에 관여합니다.<br/>따라서 호르몬의 이상이 발생하면 피부에도 문제가 발생합니다.<br/><br/>거의 모든 호르몬성 질환이 피부병변을 동반하기 때문에 호르몬성 질환을 감별하는 것은 피부과에서 매우 중요합니다.<br/>대부분 호르몬의 양을 조절하기만 하면 되므로 적절한 치료만 한다면 예후는 좋은 편입니다.<br/>그러나 치료 시기를 놓치면 각종 합병증으로 인해 위험해질 수 있으므로 이상 증상이 보일 경우 반드시 정밀검진을 받아야 합니다.",
        tags: ["간지러움", "다음다뇨", "당뇨", "쿠싱", "에디슨", "갑상선"],
      },
      {
        categoryName: "감염성",
        image: demodex,
        imageDescription: "강아지에서 관찰된 모낭충",
        intro: "세균, 곰팡이, 기생충에 의해서 발생하는 피부병을 말합니다.",
        description:
          "정상적으로 존재하는 감염인자가 과다 증식하거나 정상적으로 존재해서는 안되는 감염인자에 의해서 발생합니다.<br/><br/>약욕과 함께 세균의 경우 항생제, 곰팡이의 경우 항진균제, 기생충의 경우 항기생충제가 사용됩니다.<br/><br/>감염성 피부염은 대부분 2차적으로 발생하므로 1차적 원인을 찾아내는 것이 매우 중요합니다.<br/>1차적 원인으로는 알러지성과 호르몬성이 가장 흔합니다.",
        tags: ["간지러움", "탈모", "화농성피부염", "링웜", "모낭충"],
      },
      {
        categoryName: "자가면역성",
        image: immuneMediated,
        imageDescription: "개 낙엽천포창(pemphigus foliaceus) 환자",
        intro:
          "면역시스템이 비정상적으로 작동하여 자기자신의 피부를 공격하는 질병입니다.",
        description:
          "이러한 면역 반응은 피부 세포 및 조직에 손상을 초래하며 다양한 피부 증상을 유발할 수 있습니다.<br/><br/>치료를 위해서는 대부분 면역 억제제를 투여합니다.",
        tags: ["pemphigus ", "천포창", "피부궤양"],
      },
      {
        categoryName: "종양성",
        image: skincancer,
        imageDescription: "교체해야함",
        intro: "피부에 발생하는 종양성 질병을 말합니다.",
        description:
          "피부에서 발생하는 종양 역시 양성종양과 악성종양으로 구분됩니다.<br/>접근성이 좋기 때문에 생검(세포학적검사)을 통해 감별이 가능합니다.<br/><br/>악성종양은 수술적으로 제거해야합니다.<br/> 양성종양 역시 미용적 목적으로 제거하기도 합니다.",
        tags: ["지방종", "림프종", "조직구종", "흑색종"],
      },
    ],
  },
];
