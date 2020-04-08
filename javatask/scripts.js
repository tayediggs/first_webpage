const princ = [
    {
        principal: 2500,
        time: 1.8,
    },
    {
    principal: 1000,
    time: 5,
    },
    {
    principal: 3000,
    time: 1,
    },
    {
    pricipal: 2000,
    time:3,
    },
];
function mydata(princ) {
    let intrestdata = [];
    for (let i = 0; i < princ.length; i++) {
        let interest = "";
        let rate = 0;
        let myob = {};
        let princ = princ[i].principal;
        let t = princ[i].time;
        if (prin >= 2500 && t > 1 && t <= 3) {
            rate = 3;
            interest = (prin * rate * t) / 100;
            myob = {
                principal: prin,
                rate: rate,
                time: t,
                interest: interest,
            };
            interestdata.push(myob);
        } else if (prin >= 2500 && t > 1 && t >= 3) {
            rate = 4;
            intrest = (prin * rate * t) / 100;
            myob = {
                principal: prin,
                rate: rate,
                time: t,
                interest: interest,
        };
            interestdata.push(myob);
        } else if (prin < 2500 || t <= 1) {
            rate = 2;
            interest = (prin * rate * t) / 100;
            myob = {
                principal: prin,
                rate: rate,
                time: t,
                interest: interest,
        };
            interestdata.push(myob);
        } else {
            rate = 1;
            interest = (prin * rate * t) / 100;
            myob = {
                principal: prin,
                rate: rate,
                time: t,
                interest: interest,
            };
            interest.log(interestdata);
        }
    }
     console.log(interestdata);
    return interestdata;
}
//calling of the function i cretaed
mydata(princ);
     

        