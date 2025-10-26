export function timeAgo(date: Date) {
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMinutes = Math.floor(diffMs / (1000 * 60));
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffMinutes < 60) {
    return `${diffMinutes} min+`;
  } else if (diffHours < 24) {
    return `${diffHours} hr+`;
  } else if (diffDays < 7) {
    return `${diffDays} day ago`;
  } else if (diffDays < 14) {
    return `1 week ago`;
  } else if (diffDays < 21) {
    return `2 weeks ago`;
  } else if (diffDays < 28) {
    return `3 weeks ago`;
  } else if (diffDays < 60) {
    return `1 month ago`;
  } else if (diffDays < 90) {
    return `2 months ago`;
  } else if (diffDays < 365) {
    const months = Math.floor(diffDays / 30);
    return `${months} months ago`;
  } else {
    const years = Math.floor(diffDays / 365);
    return `${years} year afo`;
  }
}
