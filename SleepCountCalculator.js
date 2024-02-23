const getSleepHours = day => {
    if (day === 'monday'){
        return 8;
    }
    else if(day === 'tuesday'){
         return 6;
    }
    else if (day === 'wednesday'){
        return 7;
    }
    else if (day === 'thursday'){
        return 3.5;
    }
    else if (day === 'friday'){
        return 5;
    }
    else if( day === 'saturday'){
       return 10;
    }
    else if (day === 'sunday'){
        return 9;
    }
    else{
        return 'Error!, Please enter a valid day of the week.'
    }
}
console.log(getSleepHours('tuesday'));

function getActualSleepHours () {
    return getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday');
}

function getIdealSleepHours () {
    const idealHours = 6.5;
    return idealHours * 7;
}

console.log(getActualSleepHours());
console.log(getIdealSleepHours());

const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
    if (actualSleepHours === idealSleepHours){
        console.log('You got the perfect amount of sleep');
    }
    else if (actualSleepHours > idealSleepHours){
        console.log('You got '+ (actualSleepHours - idealSleepHours)+ 'hour(s) more of sleep than you needed.');
    }
    else if(actualSleepHours < idealSleepHours){
        console.log('You got '+(idealSleepHours - actualSleepHours)+ ' hour(s) less sleep than you needed this week. Get some rest')
    }
}

calculateSleepDebt();