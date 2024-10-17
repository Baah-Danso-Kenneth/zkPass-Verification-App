import Link from "next/link"
import {
  ArrowUpRight,

} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"



function Transactions() {
    return (
      <>
        <Card className="xl:col-span-2" x-chunk="dashboard-01-chunk-4">
          <CardHeader className="flex flex-row items-center">
            <div className="grid gap-2">
              <CardTitle>zkPass Transactions</CardTitle>
              <CardDescription>
                Recent transactions on the zkPass network.
              </CardDescription>
            </div>
            <Button asChild size="sm" className="ml-auto gap-1">
              <Link href="#">
                View All
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Customer</TableHead>
                  <TableHead className="hidden xl:table-column">Type</TableHead>
                  <TableHead className="hidden xl:table-column">Status</TableHead>
                  <TableHead className="hidden xl:table-column">Date</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <div className="font-medium">Alice Green</div>
                    <div className="hidden text-sm text-muted-foreground md:inline">
                      alice@zkpass.com
                    </div>
                  </TableCell>
                  <TableCell className="hidden xl:table-column">Transfer</TableCell>
                  <TableCell className="hidden xl:table-column">
                    <Badge className="text-xs" variant="outline">
                      Completed
                    </Badge>
                  </TableCell>
                  <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
                    2023-10-10
                  </TableCell>
                  <TableCell className="text-right">$1,200.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className="font-medium">Bob White</div>
                    <div className="hidden text-sm text-muted-foreground md:inline">
                      bob@zkpass.com
                    </div>
                  </TableCell>
                  <TableCell className="hidden xl:table-column">Payment</TableCell>
                  <TableCell className="hidden xl:table-column">
                    <Badge className="text-xs" variant="outline">
                      Pending
                    </Badge>
                  </TableCell>
                  <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
                    2023-10-11
                  </TableCell>
                  <TableCell className="text-right">$300.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className="font-medium">Charlie Brown</div>
                    <div className="hidden text-sm text-muted-foreground md:inline">
                      charlie@zkpass.com
                    </div>
                  </TableCell>
                  <TableCell className="hidden xl:table-column">Refund</TableCell>
                  <TableCell className="hidden xl:table-column">
                    <Badge className="text-xs" variant="outline">
                      Declined
                    </Badge>
                  </TableCell>
                  <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
                    2023-10-12
                  </TableCell>
                  <TableCell className="text-right">$150.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className="font-medium">Daisy Adams</div>
                    <div className="hidden text-sm text-muted-foreground md:inline">
                      daisy@zkpass.com
                    </div>
                  </TableCell>
                  <TableCell className="hidden xl:table-column">Subscription</TableCell>
                  <TableCell className="hidden xl:table-column">
                    <Badge className="text-xs" variant="outline">
                      Approved
                    </Badge>
                  </TableCell>
                  <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
                    2023-10-13
                  </TableCell>
                  <TableCell className="text-right">$450.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className="font-medium">Edward Black</div>
                    <div className="hidden text-sm text-muted-foreground md:inline">
                      edward@zkpass.com
                    </div>
                  </TableCell>
                  <TableCell className="hidden xl:table-column">Transfer</TableCell>
                  <TableCell className="hidden xl:table-column">
                    <Badge className="text-xs" variant="outline">
                      Completed
                    </Badge>
                  </TableCell>
                  <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
                    2023-10-14
                  </TableCell>
                  <TableCell className="text-right">$750.00</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </>
    );
  }
  

export default Transactions