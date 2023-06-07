import React, { useState } from 'react';

const Calculator = () => {
    // TODO: start coding here!
    //use state to keep tracking valus
    const [billInput, setBillInput] = useState(0);
    const [tipPercentage, setTipPercentage] = useState(0);
    const [numberOfPeople, setNumberOfPeople] = useState(1);
    const [tipAmount, setTipAmount] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    //functions to handle clicks & changes
    const handleAmontOfBill = (e) => {
        const bill = e.target.value 
        setBillInput(bill)
        calculat(bill,tipPercentage,numberOfPeople)
        
    }
    const handleTipAmount = (percentage) => {
        const tip = percentage
        setTipPercentage(tip)
        calculat(billInput, tip, numberOfPeople)
    }
    const handleNumOfPeople = (e) => {
        const people = e.target.value
        setNumberOfPeople(people)
        calculat(billInput, tipPercentage, people)
    }

    //calculat  tip & total

    const calculat = (billInput,tipPercentage,numberOfPeople) => {
        const tipPerPerson = billInput *( tipPercentage / 100)/numberOfPeople
        const totalPerPerson = (billInput / numberOfPeople) + tipPerPerson
        setTipAmount(tipPerPerson.toFixed(2))
            setTotalPrice(totalPerPerson.toFixed(2))
    }

    const handleReset = () => {
        setBillInput(0)
        setNumberOfPeople(1)
        setTipAmount(0)
        setTipPercentage(0)
        setTotalPrice(0)
    }
    return (
        <main>
            <img
                src="./icons/logo.svg"
                className="logo"
                alt="Splitter logo. 'SPLI' on one line and 'TTER' on another to indicate splitting." />
            <section className="card">
                <div className="card-left">
                    <div className="input-group" id="totalBillGroup">
                        <div className="input-label-container">
                            <label className="body-text input-label" htmlFor="totalBill">Bill</label>
                            <small className="body-text input-error" id="totalBillError">Input field is valid</small>
                        </div>
                        <input
                            onChange={handleAmontOfBill}
                            value={billInput}
                            type="number"
                            className="body-l-text input-field"
                            placeholder="0"
                            name="Total bill value"
                            id="totalBill"
                        />
                    </div>

                    <div className="input-group" id="totalTipPercentageGroup">
                        <div className="input-label-container">
                            <label className="body-text input-label">Select Tip %</label>
                            <small className="body-text input-error" id="totalTipPercentageError">Input field is
                                valid</small>
                        </div>
                        <div className="input-tips-container">
                            <button onClick={() => handleTipAmount(5)} className="body-l-text input-tip" id="tip5">5%
                            </button>
                            <button onClick={() => handleTipAmount(10)} className="body-l-text input-tip" id="tip10">10%
                            </button>
                            <button onClick={() => handleTipAmount(15)} className="body-l-text input-tip" id="tip15">15%
                            </button>
                            <button onClick={() => handleTipAmount(25)} className="body-l-text input-tip" id="tip25">25%
                            </button>
                            <button onClick={() => handleTipAmount(50)} className="body-l-text input-tip" id="tip50">50%
                            </button>
                            <input onChange={(e) => handleTipAmount(e.target.value)}  type="number" className="body-l-text input-field" placeholder="Custom"
                                id="totalTipPercentage"></input>
                        </div>
                    </div>

                    <div className="input-group" id="numberOfPeopleGroup">
                        <div className="input-label-container">
                            <label className="body-text input-label" htmlFor="numberOfPeople">Number of People</label>
                            <small className="body-text input-error" id="numberOfPeopleError">Input field is
                                valid</small>
                        </div>
                        <input
                            onChange={handleNumOfPeople}
                            value={numberOfPeople}
                            type="number"
                            className="body-l-text input-field"
                            placeholder="0"
                            name="Number of people"
                            id="numberOfPeople"

                        />
                    </div>
                </div>
                <div className="card-right">
                    <section className="card-price-container">
                        <div>
                            <b className="body-text card-price-title">Tip Amount</b>
                            <p className="body-s-text card-price-subtitle">/ person</p>
                        </div>
                        <strong className="strong-text card-price-value" id="tipAmount">$ {tipAmount}</strong>
                    </section>
                    <section className="card-price-container">
                        <div>
                            <b className="body-text card-price-title">Total</b>
                            <p className="body-s-text card-price-subtitle">/ person</p>
                        </div>
                        <strong className="strong-text card-price-value" id="totalPrice"> $ {totalPrice}</strong>
                    </section>
                    <button onClick={handleReset} className="btn btn-primary btn-reset">Reset</button>
                </div>
            </section>
        </main>
    );
};

export default Calculator;