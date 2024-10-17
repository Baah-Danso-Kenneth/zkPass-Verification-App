"use client"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group"
import { useState, useEffect } from "react"

type ExchangeRates = {
  [key: string]: number; 
};

const currencyList = ['ETH', 'BTC', 'ADA', 'USDT']; 

function StockAndCurrencyManager() {
  const [amount, setAmount] = useState<number>(1);
  const [fromCurrency, setFromCurrency] = useState<string>('ETH');
  const [toCurrency, setToCurrency] = useState<string>('BTC');
  const [conversionResult, setConversionResult] = useState<number | null>(null);
  const [exchangeRates, setExchangeRates] = useState<ExchangeRates>({});

  useEffect(() => {
    const fetchExchangeRates = async () => {
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum,bitcoin,cardano,tether&vs_currencies=usd');
        const data = await response.json();
        const rates: ExchangeRates = {
          ETH: data.ethereum.usd,
          BTC: data.bitcoin.usd,
          ADA: data.cardano.usd,
          USDT: data.tether.usd,
        };
        setExchangeRates(rates);
      } catch (error) {
        console.error('Error fetching exchange rates:', error);
      }
    };

    fetchExchangeRates();
  }, []);

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    setAmount(value);
  };

  const handleConversion = () => {
    const fromRate = exchangeRates[fromCurrency];
    const toRate = exchangeRates[toCurrency];
    
    if (fromRate && toRate) {
      const convertedAmount = (amount * fromRate) / toRate;
      setConversionResult(convertedAmount);
    } else {
      setConversionResult(null);
      console.error('Conversion rates not available for the selected currencies');
    }
  };

  return (
    <div>
      {/* Stock Management Card */}
      <Card x-chunk="dashboard-07-chunk-1">
        <CardHeader>
          <CardTitle>Stock</CardTitle>
          <CardDescription>
            Manage your stock items and their details.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">SKU</TableHead>
                <TableHead>Stock</TableHead>
                <TableHead>Price</TableHead>
                <TableHead className="w-[100px]">Size</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {/* Stock item aligned with zkPass needs */}
              <TableRow>
                <TableCell className="font-semibold">ZKPASS-001</TableCell>
                <TableCell>
                  <Label htmlFor="stock-1" className="sr-only">Stock</Label>
                  <Input id="stock-1" type="number" defaultValue="150" />
                </TableCell>
                <TableCell>
                  <Label htmlFor="price-1" className="sr-only">Price</Label>
                  <Input id="price-1" type="number" defaultValue="199.99" />
                </TableCell>
                <TableCell>
                  <ToggleGroup type="single" defaultValue="m" variant="outline">
                    <ToggleGroupItem value="s">S</ToggleGroupItem>
                    <ToggleGroupItem value="m">M</ToggleGroupItem>
                    <ToggleGroupItem value="l">L</ToggleGroupItem>
                  </ToggleGroup>
                </TableCell>
              </TableRow>
              {/* More stock items can be added here */}
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter className="justify-center border-t p-4">
          <Button size="sm" variant="ghost" className="gap-1">
            Add Variant
          </Button>
        </CardFooter>
      </Card>

    
      <Card className="mt-5">
        <CardHeader>
          <CardTitle>Currency Converter</CardTitle>
          <CardDescription>Convert between cryptocurrencies.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-5">
            <Input
              type="number"
              value={amount}
              onChange={handleAmountChange}
              placeholder="Amount"
              className="mb-5"
            />
            <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)} className="p-3 mr-5">
              {currencyList.map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
            <span className="mr-5"> to </span>
            <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)} className="p-3">
              {currencyList.map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
            <Button className="ml-5" onClick={handleConversion}>Convert</Button>
          </div>
          {conversionResult !== null && (
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl">
                {amount} {fromCurrency} = {conversionResult.toFixed(6)} {toCurrency}
              </h2>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

export default StockAndCurrencyManager;
