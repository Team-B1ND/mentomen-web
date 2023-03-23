export function uploadDateTime(date:Date){
    const dateFormat = date.getFullYear() + "년 " + (date.getMonth()+1) + "월 " + date.getDate() + "일"
    return dateFormat;
}