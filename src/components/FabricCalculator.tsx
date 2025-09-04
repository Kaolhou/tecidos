
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calculator, RotateCcw } from "lucide-react";

interface FabricCalculatorProps {
  pricePerMeter: number;
}

const FabricCalculator = ({ pricePerMeter }: FabricCalculatorProps) => {
  const [projectType, setProjectType] = useState<string>("");
  const [height, setHeight] = useState<string>("");
  const [width, setWidth] = useState<string>("");
  const [calculatedMeters, setCalculatedMeters] = useState<number>(0);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const projectMultipliers = {
    "cortina": 1.5,
    "toalha": 1.2,
    "almofada": 1.1,
    "roupa": 1.3
  };

  const calculateFabric = () => {
    if (!height || !width || !projectType) return;

    const heightNum = parseFloat(height);
    const widthNum = parseFloat(width);
    
    if (heightNum <= 0 || widthNum <= 0) return;

    const baseMeters = heightNum * widthNum;
    const multiplier = projectMultipliers[projectType as keyof typeof projectMultipliers] || 1.2;
    const finalMeters = Math.ceil(baseMeters * multiplier * 10) / 10; // Round up to 1 decimal
    
    setCalculatedMeters(finalMeters);
    setTotalPrice(finalMeters * pricePerMeter);
  };

  const resetCalculator = () => {
    setProjectType("");
    setHeight("");
    setWidth("");
    setCalculatedMeters(0);
    setTotalPrice(0);
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-xl font-serif text-petrol-900 flex items-center gap-2">
          <Calculator size={20} />
          Calculadora de Tecido
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Project Type */}
          <div className="space-y-2">
            <Label htmlFor="project-type">Tipo de Projeto</Label>
            <Select value={projectType} onValueChange={setProjectType}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione o projeto" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="cortina">Cortina</SelectItem>
                <SelectItem value="toalha">Toalha</SelectItem>
                <SelectItem value="almofada">Almofada</SelectItem>
                <SelectItem value="roupa">Roupa</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Height */}
          <div className="space-y-2">
            <Label htmlFor="height">Altura (m)</Label>
            <Input
              id="height"
              type="number"
              step="0.1"
              min="0"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="Ex: 2.5"
            />
          </div>

          {/* Width */}
          <div className="space-y-2">
            <Label htmlFor="width">Largura (m)</Label>
            <Input
              id="width"
              type="number"
              step="0.1"
              min="0"
              value={width}
              onChange={(e) => setWidth(e.target.value)}
              placeholder="Ex: 1.4"
            />
          </div>

          {/* Price per meter display */}
          <div className="space-y-2">
            <Label>Preço por Metro</Label>
            <div className="p-3 bg-gray-50 rounded-md">
              <span className="font-semibold text-petrol-800">
                {formatCurrency(pricePerMeter)}
              </span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <Button 
            onClick={calculateFabric}
            className="flex-1 bg-petrol-800 hover:bg-petrol-900"
            disabled={!projectType || !height || !width}
          >
            Calcular
          </Button>
          <Button 
            onClick={resetCalculator}
            variant="outline"
            size="icon"
            className="border-petrol-800 text-petrol-800 hover:bg-petrol-800 hover:text-white"
          >
            <RotateCcw size={16} />
          </Button>
        </div>

        {/* Results */}
        {calculatedMeters > 0 && (
          <div className="mt-6 p-4 bg-gradient-to-r from-petrol-50 to-antracite-50 rounded-lg border">
            <div className="space-y-2">
              <p className="text-sm text-gray-600">Resultado do Cálculo:</p>
              <p className="text-lg font-semibold text-petrol-900">
                Você precisará de aproximadamente <span className="text-antracite-600">{calculatedMeters} metros</span> de tecido
              </p>
              <p className="text-xl font-bold text-petrol-800">
                Valor Total: {formatCurrency(totalPrice)}
              </p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default FabricCalculator;
