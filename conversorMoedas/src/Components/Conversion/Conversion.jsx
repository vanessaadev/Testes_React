import React, { useState, useEffect } from 'react'
import { Input } from '../Input/Input'
import { Button } from '../Button/Button'

export function Conversion () {

  const [amount, setAmount] = useState(0)
  const [convertedAmount, setConvertedAmount] = useState(0)
  const [rate, setRate] = useState(0)

  useEffect(() => {
    // Fetch the conversion rate from an API or set a static rate
    setRate(5.5); //Exemplo de taxa de conversão USD para BRL
  }, [])

  const convertCurrency = () => {
    setConvertedAmount(amount * rate)
  }

  return (
    <>
      <h1>Conversor de Moedas</h1>
      <Input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
      <Button onClick={convertCurrency}/>
      <p>Valor Convertido: R${convertedAmount}</p>
    </>
  )
}