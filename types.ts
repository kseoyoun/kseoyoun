
export interface ReadingDay {
  id: number;
  week: number;
  day: number;
  chapters: string;
  title: string;
  dateDisplay: string; // "1월 1일 (월)" 형식
}

export interface UserProgress {
  completedDays: number[]; // Array of readingDay ids
}
