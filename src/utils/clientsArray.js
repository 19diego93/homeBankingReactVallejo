const clientsWolfBank = [
    {
        "id": 1,
        "name": "Melba",
        "email": "melba@mindhub.com",
        "accounts": [
            {
                "id": 2,
                "number": "VNI002",
                "creationDate": "2024-05-04",
                "balance": 7500.0,
                "transactions": [
                    {
                        "id": 4,
                        "type": "DEBIT",
                        "amount": -3000.0,
                        "description": "Weekly payment",
                        "date": "2024-05-19T13:03:57.861888"
                    },
                    {
                        "id": 3,
                        "type": "CREDIT",
                        "amount": 1000.0,
                        "description": "Annual payment",
                        "date": "2024-05-19T13:03:57.861888"
                    }
                ]
            },
            {
                "id": 1,
                "number": "VNI001",
                "creationDate": "2024-05-19",
                "balance": 5000.0,
                "transactions": [
                    {
                        "id": 2,
                        "type": "DEBIT",
                        "amount": -300.0,
                        "description": "Daily payment",
                        "date": "2024-05-19T13:03:57.861888"
                    },
                    {
                        "id": 1,
                        "type": "CREDIT",
                        "amount": 800.0,
                        "description": "Annual payment",
                        "date": "2024-05-19T13:03:57.860888"
                    }
                ]
            }
        ],
        "loans": [
            {
                "id": 2,
                "loan_id": 2,
                "name": "Personal",
                "amount": 50000.0,
                "payments": 12
            },
            {
                "id": 1,
                "loan_id": 1,
                "name": "Mortgage",
                "amount": 400000.0,
                "payments": 60
            }
        ],
        "cards": [
            {
                "id": 1,
                "cardHolder": "Melba Morel",
                "cardType": "DEBIT",
                "color": "GOLD",
                "number": "3325-6745-7876-4445",
                "cvv": 345,
                "creationDate": "2024-05-19",
                "expirationDate": "2029-05-19"
            },
            {
                "id": 2,
                "cardHolder": "Melba Morel",
                "cardType": "CREDIT",
                "color": "TITANIUM",
                "number": "2345-6745-8876-4567",
                "cvv": 123,
                "creationDate": "2024-05-19",
                "expirationDate": "2029-05-19"
            }
        ]
    },
    {
        "id": 2,
        "name": "Diego",
        "email": "dv93@mindhub.com",
        "accounts": [
            {
                "id": 3,
                "number": "VNI003",
                "creationDate": "2024-05-01",
                "balance": 9.0,
                "transactions": [
                    {
                        "id": 6,
                        "type": "DEBIT",
                        "amount": -600.0,
                        "description": "Tax payment",
                        "date": "2024-05-19T13:03:57.861888"
                    },
                    {
                        "id": 5,
                        "type": "CREDIT",
                        "amount": 500.0,
                        "description": "Monthly payment",
                        "date": "2024-05-19T13:03:57.861888"
                    }
                ]
            }
        ],
        "loans": [
            {
                "id": 3,
                "loan_id": 2,
                "name": "Personal",
                "amount": 100000.0,
                "payments": 24
            },
            {
                "id": 4,
                "loan_id": 3,
                "name": "Automotive",
                "amount": 200000.0,
                "payments": 36
            }
        ],
        "cards": [
            {
                "id": 3,
                "cardHolder": "Diego Vallejo",
                "cardType": "CREDIT",
                "color": "SILVER",
                "number": "1111-2345-4566-9898",
                "cvv": 999,
                "creationDate": "2024-05-19",
                "expirationDate": "2029-05-19"
            }
        ]
    }
]
export default clientsWolfBank;