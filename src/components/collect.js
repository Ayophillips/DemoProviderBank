import React, { useEffect, useState } from 'react'

const Collect = () => {
    useEffect(() => {
        fetchCollect();
    }, []);


    const [collect, setCollect] = useState([]);
    
    const fetchCollect = async () => {

        const details = {
          request_ref: "111111111",
          request_type: "collect",
          auth: {
            type: "bank.account",
            secure: "s2LsV7Ka2mi6SLbjuDIVmrxANCldBJFxAZ5Y0ckQnXs=",
            auth_provider: "DemoProvider",
            route_mode: null,
          },
          transaction: {
            mock_mode: "inspect",
            transaction_ref: "{{transaction-ref}}",
            transaction_desc: "A random transaction",
            transaction_ref_parent: "",
            amount: 10000,
            customer: {
              customer_ref: "Jhon",
              firstname: "Uju",
              surname: "Usmanu",
              email: "ujuusmanu@gmail.com",
              mobile_no: "234802343132",
            },
            meta: {
              a_key: "a_meta_value_1",
              another_key: "a_meta_value_2",
            },
            details: null,
          },
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
          const newCollect = resp.json();
        console.log(newCollect);
        setCollect(newCollect);
        })
        console.log(request)
    }

    
    return (
        <div>
            {collect.map(collect => (
                <h1>{collect}</h1>
                ))}
        </div>
    )
}

export default Collect
