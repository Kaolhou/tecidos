
import { useState, useRef, useEffect } from "react";
import { X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface ProductChatBotProps {
  productName: string;
  productContext: string;
  suggestedQuestions: string[];
}

const ProductChatBot = ({ 
  productName, 
  productContext, 
  suggestedQuestions 
}: ProductChatBotProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: `Olá! Vejo que você está interessado no ${productName}. Como posso ajudá-lo com informações sobre este produto?`,
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const webhookUrl = 'https://vmsol.app.n8n.cloud/webhook-test/bc5fbed8-a9c0-40f5-84c7-c74977744ae8';

  useEffect(() => {
    if (scrollAreaRef.current) {
      const scrollContainer = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
      if (scrollContainer) {
        scrollContainer.scrollTop = scrollContainer.scrollHeight;
      }
    }
  }, [messages, isTyping]);

  const sendMessage = async (text: string) => {
    if (!text.trim() || isSending) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: text.trim(),
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsSending(true);
    setIsTyping(true);

    try {
      // Send to webhook with product context
      await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'no-cors',
        body: JSON.stringify({
          message: text.trim(),
          productContext: productContext,
          productName: productName,
          timestamp: new Date().toISOString(),
          source: 'leticia-tecidos-product-page'
        }),
      });

      // Enhanced bot response based on product
      setTimeout(() => {
        let botResponse = '';
        
        if (text.toLowerCase().includes('cuidado') || text.toLowerCase().includes('lavar')) {
          botResponse = `Para o ${productName}, recomendo cuidados especiais. Nossa equipe irá te enviar um guia detalhado de cuidados. Posso ajudar com mais alguma informação sobre este produto?`;
        } else if (text.toLowerCase().includes('metragem') || text.toLowerCase().includes('quantidade')) {
          botResponse = `A metragem necessária para o ${productName} depende do que você quer confeccionar. Nossa equipe especializada pode te ajudar com o cálculo exato. Que tipo de peça você pretende fazer?`;
        } else if (text.toLowerCase().includes('preço') || text.toLowerCase().includes('valor')) {
          botResponse = `O ${productName} tem um excelente custo-benefício. Entre em contato conosco para condições especiais e possíveis descontos para quantidades maiores.`;
        } else {
          botResponse = `Obrigado pela sua pergunta sobre o ${productName}! Nossa equipe irá analisar sua solicitação e responder com informações detalhadas em breve.`;
        }

        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: botResponse,
          sender: 'bot',
          timestamp: new Date()
        };
        setMessages(prev => [...prev, botMessage]);
        setIsTyping(false);
      }, 2000);

    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: 'Desculpe, ocorreu um erro. Nossa equipe será notificada e entrará em contato em breve.',
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
      setIsTyping(false);
    } finally {
      setIsSending(false);
    }
  };

  const handleSuggestedQuestion = (question: string) => {
    sendMessage(question);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(inputValue);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('pt-BR', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <>
      {/* Chat Widget Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-petrol-800 hover:bg-petrol-900 text-white shadow-xl hover:scale-105 transition-all duration-300"
          size="icon"
        >
          {/* Ícone do WhatsApp usando SVG */}
          <svg
            viewBox="0 0 24 24"
            width="28"
            height="28"
            fill="currentColor"
            className="drop-shadow-sm"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.89 3.488"/>
          </svg>
          {/* Notification badge */}
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-antracite-500 rounded-full flex items-center justify-center">
            <span className="text-xs font-bold text-white">?</span>
          </div>
        </Button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 z-50 w-80 sm:w-96 h-[500px] shadow-2xl border-0 rounded-2xl overflow-hidden bg-white">
          <CardHeader className="bg-petrol-800 text-white p-4">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-lg font-serif">Leticia Tecidos</CardTitle>
                <p className="text-sm opacity-90 truncate">{productName}</p>
              </div>
              <Button
                onClick={() => setIsOpen(false)}
                variant="ghost"
                size="sm"
                className="text-white hover:bg-petrol-700 h-8 w-8 p-0"
              >
                <X size={16} />
              </Button>
            </div>
          </CardHeader>

          <CardContent className="p-0 flex flex-col h-full">
            {/* Messages Area */}
            <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[85%] p-3 rounded-2xl ${
                        message.sender === 'user'
                          ? 'bg-petrol-800 text-white'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                      <p className={`text-xs mt-1 ${
                        message.sender === 'user' ? 'text-petrol-200' : 'text-gray-500'
                      }`}>
                        {formatTime(message.timestamp)}
                      </p>
                    </div>
                  </div>
                ))}

                {/* Suggested Questions */}
                {messages.length <= 1 && suggestedQuestions.length > 0 && (
                  <div className="space-y-2">
                    <p className="text-xs text-gray-500 text-center">Perguntas frequentes:</p>
                    {suggestedQuestions.slice(0, 3).map((question, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="cursor-pointer hover:bg-petrol-50 transition-colors text-xs p-2 block text-center"
                        onClick={() => handleSuggestedQuestion(question)}
                      >
                        {question}
                      </Badge>
                    ))}
                  </div>
                )}

                {/* Typing Indicator */}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-gray-100 p-3 rounded-2xl">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>

            {/* Input Area */}
            <div className="p-4 border-t">
              <form onSubmit={handleSubmit} className="flex gap-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder={`Pergunte sobre ${productName.split(' ')[0]}...`}
                  disabled={isSending}
                  className="flex-1 rounded-full border-gray-300 focus:border-petrol-800"
                />
                <Button
                  type="submit"
                  disabled={!inputValue.trim() || isSending}
                  size="icon"
                  className="bg-petrol-800 hover:bg-petrol-900 rounded-full"
                >
                  <Send size={16} />
                </Button>
              </form>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default ProductChatBot;
