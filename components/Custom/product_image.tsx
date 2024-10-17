import Image from "next/image";
import { Upload } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function ProductImage() {
  return (
    <div>
      <Card className="overflow-hidden" x-chunk="dashboard-07-chunk-4">
        <CardHeader>
          <CardTitle>Identity Verification is not necessary</CardTitle>
          <CardDescription>
            With zkpass you don’t need ID card, passport, etc., for identity verification.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-2">
            <Image
              alt="Uploaded document preview"
              className="w-full object-contain rounded-md"
              height={249}
              src="/bill.png"
              width={240}
            />
            <div className="grid grid-cols-3 gap-2">
              <button>
                <Image
                  alt="Document thumbnail"
                  className="w-full object-contain rounded-md"
                  height="84"
                  src="/id.png"
                  width="84"
                />
              </button>
              <button>
                <Image
                  alt="Document thumbnail"
                  className="w-full object-contain rounded-md"
                  height="84"
                  src="/passport.png"
                  width="84"
                />
              </button>
              <button className="flex aspect-square w-full items-center justify-center rounded-md border border-dashed">
                <Upload className="h-4 w-4 text-muted-foreground" />
                <span className="sr-only">Upload Document</span>
              </button>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <p className="text-xs text-muted-foreground">
            zkPass does not need documents for verification.
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}

export default ProductImage;
