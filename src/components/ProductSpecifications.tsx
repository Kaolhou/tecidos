
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Scissors, Ruler, Palette, ShirtIcon } from 'lucide-react';

interface ProductSpecificationsProps {
  specifications: {
    composition?: string;
    weight?: string;
    width?: string;
  };
  features: string[];
  applications: string[];
  care: string[];
}

const ProductSpecifications = ({ 
  specifications, 
  features, 
  applications, 
  care 
}: ProductSpecificationsProps) => {
  return (
    <div className="space-y-6">
      {/* Especificações Técnicas */}
      <Card className="bg-white border-petrol-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-petrol-900">
            <Scissors className="h-5 w-5" />
            Especificações Técnicas
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {specifications.composition && (
              <div className="flex items-center gap-3">
                <Palette className="h-4 w-4 text-petrol-700" />
                <div>
                  <span className="text-sm font-medium text-foreground">Composição:</span>
                  <p className="text-sm text-muted-foreground">{specifications.composition}</p>
                </div>
              </div>
            )}
            {specifications.weight && (
              <div className="flex items-center gap-3">
                <ShirtIcon className="h-4 w-4 text-petrol-700" />
                <div>
                  <span className="text-sm font-medium text-foreground">Gramatura:</span>
                  <p className="text-sm text-muted-foreground">{specifications.weight}</p>
                </div>
              </div>
            )}
            {specifications.width && (
              <div className="flex items-center gap-3 md:col-span-2">
                <Ruler className="h-4 w-4 text-petrol-700" />
                <div>
                  <span className="text-sm font-medium text-foreground">Largura:</span>
                  <p className="text-sm text-muted-foreground">{specifications.width}</p>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Características */}
      <Card className="bg-white border-petrol-200">
        <CardHeader>
          <CardTitle className="text-petrol-900">Características</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {features.map((feature, index) => (
              <Badge key={index} variant="secondary" className="text-sm">
                {feature}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Aplicações */}
      <Card className="bg-white border-petrol-200">
        <CardHeader>
          <CardTitle className="text-petrol-900">Aplicações Sugeridas</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {applications.map((application, index) => (
              <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-1.5 h-1.5 bg-petrol-600 rounded-full flex-shrink-0"></div>
                {application}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Cuidados */}
      <Card className="bg-white border-petrol-200">
        <CardHeader>
          <CardTitle className="text-petrol-900">Cuidados e Manutenção</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {care.map((careInstruction, index) => (
              <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-1.5 h-1.5 bg-antracite-500 rounded-full flex-shrink-0"></div>
                {careInstruction}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductSpecifications;
