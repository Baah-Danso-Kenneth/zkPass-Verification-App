import { Progress } from '@radix-ui/react-progress'
import React from 'react'
import { Button } from '../ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardFooter, CardContent } from '../ui/card'

import Link from 'next/link';

function BannerDescription() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
      <Card className="sm:col-span-2" x-chunk="dashboard-05-chunk-0">
        <CardHeader className="pb-3">
          <CardTitle>ZKPASS</CardTitle>
          <CardDescription className="text-balance max-w-lg leading-relaxed">
            Introducing Our Dynamic Orders Dashboard for Seamless
            Management and Insightful Analysis. Your data is protected with 
            zkPass protocols, ensuring privacy and security for all transactions.
          </CardDescription>
        </CardHeader>
        <CardFooter>
        <Link href="https://zkpass.org/" passHref>
          <Button>Verify with ZKPASS</Button>
         </Link>
          <Link href="dashboard/" passHref>
            <Button className="ml-2">EXPLORE MORE</Button>
          </Link>
        </CardFooter>
      </Card>
      <Card x-chunk="dashboard-05-chunk-1">
        <CardHeader className="pb-2">
          <CardDescription>This Week</CardDescription>
          <CardTitle className="text-4xl">$1,329</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-xs text-muted-foreground">
            +25% from last week
          </div>
        </CardContent>
        <CardFooter>
          <Progress value={25} aria-label="25% increase" />
        </CardFooter>
      </Card>
      <Card x-chunk="dashboard-05-chunk-2">
        <CardHeader className="pb-2">
          <CardDescription>This Month</CardDescription>
          <CardTitle className="text-4xl">$5,329</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-xs text-muted-foreground">
            +10% from last month
          </div>
        </CardContent>
        <CardFooter>
          <Progress value={12} aria-label="12% increase" />
        </CardFooter>
      </Card>
    </div>
  );
}


export default BannerDescription