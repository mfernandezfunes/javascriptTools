// Retorna un array de fechas entre dos fechas
var getDates = function(startDate, endDate) {
  let dates = [],
      currentDate = startDate,
      addDays = function(days) {
        let date = new Date(this.valueOf());
        date.setDate(date.getDate() + days);
        return date;
      };
  while (currentDate <= endDate) {
    dates.push(currentDate);
    currentDate = addDays.call(currentDate, 1);
  }
  return dates;
};

// Uso
var dates = getDates(new Date(2019,10,22), new Date(2019,11,25));                                                                                                           
dates.forEach(function(date) {
  console.log(date);
});
