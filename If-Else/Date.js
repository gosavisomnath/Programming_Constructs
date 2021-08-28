var startDate = new Date(2021, 04, 20);
var endDate = new Date(2020, 07, 22);
let userDate = new Date(2029, 02, 23);
let pass = 0;
if (userDate > startDate && userDate < endDate) {
    pass = 1;
}
else {
    pass = 0;
}