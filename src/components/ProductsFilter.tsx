import { CategoriesApiInterface } from "@/types";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";

export default function ProductsFilter({
  categories,
  selectedFilters,
  setSelectedFilters,
  handleFilterChange,
}: {
  categories: Array<CategoriesApiInterface>;
  selectedFilters: any;
  setSelectedFilters: (filters: any) => void;
  handleFilterChange: (type: string, value: any) => void;
}) {
  const [priceRange, setPriceRange] = useState({
    min: selectedFilters.priceRange.min,
    max: selectedFilters.priceRange.max,
  });

  const [rating, setRating] = useState(selectedFilters.rating);

  const handlePriceChange = (min: number, max: number) => {
    setPriceRange({ min, max });
    handleFilterChange("priceRange", { min, max });
  };

  const handleRatingChange = (value: number) => {
    setRating(value);
    handleFilterChange("rating", value);
  };

  return (
    <div>
      <div className="flex flex-col items-start gap-3 mb-6">
        <Button
          size="sm"
          onClick={() =>
            setSelectedFilters({
              category: [],
              priceRange: { min: 0, max: 1000 },
              rating: 0,
            })
          }
        >
          Clear Filters
        </Button>
        <h1 className="text-2xl font-bold">Product Filters</h1>
      </div>
      <div className="flex flex-col">
        <div className={"max-w-sm"}>
          <div className="mb-6">
            <div className="flex flex-wrap items-center gap-2">
              {selectedFilters.category.length > 0 && (
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-sm font-medium">Category:</span>
                  {selectedFilters.category.map((category) => (
                    <Badge
                      key={category}
                      variant="outline"
                      className="cursor-pointer"
                      onClick={() => handleFilterChange("category", category)}
                    >
                      {category}
                    </Badge>
                  ))}
                </div>
              )}
              {(selectedFilters.priceRange.min !== 0 ||
                selectedFilters.priceRange.max !== 1000) && (
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">Price:</span>
                  <Badge
                    variant="outline"
                    className="cursor-pointer"
                    onClick={() =>
                      handleFilterChange("priceRange", { min: 0, max: 1000 })
                    }
                  >
                    ${selectedFilters.priceRange.min} - $
                    {selectedFilters.priceRange.max}
                  </Badge>
                </div>
              )}
              {selectedFilters.rating > 0 && (
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">Rating:</span>
                  <Badge
                    variant="outline"
                    className="cursor-pointer"
                    onClick={() => handleFilterChange("rating", 0)}
                  >
                    {selectedFilters.rating} stars and above
                  </Badge>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <Accordion type="single" collapsible>
            <AccordionItem value="category">
              <AccordionTrigger className="text-base">
                Category
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid gap-2">
                  {categories?.map((category) => (
                    <Label
                      className={"flex gap-2 font-normal"}
                      key={category.slug}
                    >
                      <Checkbox
                        checked={selectedFilters.category.includes(
                          category.slug,
                        )}
                        onCheckedChange={() =>
                          handleFilterChange("category", category.slug)
                        }
                      />
                      {category.name}
                    </Label>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem value="priceRange">
              <AccordionTrigger className="text-base">
                Price Range
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid gap-4">
                  <div className="flex flex-col gap-2">
                    <input
                      type="number"
                      placeholder="Min Price"
                      value={priceRange.min}
                      onChange={(e) =>
                        handlePriceChange(
                          Number(e.target.value),
                          priceRange.max,
                        )
                      }
                      className="border p-2 rounded"
                    />
                    <input
                      type="number"
                      placeholder="Max Price"
                      value={priceRange.max}
                      onChange={(e) =>
                        handlePriceChange(
                          priceRange.min,
                          Number(e.target.value),
                        )
                      }
                      className="border p-2 rounded"
                    />
                  </div>
                  <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                    <span>${priceRange.min}</span>
                    <span>${priceRange.max}</span>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem value="rating">
              <AccordionTrigger className="text-base">Rating</AccordionTrigger>
              <AccordionContent>
                <div className="grid gap-2">
                  {[4, 3, 2, 1].map((star) => (
                    <Label
                      key={star}
                      className="flex items-center gap-2 font-normal"
                    >
                      <Checkbox
                        checked={rating === star}
                        onCheckedChange={() => handleRatingChange(star)}
                      />
                      {star} stars and above
                    </Label>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
