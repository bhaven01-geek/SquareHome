import React, { useState } from "react";
import { FaMoneyBillWave,FaCalculator } from "react-icons/fa";


function EmiCalc() {
  const [principal, setPrincipal] = useState(500000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [tenure, setTenure] = useState(20);
  const [emi, setEMI] = useState(0);
  const [totalAmountPayable, setTotalAmountPayable] = useState(0);
  const [interestAmount, setInterestAmount] = useState(0);

  const calculateEMI = () => {
    // Formula to calculate EMI
    const r = interestRate / 12 / 100; // Monthly interest rate
    const n = tenure * 12; // Total number of installments
    const emiValue =
      (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    setEMI(emiValue.toFixed(2));

    // Calculate total amount payable and interest amount
    const totalAmount = emiValue * n;
    setTotalAmountPayable(totalAmount.toFixed(2));
    setInterestAmount((totalAmount - principal).toFixed(2));
  };

  function withCommas(value) {
    return value.toString().replace(/(\d)(?=(\d{2})+(\d)(?!\d))/g, "$1,");
  }

  return (
    <div className="py-10 px-4 max-w-6xl mx-auto">
      <div className="flex justify-center items-center  p-10 px-3 max-w-6xl mx-auto ">
        <div className="w-full max-w-md">
          <div className="w-full max-w-md border border-orange-600 rounded-lg p-6 relative">
            <div className="absolute top-0 left-0 w-12 h-12 bg-orange-600 transform -translate-y-1/2 -translate-x-1/2 rotate-45"></div>
            <h2 className="text-2xl font-semibold mb-4">
              Home Loan EMI Calculator
            </h2>
            <div className="mb-4">
              <label className="block">Loan Amount (Principal):</label>
              <input
                type="number"
                value={principal}
                onChange={(e) => setPrincipal(e.target.value)}
                className="w-full border p-2"
              />
            </div>
            <div className="mb-4">
              <label className="block">Interest Rate (% per annum):</label>
              <input
                type="number"
                value={interestRate}
                onChange={(e) => setInterestRate(e.target.value)}
                className="w-full border p-2"
              />
            </div>
            <div className="mb-4">
              <label className="block">Tenure (in years):</label>
              <input
                type="number"
                value={tenure}
                onChange={(e) => setTenure(e.target.value)}
                className="w-full border p-2"
              />
            </div>
            <div className="flex justify-center">
              <button
                onClick={calculateEMI}
                className="text-xs sm:text-sm font-bold hover:underline bg-orange-600 hover:bg-green-900 text-white py-2 px-4 rounded"
              >
                Calculate EMI
              </button>
            </div>
          </div>

          {emi > 0 && (
            <div className="mt-4 flex flex-wrap">
              <div className="w-1/2">
                <h3 className="text-lg font-semibold">Monthly EMI:</h3>
                <p className="text-xl font-bold">₹ {withCommas(emi)}</p>
              </div>
              <div className="w-1/2">
                <h3 className="text-lg font-semibold">Interest Amount:</h3>
                <p className="text-xl font-bold">
                  ₹ {withCommas(interestAmount)}
                </p>
              </div>
              <div className="w-1/2">
                <h3 className="text-lg font-semibold">Total Amount Payable:</h3>
                <p className="text-xl font-bold">
                  ₹ {withCommas(totalAmountPayable)}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          Home Loan EMI Calculator  <FaCalculator />
        </h2>
        <p className="mb-4">
          A home loan EMI calculator is a tool that helps you calculate your
          monthly instalments (EMIs) with just one click.
        </p>
        <p className="mb-4">
          To calculate your Home loan EMI, you need to enter the loan amount,
          interest rate, and the tenure of the loan.
        </p>

        <h3 className="text-xl font-semibold mt-6">
          How to use Home Loan EMI Calculator
        </h3>
        <ol className="list-decimal ml-6 mb-4">
          <li className="mb-2">
            <strong>Step 1: </strong>Enter the amount you want to borrow.
          </li>
          <li className="mb-2">
            <strong>Step 2: </strong>Enter the tenure (in years) for which you
            want to borrow.
          </li>
          <li className="mb-2">
            <strong>Step 3: </strong>Enter the rate of interest.
          </li>
          <li className="mb-4">
            <strong>Step 4: </strong>Click on "Calculate Your EMI."
          </li>
        </ol>

        <p className="mb-6">
          After you take all these steps, you will be able to view your monthly
          installment on your home loan.
        </p>

        <h3 className="text-xl font-semibold mt-6">
          How the Home Loan Calculator Helps You
        </h3>
        <p className="mb-4">
          Using the EMI calculator to know your EMIs in advance can be helpful
          in many ways. Check out some of the reasons why you should use it:
        </p>

        <ul className="list-disc ml-6 mb-4">
          <li className="mb-2">
            <strong>How much should you borrow?</strong> The calculator can help
            you decide the home loan amount, based on how much EMI you can
            afford to pay from your income. In other words, you can plan your
            finances better.
          </li>
          <li className="mb-2">
            <strong>How long should the tenure be?</strong> Knowing the EMI you
            can afford to pay every month, you can determine the right tenure
            for your loan.
          </li>
          <li className="mb-4">
            <strong>How much down payment should you make?</strong> Using the
            home loan EMI calculator, you can figure out how much you should pay
            as the down payment, in order to save the maximum on your interest
            while keeping your EMIs to a minimum.
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-6">
          Factors Affecting Home Loan EMI
        </h3>
        <p className="mb-4">
          There are multiple factors that can affect your home loan EMI. Check
          out some of the key factors below:
        </p>

        <ul className="list-disc ml-6 mb-4">
          <li className="mb-2">
            <strong>Loan amount:</strong> The loan amount you borrow affects
            your EMI. The higher the amount you borrow, the higher your EMI.
          </li>
          <li className="mb-2">
            <strong>Loan tenure:</strong> The tenure for which you take a home
            loan also affects your installments. If the tenure is longer, your
            EMI will be lower. Remember, a longer tenure also means you pay more
            interest over the period as compared to a shorter tenure loan.
          </li>
          <li className="mb-2">
            <strong>Interest rate:</strong> In case of floating interest rate
            loans, your EMI will change in line with the fluctuations in
            interest rates. If the rate goes up, your EMI also goes up.
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-6">
          How to Reduce Your Home Loan EMI
        </h3>
        <p className="mb-4">
          If you are looking to get a new home loan or if you already have one,
          here are some tips to help you reduce your home loan EMI:
        </p>

        <ol className="list-decimal ml-6 mb-4 ">
          <li className="mb-2 flex">
            <FaMoneyBillWave className="mr-2" />
            <strong>
              Check with multiple lenders before finalizing your loan.
            </strong>
            Choose the one that offers you the best deal.
          </li>
          <li className="mb-2 flex">
            <FaMoneyBillWave className="mr-2" />
            <strong>Don't borrow more than you can afford.</strong> If you can't
            afford to repay on time, don't borrow.
          </li>
          <li className="mb-2 flex">
            <FaMoneyBillWave className="mr-2" />
            <strong>Make a higher down payment.</strong> The lower the amount
            you borrow, the lower the EMI.
          </li>
          <li className="mb-2 flex">
            <FaMoneyBillWave className="mr-2" />
            <strong>Choose a longer tenure.</strong> But this also means you
            will be paying more interest over the period.
          </li>
          <li className="mb-2 flex">
            <FaMoneyBillWave className="mr-2" />

            <strong>
              Make a prepayment on your loan, if and when possible.
            </strong>
          </li>
          <li className="mb-2 flex">
            <FaMoneyBillWave className="mr-2" />

            <strong>
              Apply for a balance transfer home loan to get a better deal.
            </strong>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default EmiCalc;
