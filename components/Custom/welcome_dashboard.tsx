import * as React from "react"
import Link from "next/link"
import {
    CheckCircle,
  ChevronLeft,
  ChevronRight,
  Copy,
  CreditCard,
  Home,
  MoreVertical,
  Package2,
  Settings,
} from "lucide-react"


import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination"
import { Separator } from "@/components/ui/separator"

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import BannerDescription from "./bannerDescription"
import StockAndCurrencyManager from "./cryptoExchange"



function WelcomeDashboard() {
    return (
      <TooltipProvider>
        <div className="flex min-h-screen w-full flex-col bg-muted/40">
          <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
            <nav className="flex flex-col items-center gap-4 px-2 sm:py-4">
              <Link
                href="#"
                className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
              >
                <Package2 className="h-4 w-4 transition-all group-hover:scale-110" />
                <span className="sr-only">Acme Inc</span>
              </Link>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href="#"
                    className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                  >
                    <Home className="h-5 w-5" />
                    <span className="sr-only">Dashboard</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right">Dashboard</TooltipContent>
              </Tooltip>
              {/* Other Tooltips follow the same pattern */}
            </nav>
            <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-4">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href="#"
                    className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                  >
                    <Settings className="h-5 w-5" />
                    <span className="sr-only">Settings</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right">Settings</TooltipContent>
              </Tooltip>
            </nav>
          </aside>

          <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
          <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">

          <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
            <BannerDescription/>
            <StockAndCurrencyManager/>
          </div>


<div>
<Card className="overflow-hidden" x-chunk="dashboard-identity-verification">
  <CardHeader className="flex flex-row items-start bg-muted/50">
    <div className="grid gap-0.5">
      <CardTitle className="group flex items-center gap-2 text-lg">
        Verification Request ID: 0xABC123
        <Button
          size="icon"
          variant="outline"
          className="h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100"
        >
          <Copy className="h-3 w-3" />
          <span className="sr-only">Copy Verification ID</span>
        </Button>
      </CardTitle>
      <CardDescription>Requested on: October 17, 2024</CardDescription>
    </div>
    <div className="ml-auto flex items-center gap-1">
      <Button size="sm" variant="outline" className="h-8 gap-1">
        <CheckCircle className="h-3.5 w-3.5" />
        <span className="lg:sr-only xl:not-sr-only xl:whitespace-nowrap">
          View Details
        </span>
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button size="icon" variant="outline" className="h-8 w-8">
            <MoreVertical className="h-3.5 w-3.5" />
            <span className="sr-only">More Options</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem>View Document</DropdownMenuItem>
          <DropdownMenuItem>Resend Verification</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Delete Request</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  </CardHeader>
  <CardContent className="p-6 text-sm">
    <div className="grid gap-3">
      <div className="font-semibold">Document Status</div>
      <ul className="grid gap-3">
        <li className="flex items-center justify-between">
          <span className="text-muted-foreground">
            Identity Document x <span>1</span>
          </span>
          <span>Verified</span>
        </li>
        <li className="flex items-center justify-between">
          <span className="text-muted-foreground">
            Proof of Address x <span>1</span>
          </span>
          <span>Pending</span>
        </li>
      </ul>
      <Separator className="my-2" />
      <ul className="grid gap-3">
        <li className="flex items-center justify-between">
          <span className="text-muted-foreground">Total Requests</span>
          <span>2</span>
        </li>
        <li className="flex items-center justify-between">
          <span className="text-muted-foreground">Pending Requests</span>
          <span>1</span>
        </li>
        <li className="flex items-center justify-between">
          <span className="text-muted-foreground">Verified Requests</span>
          <span>1</span>
        </li>
      </ul>
    </div>
    <Separator className="my-4" />
    <div className="grid grid-cols-2 gap-4">
      <div className="grid gap-3">
        <div className="font-semibold">User Information</div>
        <address className="grid gap-0.5 not-italic text-muted-foreground">
          <span>Jane Doe</span>
          <span>janedoe@zkpass.com</span>
          <span>+1 555 987 6543</span>
        </address>
      </div>
      <div className="grid auto-rows-max gap-3">
        <div className="font-semibold">Verification Status</div>
        <div className="text-muted-foreground">In Progress</div>
      </div>
    </div>
    <Separator className="my-4" />
    <div className="grid gap-3">
      <div className="font-semibold">Payment Information (if applicable)</div>
      <dl className="grid gap-3">
        <div className="flex items-center justify-between">
          <dt className="flex items-center gap-1 text-muted-foreground">
            <CreditCard className="h-4 w-4" />
            Payment Method
          </dt>
          <dd>**** **** **** 5678</dd>
        </div>
      </dl>
    </div>
  </CardContent>
  <CardFooter className="flex flex-row items-center border-t bg-muted/50 px-6 py-3">
    <div className="text-xs text-muted-foreground">
      Last Updated <time dateTime="2024-10-17">October 17, 2024</time>
    </div>
    <Pagination className="ml-auto mr-0 w-auto">
      <PaginationContent>
        <PaginationItem>
          <Button size="icon" variant="outline" className="h-6 w-6">
            <ChevronLeft className="h-3.5 w-3.5" />
            <span className="sr-only">Previous Request</span>
          </Button>
        </PaginationItem>
        <PaginationItem>
          <Button size="icon" variant="outline" className="h-6 w-6">
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="sr-only">Next Request</span>
          </Button>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  </CardFooter>
</Card>

          </div>

        </main>
          </div>

        </div>
      </TooltipProvider>
    );
  }
  
  export default WelcomeDashboard;
  