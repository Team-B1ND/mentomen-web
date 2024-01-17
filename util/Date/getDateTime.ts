export class GetDateTime {
  constructor(private date: Date) {}

  public uploadPostDateTime = () => {
    const dateFormat =
      this.date.getFullYear() +
      "년 " +
      (this.date.getMonth() + 1) +
      "월 " +
      this.date.getDate() +
      "일";
    return dateFormat;
  };

  public uploadTimeAgo = () => {
    if (typeof this.date === "undefined") {
      return "방금 전";
    }

    const currentDate = new Date(new Date().getTime() - 9 * 60 * 60 * 1000);

    const timeDifference = currentDate.getTime() - this.date.getTime();
    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);

    if (seconds < 10) {
      return "방금 전";
    } else if (seconds < 60) {
      return `${seconds}초 전`;
    } else if (minutes < 60) {
      return `${minutes}분 전`;
    } else if (hours < 24) {
      return `${hours}시간 전`;
    } else if (days < 30) {
      return `${days}일 전`;
    } else {
      return `${months}달 전`;
    }
  };
}
