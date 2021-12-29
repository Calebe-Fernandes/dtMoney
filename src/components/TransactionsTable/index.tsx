import { useEffect, useState } from "react";
import { Container } from "./styles";
import { api } from "../../services/api"

interface Transaction{
    id:number,
    title:string,
    amount: number,
    type:string,
    category:string,
    createdAt:string;
}


export function TransactionTable(){
    
    const [transactions, setTraansactions] = useState<Transaction[]>([])

    useEffect(() => {
       api.get('http://localhost:3000/api/transactions')
        .then(response => setTraansactions(response.data.transactions))
    }, [])
    
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                   {transactions.map( transaction => (
                        <tr key = {transaction.id}>
                            <td>{transaction.title}</td>
                            <td className={transaction.type}>
                                {Intl.NumberFormat('pt-BR',{
                                    style:'currency',
                                    currency:'BRL'
                                }).format(transaction.amount)}
                            </td>
                            <td>{transaction.category}</td>
                            <td>
                                {Intl.DateTimeFormat('pt-BR')
                                    .format(new Date(transaction.createdAt))}
                            </td>
                        </tr>
                    ))}
                  
                </tbody>
            </table>
        </Container>
    );
}
