export function formatDate(timestamp: number): string {
  const date = new Date(timestamp);
  const now = new Date();

  const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const startOfThatDay = new Date(date.getFullYear(), date.getMonth(), date.getDate());

  const diffMs = startOfThatDay.getTime() - startOfToday.getTime();
  const diffDays = diffMs / (1000 * 60 * 60 * 24);

  // 1. Special cases
  if (diffDays === 0) return "Today";
  if (diffDays === -1) return "Yesterday";
  if (diffDays === 1) return "Tomorrow";

  // 2. Within 7 days -> show weekday
  if (Math.abs(diffDays) < 7) {
    return date.toLocaleDateString("en-US", { weekday: "short" });
  }

  // 3. Same year -> show "Sep 12"
  if (date.getFullYear() === now.getFullYear()) {
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    }); 
  }

  // 4. Different year -> show "Jan 12 2026"
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}