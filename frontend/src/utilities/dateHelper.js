import { dayOfWeekMap } from './constants';

export const getFirstDayOfMonth = () => {
  let date = new Date();
  date = new Date(date.getFullYear(), date.getMonth(), 1);
  return new Date(date.setUTCHours(24, 0, 0, 0)).toISOString();
};

export const getLastDayOfMonth = () => {
  let date = new Date();
  date = Date(date.getFullYear(), date.getMonth() + 1, 0);
  return new Date(date.setUTCHours(24, 0, 0, 0)).toISOString();
};

Date.prototype.getNextWeekMonday = function () {
  const d = new Date(this.getTime());
  let diff = d.getDate() - d.getDay() + 1;
  if (d.getDay() === 0) diff -= 7;
  return new Date(d.setDate(diff));
};

Date.prototype.getNextWeekDay = function () {
  const d = new Date(this.getTime());
  return new Date(d.setDate(d.getDate() + 7));
};

Date.prototype.getDayOfWeek = function (index) {
  const d = this.getNextWeekMonday();
  return new Date(d.setDate(d.getDate() + index));
};

export const getLessonDaysFromFreqList = (
  startDate,
  freqList,
  unitCount,
  allSameTime = false
) => {
  let initialList = freqList.map((value) =>
    startDate.getDayOfWeek(dayOfWeekMap[value])
  );
  let curr = 0;
  while (initialList.length < unitCount) {
    if (!allSameTime) {
      if (curr === 0) {
        initialList.push(initialList[curr]?.getNextWeekDay());
      } else {
        initialList.push(
          initialList[
            initialList.length - freqList.length
          ]?.getNextWeekDay()
        );
      }
    } else {
      initialList.push(startDate);
    }
    curr++;
  }

  return initialList;
};

export const calculateCountDown = (startDate, endDate) => {
  let diff =
    (Date.parse(new Date(endDate)) - Date.parse(new Date(startDate))) /
    1000;

  const countdown = {
    years: 0,
    days: 0,
    hrs: 0,
    mins: 0,
    secs: 0
  };

  const SECONDS_IN_MIN = 60;
  const SECONDS_IN_HR = 60 * 60;
  const SECONDS_IN_DAY = 24 * SECONDS_IN_HR;
  const SECONDS_IN_YEAR = 365.25 * SECONDS_IN_DAY;

  // calculate time difference between now and expected date
  if (diff >= SECONDS_IN_YEAR) {
    countdown.years = Math.floor(diff / SECONDS_IN_YEAR);
    diff -= countdown.years * SECONDS_IN_YEAR;
  }
  if (diff >= SECONDS_IN_DAY) {
    countdown.days = Math.floor(diff / SECONDS_IN_DAY);
    diff -= countdown.days * SECONDS_IN_DAY;
  }
  if (diff >= SECONDS_IN_HR) {
    countdown.hrs = Math.floor(diff / SECONDS_IN_HR);
    diff -= countdown.hrs * SECONDS_IN_HR;
  }
  if (diff >= SECONDS_IN_MIN) {
    countdown.mins = Math.floor(diff / SECONDS_IN_MIN);
    diff -= countdown.mins * SECONDS_IN_MIN;
  }
  countdown.secs = diff;

  return countdown;
};

export const getDaysDifferenceBetweenDates = ({ date1, date2 }) => {
  try {
    const d1 = new Date(date1);
    const d2 = new Date(date2);
    // The number of milliseconds in one day
    const ONE_DAY = 1000 * 60 * 60 * 24;

    // Calculate the difference in milliseconds
    const differenceMs = Math.abs(d1 - d2);

    // Convert back to days and return
    return Math.round(differenceMs / ONE_DAY);
  } catch {
    return null;
  }
};
