var costCal = angular.module('CostCal', []);
    
costCal.controller('GettingCrazy', [
'$scope',  function ($scope) {
    var gc = this;
    gc.t = 0;
    var beforeTip = 0;
     gc.populate = function(){
        gc.t = gc.input * gc.tip;
        gc.t = gc.input * gc.tip;
        gc.t = gc.input * gc.tip;
        if(beforeTip != 0)
        {
            gc.result = beforeTip + gc.t;
        }
    };
    
    gc.update = function(){
        var temp = parseInt(gc.input, 10);
        beforeTip = (gc.state.rate / 100) * gc.input + temp;
        if(gc.t != 0)
        {
            gc.result = beforeTip + gc.t;
        }
    };
    
    gc.taxRates = [
            {
                state: 'WA',
                rate: '8.89'
            },
            {
                state: 'ID',
                rate: '6.01'
            },
            {
                state: 'CA',
                rate: '8.44'
            },
            {
                state: 'NV',
                rate: '7.94'
            },
            {
                state: 'AZ',
                rate: '8.17'
            },
            {
                state: 'UT',
                rate: '6.68'
            },
            {
                state: 'WY',
                rate: '5.47'
            },
            {
                state: 'CO',
                rate: '7.44'
            },
            {
                state: 'NM',
                rate: '7.35'
            },
            {
                state: 'ND',
                rate: '6.56'
            },
            {
                state: 'SD',
                rate: '5.83'
            },
            {
                state: 'NE',
                rate: '6.80'
            },
            {
                state: 'KS',
                rate: '8.20'
            },
            {
                state: 'OK',
                rate: '8.77'
            },
            {
                state: 'TX',
                rate: '8.05'
            },
            {
                state: 'MN',
                rate: '7.2'
            },
            {
                state: 'IA',
                rate: '6.78'
            },
            {
                state: 'MO',
                rate: '7.81'
            },
            {
                state: 'AR',
                rate: '9.26'
            },
            {
                state: 'LA',
                rate: '8.91'
            },
            {
                state: 'WI',
                rate: '5.43'
            },
            {
                state: 'IL',
                rate: '8.19'
            },
            {
                state: 'MS',
                rate: '7.07'
            },
            {
                state: 'MI',
                rate: '6.00'
            },
            {
                state: 'IN',
                rate: '7.00'
            },
            {
                state: 'KY',
                rate: '6.00'
            },
            {
                state: 'TN',
                rate: '9.45'
            },
            {
                state: 'AL',
                rate: '91'
            },
            {
                state: 'OH',
                rate: '7.10'
            },
            {
                state: 'WV',
                rate: '6.07'
            },
            {
                state: 'VA',
                rate: '5.63'
            },
            {
                state: 'NC',
                rate: '6.90'
            },
            {
                state: 'SC',
                rate: '7.13'
            },
            {
                state: 'GA',
                rate: '6.96'
            },
            {
                state: 'FL',
                rate: '6.65'
            },
            {
                state: 'ME',
                rate: '5.50'
            },
            {
                state: 'NY',
                rate: '8.48'
            },
            {
                state: 'PA',
                rate: '6.34'
            },
            {
                state: 'NC',
                rate: '6.90'
            },
            {
                state: 'WA',
                rate: '8.89'
            },
            {
                state: 'OR',
                rate: '0'
            },
            {
                state: 'MT',
                rate: '0'
            },
            {
                state: 'AK',
                rate: '1.76'
            },
            {
                state: 'HI',
                rate: '4.35'
            },
            {
                state: 'MA',
                rate: '6.25'
            },
            {
                state: 'RI',
                rate: '7.00'
            },
            {
                state: 'CT',
                rate: '6.35'
            },
            {
                state: 'NJ',
                rate: '6.97'
            },
            {
                state: 'DE',
                rate: '0'
            },
            {
                state: 'MD',
                rate: '6.00'
            },
            {
                state: 'DC',
                rate: '5.75'
            }
        ];
                    
    }
]);
