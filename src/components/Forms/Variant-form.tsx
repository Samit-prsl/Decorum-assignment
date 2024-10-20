import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Trash2, Plus } from "lucide-react";
import {
  addVariant,
  removeVariant,
  updateOption,
  updateValues,
} from "@/utils/Variant-Form";
import { useProductContext } from "@/context/product-context";
import InputButton from "./Input-button";
const VariantForm: React.FC = () => {
  const { setVariants, variants, error, setError } = useProductContext();
  return (
    <div className="lg:w-full w-[360px] lg:max-w-[29rem] space-y-4 lg:p-6 p-4 bg-white rounded-lg shadow-xl lg:mx-5 mx-2 ">
      <h2 className="text-lg font-semibold">Variants</h2>
      {variants.map((variant, index) => (
        <div key={index} className="space-y-2">
          <div className="flex space-x-2">
            <div className="flex-1">
              <Label htmlFor={`option-${index}`}>
                Option <span className="text-red-400">*</span>
              </Label>
              <Input
                id={`option-${index}`}
                value={variant.option}
                onChange={(e) =>
                  updateOption(
                    index,
                    e.target.value,
                    variants,
                    setVariants,
                    error,
                    setError
                  )
                }
                className={error[index] ? "border-red-500" : ""}
              />
            </div>
            <div className="flex-1">
              <Label htmlFor={`values-${index}`}>
                Values <span className="text-red-400">*</span>
              </Label>
              <InputButton
                value={variant.values.join(", ")}
                onChange={(newValue) =>
                  updateValues(
                    index,
                    newValue,
                    variants,
                    setVariants,
                    error,
                    setError
                  )
                }
                error={error[index]}
              />
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="mt-6"
              onClick={() =>
                removeVariant(index, variants, setVariants, error, setError)
              }
            >
              <Trash2 className="h-4 w-4 text-red-500" />
            </Button>
          </div>
          {error[index] && (
            <p className="text-sm text-red-500">{error[index]}</p>
          )}
        </div>
      ))}
      <Button
        variant="link"
        className="text-blue-600 p-0"
        onClick={() => addVariant(setVariants, variants)}
      >
        <Plus className="h-4 w-4 mr-2" />
        Add Option
      </Button>
    </div>
  );
};

export default VariantForm;
