// Code your solution in this file!

const drivers = ["Antonia", "Nuru", "Amari", "Mo"];

const returnFirstTwoDrivers = drivers => drivers.slice(0,2)

const returnLastTwoDrivers = drivers => drivers.slice(2)

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiplier) {
    function multiply(fare) {
        return fare * multiplier
    }
    return multiply
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = (drivers, returnLastTwoDrivers) => {
    return returnLastTwoDrivers(drivers)
}

console.log(createFareMultiplier(2)(40))

console.log(fareDoubler(40))

console.log(fareTripler(40))

console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers))
