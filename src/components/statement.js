import React, { useEffect, useState } from 'react'

const Statement = () => {
    useEffect(() => {
        fetchStatement();
    }, []);


    const [statement, setStatement] = useState([]);

    // const fetchStatement = async () => {
    //     const data = await fetch(
    //         'https://api.onepipe.io/v2/transact'
    //     );
    //     const newStatement = await data.json();
    //     console.log(statement);
    // }

    
    const fetchStatement = async () => {

        const details = {
            request_ref:"111111111", 
            request_type:"get_statement",
            auth: {
              type: "bank.account", 
              secure: "s2LsV7Ka2mi6SLbjuDIVmrxANCldBJFxAZ5Y0ckQnXs=",
              auth_provider: "Demoprovider",
              route_mode: null
            },
            transaction: {
              mock_mode: "live", 
              transaction_ref: "{{transaction-ref}}", 
              transaction_desc: "A random transaction", 
              transaction_ref_parent: null, 
              amount: 0,
              customer:{
                  customer_ref: "DemoApp_Customer007",
                  firstname: "Uju",
                  surname: "Usmanu",
                  email: "ujuusmanu@gmail.com",
                  mobile_no: "234802343132"
              },
              meta:{
                  a_key:"a_meta_value_1",
                  another_key:"a_meta_value_2"
              },
              details: {
                  start_date: "2019-06-01",
                  end_date: "2019-06-01"
              }
            }
        };

    const request = await fetch ('https://api.onepipe.io/v2/transact', {
            method: 'POST',
            headers: new Headers({
                "Authorization" : "Bearer LYJkfbTERDaX9rEcHubF_d988c25b17504a9699140341edf54435",
                "Signature" : "KgMs87tKCuA8BTEj",
                "Content-Type" : "application/json"
        }),
        body: JSON.stringify(details)
        }).then((resp) => {
          console.log(resp)
          const newStatement = resp.json();
        console.log(newStatement);
        setStatement(newStatement);
        })
        console.log(request)
    }

    return (
        <div>
            {statement.map(statement => (
                <h1>Your statement is : {statement}</h1>
                ))}
        </div>
    )
}

export default Statement
