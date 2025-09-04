
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, ZoomIn, AlertCircle } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

interface ProductImage {
  url: string;
  alt: string;
  type: 'rolo' | 'close' | 'flat_lay';
}

interface ProductImageGalleryProps {
  productName: string;
  images: ProductImage[];
}

const ProductImageGallery = ({ productName, images }: ProductImageGalleryProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  console.log('ProductImageGallery - Produto:', productName, 'Imagens:', images);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (!images || images.length === 0) {
    return (
      <Card className="overflow-hidden">
        <CardContent className="p-0">
          <div className="aspect-square bg-gray-100 flex flex-col items-center justify-center p-8">
            <AlertCircle className="h-16 w-16 text-gray-400 mb-4" />
            <p className="text-gray-600 text-center mb-2">
              Imagens não encontradas para:<br />
              <strong>{productName}</strong>
            </p>
            <p className="text-sm text-gray-500 text-center">
              Verificar mapeamento de imagens no sistema
            </p>
            <img
              src="/placeholder.svg"
              alt={productName}
              className="w-full h-48 object-cover mt-4 rounded opacity-50"
            />
          </div>
        </CardContent>
      </Card>
    );
  }

  const currentImage = images[currentImageIndex];

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <Card className="overflow-hidden relative group">
        <CardContent className="p-0">
          <div className="aspect-square relative">
            <img
              src={currentImage.url}
              alt={currentImage.alt}
              className="w-full h-full object-cover"
              onError={(e) => {
                console.error('Erro ao carregar imagem:', currentImage.url);
                e.currentTarget.src = '/placeholder.svg';
              }}
            />
            
            {/* Navigation Arrows */}
            {images.length > 1 && (
              <>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white/90 opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={prevImage}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white/90 opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={nextImage}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </>
            )}

            {/* Zoom Button */}
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-2 right-2 bg-white/80 hover:bg-white/90 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <ZoomIn className="h-4 w-4" />
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl">
                <img
                  src={currentImage.url}
                  alt={currentImage.alt}
                  className="w-full h-auto max-h-[80vh] object-contain"
                />
              </DialogContent>
            </Dialog>

            {/* Image Type Badge */}
            <div className="absolute bottom-2 left-2">
              <span className="bg-black/70 text-white px-2 py-1 rounded text-xs">
                {currentImage.type === 'rolo' && 'Rolo'}
                {currentImage.type === 'close' && 'Textura'}
                {currentImage.type === 'flat_lay' && 'Flat Lay'}
              </span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                index === currentImageIndex
                  ? 'border-primary ring-2 ring-primary/20'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}

      {/* Image Counter */}
      {images.length > 1 && (
        <div className="text-center text-sm text-gray-600">
          {currentImageIndex + 1} de {images.length}
        </div>
      )}

      {/* Debug Info (only in development) */}
      {process.env.NODE_ENV === 'development' && (
        <div className="text-xs text-gray-500 bg-gray-50 p-2 rounded">
          Debug: {images.length} imagem(ns) encontrada(s) para "{productName}"
        </div>
      )}
    </div>
  );
};

export default ProductImageGallery;
