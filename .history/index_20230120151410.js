const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };

const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };

const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

// first task

function getMyTaxes(number) {
    return (number * this.tax).toFixed(0);
  }

  console.log('При зарплаті 1500$ в Україні я заплачу',  getMyTaxes.call(ukraine,1500) , '$ податку.');
  console.log('При зарплаті 1600$ в Латвії я заплачу',  getMyTaxes.call(latvia,1600) , '$ податку.');
  console.log('При зарплаті 1700$ в Литві я заплачу',  getMyTaxes.call(litva,1700) , '$ податку.');

// second task
function getMiddleTaxes(country){
  return country(tax * this.middleSalary).toFixed(0);
}
console.log('Середня кількість податків в Україні становить,' , getMiddleTaxes.call(ukraine));

