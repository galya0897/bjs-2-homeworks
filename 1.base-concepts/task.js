"use strict";

function solveEquation(a, b, c) {
  let arr = [];
  const discriminant = b ** 2 - 4 * a * c;

  if (discriminant < 0) {
    arr = [];
  } else if (discriminant === 0) {
    arr = [-b / (2 * a)];
  } else {
    arr = [(-b + Math.sqrt(discriminant)) / (2 * a), (-b - Math.sqrt(discriminant)) / (2 * a)];
  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {

  const interestRate = percent / 100 / 12; //процентная ставка
  const bodyCredit = amount - contribution; //тело кредита
  const n = countMonths;
  const monthlyPaymen = bodyCredit * (interestRate + (interestRate / (((1 + interestRate) ** n) - 1))); //ежемесячная оплата
  const totalAmount = Number((monthlyPaymen * n).toFixed(2));
  return totalAmount

}