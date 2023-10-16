export const getTime = () => {
    let hours = new Date().getHours();
    let message = "";
    if (hours <= 9) {
        message = "上午";
    } else if (hours <= 12) {
        message = "中午";
    } else if (hours <= 16) {
        message = "中午";
    } else {
        message = "晚上";
    }
    return message;
}