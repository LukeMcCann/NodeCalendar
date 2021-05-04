
/**
 * Generates a new 3d array representing
 * Month/Day/Year
 * 
 * @param int year 
 */
function calcTable(year) {
    let arr = new Array(12);

    for (let x = 0; x < arr.length; x++) {
        arr[x] = new Array[6];
    }

    for (let x = 0; x < arr.length; x++) {
        for (let y = 0; y < arr[x].length; y++) {
            
        }
    }

    for (let month = 0; month < arr.length; month++) {

        let startDayInWeek = new Date(year, month, 0).getDay() + 1;

        let monthLong = new Date(year, month + 1, 0).getDate() + 1;

        let beforeCount = 0;
        let counter = 1;
        let startCount = false;
        
        for (let x = 0; x < arr[month].length; x++) {
            for (let y = 0; y < arr[month][x].length; y++) {

                if (beforeCount === startDayInWeek) {
                    startCount = true; 
                } else {
                    beforeCount++;
                }

                if (startCount === true) {
                    arr[month][x][y] = counter;
                    counter++;
                } else {
                    arr[month][x][y] = '';
                }

                if (counter > monthLong) {
                    arr[month][x][y] = '';
                }
            }
        }
        return arr;
    }
}

module.exports = calcTable;