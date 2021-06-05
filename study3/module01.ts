export function isWeekend(): boolean {
  const todayDate: Date = new Date();
  const day: number = todayDate.getDay();
  let code: boolean[] = [true, false, false, false, false, false, true];
  return code[day];
}
