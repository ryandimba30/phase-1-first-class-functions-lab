// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

 function returnFirstTwoDrivers (drivers) {

    return ['Antonia', 'Nuru'];
 }

 function returnLastTwoDrivers (drivers) {

    return ['Amari' , 'Mo'];
 }

 const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

 function createFareMultiplier(int) {
    return function(fare=5) {
        return fare * int;
    }
 }

 const fareDoubler = function(fare) {
    return createFareMultiplier(2)(fare);
 }

 const fareTripler = function(fare) {
    return createFareMultiplier(3)(fare);
 }

 function selectDifferentDrivers(arrayOfDrivers, fn) {

    return fn(arrayOfDrivers);
 }
