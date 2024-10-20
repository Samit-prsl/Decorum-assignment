import { useProductContext } from "@/context/product-context";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { CheckCircle2, XCircle } from "lucide-react";

const Completed: React.FC = () => {
  const { name, brand, category, img, variants, combinations, discount } =
    useProductContext();
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Product Added Successfully
      </h1>
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Product Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <span className="font-semibold">Name:</span> {name}
            </div>
            <div>
              <span className="font-semibold">Category:</span> {category}
            </div>
            <div>
              <span className="font-semibold">Brand:</span> {brand}
            </div>
            {img && (
              <div>
                <span className="font-semibold">Image:</span> {img.name} (
                {(img.size / 1024).toFixed(2)} KB)
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Variants</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {variants.map((variant, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <span className="font-semibold">{variant.option}:</span>
                  <div className="flex flex-wrap gap-1">
                    {variant.values.map((value, vIndex) => (
                      <Badge key={vIndex} variant="secondary">
                        {value}
                      </Badge>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Combinations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {combinations.map((combination, index) => (
                <div key={index} className="bg-muted p-4 rounded-lg">
                  <div className="font-semibold mb-2">
                    Variant: {combination.variant}
                  </div>
                  <div>SKU: {combination.sku}</div>
                  <div className="flex items-center space-x-1">
                    <span>In stock:</span>
                    {combination.inStock ? (
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                    ) : (
                      <XCircle className="h-4 w-4 text-red-500" />
                    )}
                  </div>
                  <div>Quantity: {combination.quantity}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Discount</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-between items-center">
            <div>
              <span className="font-semibold">Type:</span>{" "}
              {discount.method === "pct" ? "Percentage" : "Flat"}
            </div>
            <Separator orientation="vertical" className="h-6 mx-4" />
            <div>
              <span className="font-semibold">Value:</span> {discount.value}
              {discount.method === "pct" ? "%" : ""}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Completed;
