const dataDays = ['день', 'дня', 'дней'];
const dataHours = ['час', 'часа', 'часов'];
const dataMinutes = ['минута', 'минуты', 'минут'];
const dataSeconds = ['секунда', 'секунды', 'секунд'];

const declOfNum = (n, titles) => titles[n % 10 === 1 && n % 100 !== 11 ?
  0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2];

export default {
  dataDays,
  dataHours,
  dataMinutes,
  dataSeconds,
  declOfNum,
};
