import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Star, StarOff } from 'lucide-react';
import { useProductReviews } from '@/hooks/useProductReviews';
import { useAuth } from '@/hooks/useAuth';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
interface ProductReviewsProps {
  productId: string;
}
const ProductReviews: React.FC<ProductReviewsProps> = ({
  productId
}) => {
  const {
    reviews,
    stats,
    userReview,
    loading,
    submitReview,
    deleteReview
  } = useProductReviews(productId);
  const {
    user
  } = useAuth();
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [rating, setRating] = useState(userReview?.rating || 5);
  const [comment, setComment] = useState(userReview?.comment || '');
  const [submitting, setSubmitting] = useState(false);
  const renderStars = (rating: number, interactive = false, size = 'w-4 h-4') => {
    return <div className="flex">
        {[1, 2, 3, 4, 5].map(star => <button key={star} type="button" className={`${size} ${interactive ? 'cursor-pointer hover:scale-110 transition-transform' : 'cursor-default'}`} onClick={interactive ? () => setRating(star) : undefined}>
            {star <= rating ? <Star className="fill-primary text-primary" /> : <StarOff className="text-gray-300" />}
          </button>)}
      </div>;
  };
  const handleSubmitReview = async () => {
    setSubmitting(true);
    await submitReview(rating, comment);
    setSubmitting(false);
    setShowReviewForm(false);
  };
  const handleDeleteReview = async () => {
    await deleteReview();
    setShowReviewForm(false);
    setRating(5);
    setComment('');
  };
  return <div className="space-y-6">
      {/* Review Stats */}
      

      {/* User Review Section */}
      {user && (
        <Card className="bg-petrol-50 border border-petrol-200">
          <CardHeader>
            <CardTitle className="text-petrol-900">Sua Avaliação</CardTitle>
          </CardHeader>
          <CardContent>
            {userReview ? (
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  {renderStars(userReview.rating)}
                  <span className="text-sm text-petrol-700">Sua avaliação</span>
                </div>
                {userReview.comment && (
                  <p className="text-sm text-petrol-600">{userReview.comment}</p>
                )}
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setRating(userReview.rating);
                      setComment(userReview.comment || '');
                      setShowReviewForm(true);
                    }}
                    className="border-petrol-300 text-petrol-700 hover:bg-petrol-100"
                  >
                    Editar
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleDeleteReview}
                    className="border-red-300 text-red-700 hover:bg-red-50"
                  >
                    Excluir
                  </Button>
                </div>
              </div>
            ) : !showReviewForm ? (
              <Button
                onClick={() => setShowReviewForm(true)}
                className="bg-petrol-800 hover:bg-petrol-900 text-white"
              >
                Avaliar Produto
              </Button>
            ) : (
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-petrol-900">Sua nota:</label>
                  {renderStars(rating, true, 'w-6 h-6')}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-petrol-900">Comentário (opcional):</label>
                  <Textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Compartilhe sua experiência com este produto..."
                    className="border-petrol-200 focus:border-petrol-500"
                  />
                </div>
                <div className="flex gap-2">
                  <Button
                    onClick={handleSubmitReview}
                    disabled={submitting}
                    className="bg-petrol-800 hover:bg-petrol-900 text-white"
                  >
                    {submitting ? 'Enviando...' : 'Enviar Avaliação'}
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setShowReviewForm(false);
                      setRating(userReview?.rating || 5);
                      setComment(userReview?.comment || '');
                    }}
                    className="border-petrol-300 text-petrol-700 hover:bg-petrol-100"
                  >
                    Cancelar
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* Reviews List */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-petrol-900">Todas as Avaliações</h3>
        {loading ? <div className="text-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
          </div> : reviews.length > 0 ? <div className="space-y-4">
            {reviews.map(review => <Card key={review.id} className="bg-white border border-gray-200">
                <CardContent className="pt-4">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        {renderStars(review.rating)}
                        <span className="text-sm font-medium text-petrol-800">{review.user_name}</span>
                        <Badge variant="secondary" className="text-xs bg-gray-100 text-gray-700">
                          {format(new Date(review.created_at), 'dd/MM/yyyy', {
                      locale: ptBR
                    })}
                        </Badge>
                      </div>
                      {review.comment && <p className="text-sm text-gray-600 leading-relaxed">{review.comment}</p>}
                    </div>
                  </div>
                </CardContent>
              </Card>)}
          </div> : <Card className="bg-gray-50 border border-gray-200">
            <CardContent className="text-center py-8">
              <p className="text-gray-600">Ainda não há avaliações para este produto.</p>
              {user && !userReview && <Button className="mt-4 bg-petrol-800 hover:bg-petrol-900 text-white" onClick={() => setShowReviewForm(true)}>
                  Seja o primeiro a avaliar
                </Button>}
            </CardContent>
          </Card>}
      </div>
    </div>;
};
export default ProductReviews;