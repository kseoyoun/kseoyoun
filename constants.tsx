
import { ReadingDay } from './types';

const getDayOfWeek = (date: Date): string => {
  const week = ['일', '월', '화', '수', '목', '금', '토'];
  return week[date.getDay()];
};

// 1월 1일부터 56일간의 날짜 생성 (2025년 기준)
const generateDates = (count: number): string[] => {
  const dates: string[] = [];
  const start = new Date(2025, 0, 1); // 2025년 1월 1일
  for (let i = 0; i < count; i++) {
    const current = new Date(start);
    current.setDate(start.getDate() + i);
    const month = current.getMonth() + 1;
    const day = current.getDate();
    const dow = getDayOfWeek(current);
    dates.push(`${month}월 ${day}일 (${dow})`);
  }
  return dates;
};

const dates = generateDates(56);

export const REFINED_PLAN: ReadingDay[] = [
  // 1주: 심판과 정결 (1-8장)
  { id: 1, week: 1, day: 1, chapters: "1장", title: "슬픈 노래와 회복의 약속", dateDisplay: dates[0] },
  { id: 2, week: 1, day: 2, chapters: "2장", title: "시온의 영광과 사람의 낮아짐", dateDisplay: dates[1] },
  { id: 3, week: 1, day: 3, chapters: "3-4장", title: "유다의 심판과 남은 자의 영광", dateDisplay: dates[2] },
  { id: 4, week: 1, day: 4, chapters: "5장", title: "포도원의 노래와 화 있을진저", dateDisplay: dates[3] },
  { id: 5, week: 1, day: 5, chapters: "6장", title: "이사야의 소명과 거룩한 씨", dateDisplay: dates[4] },
  { id: 6, week: 1, day: 6, chapters: "7장", title: "임마누엘의 징조", dateDisplay: dates[5] },
  { id: 7, week: 1, day: 7, chapters: "8장", title: "하나님의 도우심과 마헬살랄하스바스", dateDisplay: dates[6] },

  // 2주: 열방을 향한 경고 (9-20장)
  { id: 8, week: 2, day: 8, chapters: "9장", title: "평강의 왕의 탄생", dateDisplay: dates[7] },
  { id: 9, week: 2, day: 9, chapters: "10장", title: "앗수르를 향한 심판의 막대기", dateDisplay: dates[8] },
  { id: 10, week: 2, day: 10, chapters: "11-12장", title: "이새의 줄기에서 날 싹과 구원의 노래", dateDisplay: dates[9] },
  { id: 11, week: 2, day: 11, chapters: "13-14장", title: "바벨론에 대한 경고와 계명성", dateDisplay: dates[10] },
  { id: 12, week: 2, day: 12, chapters: "15-16장", title: "모압에 대한 눈물의 경고", dateDisplay: dates[11] },
  { id: 13, week: 2, day: 13, chapters: "17-18장", title: "다메섹의 멸망과 구스에 대한 전갈", dateDisplay: dates[12] },
  { id: 14, week: 2, day: 14, chapters: "19-20장", title: "애굽의 심판과 이사야의 벗은 몸 징조", dateDisplay: dates[13] },

  // 3주: 온 세상의 주권자 (21-29장)
  { id: 15, week: 3, day: 15, chapters: "21-22장", title: "해변 광야와 환상 골짜기의 경고", dateDisplay: dates[14] },
  { id: 16, week: 3, day: 16, chapters: "23장", title: "두로의 멸망과 회복", dateDisplay: dates[15] },
  { id: 17, week: 3, day: 17, chapters: "24-25장", title: "온 세상의 심판과 여호와의 연회", dateDisplay: dates[16] },
  { id: 18, week: 3, day: 18, chapters: "26장", title: "유다 땅의 노래와 부활의 소망", dateDisplay: dates[17] },
  { id: 19, week: 3, day: 19, chapters: "27장", title: "리워야단의 심판과 이스라엘의 집합", dateDisplay: dates[18] },
  { id: 20, week: 3, day: 20, chapters: "28장", title: "에브라임의 교만과 시온의 기초석", dateDisplay: dates[19] },
  { id: 21, week: 3, day: 21, chapters: "29장", title: "아리엘의 곤경과 봉한 책", dateDisplay: dates[20] },

  // 4주: 역사 속의 하나님 (30-40장)
  { id: 22, week: 4, day: 22, chapters: "30장", title: "애굽을 의지하는 어리석음", dateDisplay: dates[21] },
  { id: 23, week: 4, day: 23, chapters: "31-32장", title: "도움은 여호와께 있고 의로운 왕이 통치함", dateDisplay: dates[22] },
  { id: 24, week: 4, day: 24, chapters: "33장", title: "우리를 구원하실 입법자 여호와", dateDisplay: dates[23] },
  { id: 25, week: 4, day: 25, chapters: "34-35장", title: "열방의 심판과 거룩한 대로", dateDisplay: dates[24] },
  { id: 26, week: 4, day: 26, chapters: "36-37장", title: "산헤립의 조롱과 히스기야의 기도", dateDisplay: dates[25] },
  { id: 27, week: 4, day: 27, chapters: "38-39장", title: "히스기야의 생명 연장과 바벨론 사절단", dateDisplay: dates[26] },
  { id: 28, week: 4, day: 28, chapters: "40장", title: "내 백성을 위로하라 (광야의 외치는 소리)", dateDisplay: dates[27] },

  // 5주: 구원과 회복의 시작 (41-48장)
  { id: 29, week: 5, day: 29, chapters: "41장", title: "땅 끝에서 부르신 나의 종", dateDisplay: dates[28] },
  { id: 30, week: 5, day: 30, chapters: "42장", title: "여호와의 종과 새 노래", dateDisplay: dates[29] },
  { id: 31, week: 5, day: 31, chapters: "43장", title: "너는 내 것이라 (구속의 약속)", dateDisplay: dates[30] },
  { id: 32, week: 5, day: 32, chapters: "44장", title: "우상의 허망함과 구속자 여호와", dateDisplay: dates[31] },
  { id: 33, week: 5, day: 33, chapters: "45장", title: "기름 부음 받은 고레스", dateDisplay: dates[32] },
  { id: 34, week: 5, day: 34, chapters: "46-47장", title: "벨과 느보의 굴복과 바벨론의 수치", dateDisplay: dates[33] },
  { id: 35, week: 5, day: 35, chapters: "48장", title: "옛 일과 새 일 (이스라엘을 연단하심)", dateDisplay: dates[34] },

  // 6주: 고난 받는 종과 구속 (49-55장)
  { id: 36, week: 6, day: 36, chapters: "49장", title: "이방의 빛이 된 종", dateDisplay: dates[35] },
  { id: 37, week: 6, day: 37, chapters: "50장", title: "종의 순종과 학자의 혀", dateDisplay: dates[36] },
  { id: 38, week: 6, day: 38, chapters: "51장", title: "아브라함의 바위와 여호와의 위로", dateDisplay: dates[37] },
  { id: 39, week: 6, day: 39, chapters: "52장", title: "아름다운 발과 여호와의 통치", dateDisplay: dates[38] },
  { id: 40, week: 6, day: 40, chapters: "53장", title: "그가 찔림은 우리의 허물 때문이라", dateDisplay: dates[39] },
  { id: 41, week: 6, day: 41, chapters: "54장", title: "잉태하지 못하던 여인의 노래", dateDisplay: dates[40] },
  { id: 42, week: 6, day: 42, chapters: "55장", title: "목마른 자들아 다 오라 (영원한 언약)", dateDisplay: dates[41] },

  // 7주: 공의와 영광의 빛 (56-62장)
  { id: 43, week: 7, day: 43, chapters: "56장", title: "이방인과 고자를 위한 약속", dateDisplay: dates[42] },
  { id: 44, week: 7, day: 44, chapters: "57장", title: "겸손한 자의 치유와 평강", dateDisplay: dates[43] },
  { id: 45, week: 7, day: 45, chapters: "58장", title: "하나님이 기뻐하시는 참된 금식", dateDisplay: dates[44] },
  { id: 46, week: 7, day: 46, chapters: "59장", title: "죄악의 장벽과 구속자의 강림", dateDisplay: dates[45] },
  { id: 47, week: 7, day: 47, chapters: "60장", title: "일어나라 빛을 발하라 (시온의 영광)", dateDisplay: dates[46] },
  { id: 48, week: 7, day: 48, chapters: "61장", title: "여호와의 은혜의 해 (기름 부음 받은 자)", dateDisplay: dates[47] },
  { id: 49, week: 7, day: 49, chapters: "62장", title: "예루살렘의 파수꾼과 새 이름", dateDisplay: dates[48] },

  // 8주: 새 하늘과 새 땅 (63-66장)
  { id: 50, week: 8, day: 50, chapters: "63장", title: "에돔에서 오는 심판자와 주의 자비", dateDisplay: dates[49] },
  { id: 51, week: 8, day: 51, chapters: "64장", title: "하늘을 가르고 강림하소서", dateDisplay: dates[50] },
  { id: 52, week: 8, day: 52, chapters: "65:1-12", title: "패역한 백성과 하나님의 보응", dateDisplay: dates[51] },
  { id: 53, week: 8, day: 53, chapters: "65:13-25", title: "새 하늘과 새 땅의 약속", dateDisplay: dates[52] },
  { id: 54, week: 8, day: 54, chapters: "66:1-14", title: "참된 예배와 시온의 해산", dateDisplay: dates[53] },
  { id: 55, week: 8, day: 55, chapters: "66:15-21", title: "열방의 소집과 영광의 선포", dateDisplay: dates[54] },
  { id: 56, week: 8, day: 56, chapters: "66:22-24", title: "영원한 새 창조와 마지막 경고", dateDisplay: dates[55] },
];

export const ISAIAH_INFO = {
  author: "아모스의 아들 이사야 (Isaiah)",
  period: "주전 8세기경 (약 BC 740-680년)",
  description: "이사야서는 '구약의 복음서'라 불리며, 전반부(1-39장)는 유다와 열방에 대한 하나님의 심판과 공의를, 후반부(40-66장)는 장차 오실 메시아를 통한 위로와 구원, 그리고 회복의 소망을 노래합니다."
};
