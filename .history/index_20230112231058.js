const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };

const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };

const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

// first task

function getMyTaxes(number) {
    return (number * this.tax).toFixed(0);
  }
  getMyTaxes(1500)

  console.log("Ukraine  + ${getMyTaxes.call(ukraine, 1500)}");

  console.log('При зарплаті 1500$ в Україні я заплачу'+  $getMyTaxes.call(ukraine,1500) + '$ податку.')