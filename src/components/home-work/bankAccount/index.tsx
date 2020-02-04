import React,{useState} from 'react';


interface Iprops {
    initialValue:number;
}

function BankAccount  (props:Iprops) {
    let [moneyInBanKAccount, updateMoneyInBankAccount,] =
    useState(props.initialValue);

    function changeHandler (event) {
     updateMoneyInBankAccount(Number(event.target.value)+props.initialValue);
    }

      
    return(
        <div>
            <input
            type="text" 
            placeholder = "Depositar valor ..."
            onChange = {changeHandler}
            />
        <div> {moneyInBanKAccount}</div>
        </div>

    );

}

export default BankAccount;