import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { updateCombination } from "@/utils/Combination-form";
import { useProductContext } from "@/context/product-context";

export default function CombinationsForm() {
  const { combinations, setCombinations, error, setError } =
    useProductContext();

  return (
    <div className="lg:w-full w-[360px] lg:max-w-[29rem] space-y-4 lg:p-6 p-4 bg-white rounded-lg shadow-xl lg:mx-5 mx-2 ">
      <h2 className="text-lg font-semibold mb-4">Combinations</h2>
      <div className="grid grid-cols-[1fr,1fr,1fr,1fr] gap-4 mb-2 font-medium text-sm text-gray-500">
        <div></div>
        <div>SKU *</div>
        <div className="text-center">In stock</div>
        <div>Quantity</div>
      </div>
      {combinations.map((combination) => (
        <div
          key={combination.id}
          className="grid grid-cols-[1fr,1fr,1fr,1fr] gap-4 items-center mb-2"
        >
          <div className="flex items-center">
            <span className="mr-2 text-sm text-gray-600">
              {combination.variant}
            </span>
          </div>
          <div>
            <Input
              value={combination.sku}
              onChange={(e) =>
                updateCombination(
                  combination.id,
                  "sku",
                  e.target.value,
                  combinations,
                  setCombinations,
                  setError
                )
              }
              className={error[combination.id] ? "border-red-500" : ""}
            />
            {error[combination.id] && (
              <div className="text-xs text-red-500 mt-1">
                {error[combination.id]}
              </div>
            )}
          </div>
          <div className="flex justify-center">
            <Switch
              checked={combination.inStock}
              onCheckedChange={(checked) =>
                updateCombination(
                  combination.id,
                  "inStock",
                  checked,
                  combinations,
                  setCombinations,
                  setError
                )
              }
            />
          </div>
          <Input
            type="number"
            value={combination.quantity}
            onChange={(e) =>
              updateCombination(
                combination.id,
                "quantity",
                e.target.value,
                combinations,
                setCombinations,
                setError
              )
            }
            disabled={!combination.inStock}
          />
        </div>
      ))}
    </div>
  );
}
