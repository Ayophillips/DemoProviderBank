import React, { useState } from "react";

const OpenAccount = () => {
    const [firstname, setFirstName] = useState('');
    const [surname, setSurName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile_no, setMobileNo] = useState('');
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        
        const details = {
          request_ref: "111111111",
          request_type: "open_account",
          auth: {
            type: null,
            secure: null,
            auth_provider: "DemoProvider",
            route_mode: null,
          },
          transaction: {
            mock_mode: "inspect",
            transaction_ref: "{{transaction-ref}}",
            transaction_desc: "A random transaction",
            transaction_ref_parent: null,
            amount: 0,
            customer: {
              customer_ref: "DemoApp_Customer007",
              firstname: firstname,
              surname: surname,
              email: email,
              mobile_no: mobile_no,
            },
            meta: {
              a_key: "a_meta_value_1",
              another_key: "a_meta_value_2",
            },
            details: {
              name_on_account: "Tobi Olajide",
              middlename: "string",
              dob: "2020-09-20-11-30-30",
              gender: "M",
              title: "Mr",
              address_line_1: "23, Okon street, Ikeja",
              address_line_2: "Ikeja",
              city: "lagos",
              state: "lagos",
              country: "NG",
            },
          },
        };

      const request =  fetch ('https://api.onepipe.io/v2/transact', {
            method: 'POST',
            headers: new Headers({
                "Authorization" : "Bearer LYJkfbTERDaX9rEcHubF_d988c25b17504a9699140341edf54435",
                "Signature" : "KgMs87tKCuA8BTEj",
                "Content-Type" : "application/json"
        }),
        body: JSON.stringify(details)
        }).then((resp) => {
          console.log(resp)
          // console.log(JSON.stringify(JSON.parse(resp.body)))  
          console.log('Account Opened')
        })
        console.log(await request)
    }

  return (
    <div>
      <form >
        <label>
          Firstname
          <input type="text" name="firstname" onChange={(e) => setFirstName(e.target.value)}/>
        </label>
        <label>
          Surname
          <input type="text" name="surname" onChange={(e) => setSurName(e.target.value)}/>
        </label>
        <label>
          Email
          <input type="text" name="email" onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Mobile Number
          <input type="number" name="mobile_no" onChange={(e) => setMobileNo(e.target.value)} />
        </label>
        <button type="submit" value="Submit" onClick={handleSubmit}> Submit </button>
      </form>
    </div>
  );
};

export default OpenAccount;
