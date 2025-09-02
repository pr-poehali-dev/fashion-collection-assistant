import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [gender, setGender] = useState('female');
  const [bodyParams, setBodyParams] = useState({
    bust: '',
    waist: '',
    hips: '',
    height: '',
    weight: '',
    legLength: '',
    shoeSize: '',
    bodyType: ''
  });
  
  const bodyTypes = {
    female: ['Груша', 'Яблоко', 'Прямоугольник', 'Песочные часы', 'Перевернутый треугольник'],
    male: ['Эктоморф', 'Мезоморф', 'Эндоморф', 'V-форма', 'Прямоугольник']
  };
  
  const faceTypes = ['Овал', 'Круг', 'Квадрат', 'Прямоугольник', 'Треугольник', 'Ромб'];

  const segments = [
    {
      name: 'Эконом',
      price: '₽2,000 - ₽8,000',
      color: 'bg-segment-economy',
      description: 'Стильные базовые вещи',
      brands: ['H&M', 'Zara', 'Uniqlo']
    },
    {
      name: 'Стандарт',
      price: '₽8,000 - ₽25,000',
      color: 'bg-segment-standard',
      description: 'Качественная повседневная мода',
      brands: ['COS', 'Massimo Dutti', '& Other Stories']
    },
    {
      name: 'Люкс',
      price: '₽25,000 - ₽80,000',
      color: 'bg-segment-luxury',
      description: 'Дизайнерские вещи премиум класса',
      brands: ['Theory', 'Isabel Marant', 'Ganni']
    },
    {
      name: 'Премиум',
      price: '₽80,000+',
      color: 'bg-segment-premium',
      description: 'Haute couture и luxury бренды',
      brands: ['Chanel', 'Dior', 'Saint Laurent']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-luxury-soft-white to-white">
      {/* Navigation */}
      <nav className="bg-luxury-black text-white px-6 py-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <h1 className="text-xl font-bold font-montserrat">PERSONAL STYLING</h1>
          <div className="hidden md:flex space-x-8">
            <a href="#services" className="hover:text-luxury-gold transition-colors">Услуги</a>
            <a href="#outfits" className="hover:text-luxury-gold transition-colors">Комплекты</a>
            <a href="#contact" className="hover:text-luxury-gold transition-colors">Контакты</a>
          </div>
          <Button variant="outline" className="border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-luxury-black">
            Войти
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl lg:text-6xl font-bold font-montserrat text-luxury-black leading-tight">
                Персональный<br />
                <span className="text-luxury-gold">Подбор Одежды</span>
              </h1>
              <p className="text-xl text-luxury-gray leading-relaxed">
                Создаем идеальные образы с учетом ваших параметров тела, 
                бюджета и погодных условий. ИИ-стилист анализирует ваш гардероб 
                и подбирает комплекты от эконом до премиум сегмента.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-luxury-black hover:bg-luxury-gold text-white hover:text-luxury-black transition-all duration-300 text-lg px-8 py-4">
                  <Icon name="Sparkles" className="mr-2" size={20} />
                  Начать подбор
                </Button>
                <Button variant="outline" size="lg" className="border-luxury-black text-luxury-black hover:bg-luxury-black hover:text-white text-lg px-8 py-4">
                  Как это работает
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/a351ff1a-a571-440e-9b2c-3dfa7f1e3b29.jpg" 
                alt="Luxury Fashion Model"
                className="w-full h-[600px] object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -top-4 -left-4 bg-luxury-gold text-luxury-black px-6 py-3 rounded-lg font-semibold">
                Премиум качество
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Body Parameters Section */}
      <section id="services" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-montserrat text-luxury-black mb-4">
              Параметры Тела
            </h2>
            <p className="text-xl text-luxury-gray">
              Точные измерения для идеальной посадки
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Card className="p-8 border-2 border-luxury-gray/20 hover:border-luxury-gold transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl font-montserrat text-luxury-black">
                    Введите ваши параметры
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Gender Selection */}
                  <div className="mb-6">
                    <Label className="text-luxury-black font-medium mb-4 block">Выберите пол</Label>
                    <RadioGroup value={gender} onValueChange={setGender} className="flex space-x-6">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="female" id="female" />
                        <Label htmlFor="female" className="text-luxury-black cursor-pointer">Женский</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="male" id="male" />
                        <Label htmlFor="male" className="text-luxury-black cursor-pointer">Мужской</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="bust" className="text-luxury-black font-medium">
                        {gender === 'male' ? 'Обхват груди (см)' : 'Обхват груди (см)'}
                      </Label>
                      <Input
                        id="bust"
                        placeholder={gender === 'male' ? '100' : '88'}
                        value={bodyParams.bust}
                        onChange={(e) => setBodyParams({...bodyParams, bust: e.target.value})}
                        className="mt-2 border-luxury-gray/30 focus:border-luxury-gold"
                      />
                    </div>
                    <div>
                      <Label htmlFor="waist" className="text-luxury-black font-medium">Обхват талии (см)</Label>
                      <Input
                        id="waist"
                        placeholder={gender === 'male' ? '85' : '68'}
                        value={bodyParams.waist}
                        onChange={(e) => setBodyParams({...bodyParams, waist: e.target.value})}
                        className="mt-2 border-luxury-gray/30 focus:border-luxury-gold"
                      />
                    </div>
                    <div>
                      <Label htmlFor="hips" className="text-luxury-black font-medium">Обхват бёдер (см)</Label>
                      <Input
                        id="hips"
                        placeholder={gender === 'male' ? '95' : '96'}
                        value={bodyParams.hips}
                        onChange={(e) => setBodyParams({...bodyParams, hips: e.target.value})}
                        className="mt-2 border-luxury-gray/30 focus:border-luxury-gold"
                      />
                    </div>
                    <div>
                      <Label htmlFor="height" className="text-luxury-black font-medium">Рост (см)</Label>
                      <Input
                        id="height"
                        placeholder={gender === 'male' ? '180' : '165'}
                        value={bodyParams.height}
                        onChange={(e) => setBodyParams({...bodyParams, height: e.target.value})}
                        className="mt-2 border-luxury-gray/30 focus:border-luxury-gold"
                      />
                    </div>
                    <div>
                      <Label htmlFor="legLength" className="text-luxury-black font-medium">Длина ног (см)</Label>
                      <Input
                        id="legLength"
                        placeholder={gender === 'male' ? '85' : '75'}
                        value={bodyParams.legLength}
                        onChange={(e) => setBodyParams({...bodyParams, legLength: e.target.value})}
                        className="mt-2 border-luxury-gray/30 focus:border-luxury-gold"
                      />
                    </div>
                    <div>
                      <Label htmlFor="shoeSize" className="text-luxury-black font-medium">Размер обуви</Label>
                      <Input
                        id="shoeSize"
                        placeholder={gender === 'male' ? '43' : '37'}
                        value={bodyParams.shoeSize}
                        onChange={(e) => setBodyParams({...bodyParams, shoeSize: e.target.value})}
                        className="mt-2 border-luxury-gray/30 focus:border-luxury-gold"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <Label className="text-luxury-black font-medium mb-2 block">Тип фигуры</Label>
                      <Select value={bodyParams.bodyType} onValueChange={(value) => setBodyParams({...bodyParams, bodyType: value})}>
                        <SelectTrigger className="border-luxury-gray/30 focus:border-luxury-gold">
                          <SelectValue placeholder="Выберите тип фигуры" />
                        </SelectTrigger>
                        <SelectContent>
                          {bodyTypes[gender as 'male' | 'female'].map((type) => (
                            <SelectItem key={type} value={type}>{type}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <Button className="w-full bg-luxury-gold hover:bg-luxury-black text-luxury-black hover:text-white transition-all duration-300">
                    <Icon name="Save" className="mr-2" size={18} />
                    Сохранить параметры
                  </Button>
                </CardContent>
              </Card>
            </div>
            
            <div className="flex justify-center">
              <div className="relative">
                <img 
                  src={gender === 'male' ? '/img/02cdf373-36c0-475d-843c-6038d950ae78.jpg' : '/img/02e4a2d1-a287-4952-9b37-90ddbedfef04.jpg'}
                  alt={`${gender === 'male' ? 'Male' : 'Female'} Body Measurements Guide`}
                  className="w-full max-w-md h-auto object-cover rounded-2xl shadow-xl transition-all duration-300"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-sm text-luxury-black font-medium">
                    💡 Схема измерения для {gender === 'male' ? 'мужчин' : 'женщин'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Price Segments Section */}
      <section id="outfits" className="py-20 px-6 bg-luxury-soft-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-montserrat text-luxury-black mb-4">
              Ценовые Сегменты
            </h2>
            <p className="text-xl text-luxury-gray">
              Подбираем комплекты под любой бюджет
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {segments.map((segment, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-transparent hover:border-luxury-gold">
                <div className={`h-2 ${segment.color} rounded-t-lg`}></div>
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-montserrat text-luxury-black">
                    {segment.name}
                  </CardTitle>
                  <div className="text-2xl font-bold text-luxury-gold">
                    {segment.price}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-luxury-gray">{segment.description}</p>
                  <div className="space-y-2">
                    <p className="font-medium text-luxury-black text-sm">Бренды:</p>
                    <div className="flex flex-wrap gap-2">
                      {segment.brands.map((brand, brandIndex) => (
                        <Badge key={brandIndex} variant="secondary" className="text-xs">
                          {brand}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full mt-4 bg-luxury-black hover:bg-luxury-gold text-white hover:text-luxury-black transition-all duration-300">
                        <Icon name="Eye" className="mr-2" size={16} />
                        Посмотреть комплекты
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl h-[80vh]">
                      <DialogHeader>
                        <DialogTitle className="text-2xl font-montserrat text-luxury-black">
                          Комплекты {segment.name}
                        </DialogTitle>
                      </DialogHeader>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 overflow-y-auto">
                        {[1, 2, 3, 4].map((outfit) => (
                          <Card key={outfit} className="p-4">
                            <div className="aspect-square bg-luxury-soft-white rounded-lg mb-4 flex items-center justify-center">
                              <Icon name="Image" size={48} className="text-luxury-gray" />
                            </div>
                            <h4 className="font-medium text-luxury-black mb-2">Комплект #{outfit}</h4>
                            <p className="text-sm text-luxury-gray">Описание комплекта...</p>
                            <Button size="sm" className="w-full mt-3 bg-luxury-gold hover:bg-luxury-black text-luxury-black hover:text-white">
                              Примерить
                            </Button>
                          </Card>
                        ))}
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-montserrat text-luxury-black mb-4">
              Дополнительные Услуги
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <Card className="text-center p-8 hover:shadow-xl transition-all duration-300 group">
              <div className="w-20 h-20 bg-luxury-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-luxury-gold transition-colors duration-300">
                <Icon name="Scissors" size={32} className="text-luxury-gold group-hover:text-white" />
              </div>
              <CardTitle className="text-xl font-montserrat text-luxury-black mb-4">
                Подбор причёсок
              </CardTitle>
              <p className="text-luxury-gray">Стрижки и укладки по типу лица</p>
            </Card>
            
            <Card className="text-center p-8 hover:shadow-xl transition-all duration-300 group">
              <div className="w-20 h-20 bg-luxury-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-luxury-gold transition-colors duration-300">
                <Icon name="Palette" size={32} className="text-luxury-gold group-hover:text-white" />
              </div>
              <CardTitle className="text-xl font-montserrat text-luxury-black mb-4">
                Подбор макияжа
              </CardTitle>
              <p className="text-luxury-gray">Макияж под тип лица и выбранный образ</p>
            </Card>
            
            <Card className="text-center p-8 hover:shadow-xl transition-all duration-300 group">
              <div className="w-20 h-20 bg-luxury-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-luxury-gold transition-colors duration-300">
                <Icon name="Gem" size={32} className="text-luxury-gold group-hover:text-white" />
              </div>
              <CardTitle className="text-xl font-montserrat text-luxury-black mb-4">
                Аксессуары
              </CardTitle>
              <p className="text-luxury-gray">Сумки, украшения, обувь в тон образу</p>
            </Card>
            
            <Card className="text-center p-8 hover:shadow-xl transition-all duration-300 group">
              <div className="w-20 h-20 bg-luxury-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-luxury-gold transition-colors duration-300">
                <Icon name="Closet" fallback="Home" size={32} className="text-luxury-gold group-hover:text-white" />
              </div>
              <CardTitle className="text-xl font-montserrat text-luxury-black mb-4">
                Анализ гардероба
              </CardTitle>
              <p className="text-luxury-gray">Оценка вашего гардероба и рекомендации</p>
            </Card>
            
            <Card className="text-center p-8 hover:shadow-xl transition-all duration-300 group">
              <div className="w-20 h-20 bg-luxury-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-luxury-gold transition-colors duration-300">
                <Icon name="CloudRain" size={32} className="text-luxury-gold group-hover:text-white" />
              </div>
              <CardTitle className="text-xl font-montserrat text-luxury-black mb-4">
                Погодный анализ
              </CardTitle>
              <p className="text-luxury-gray">Подбор одежды с учетом погоды</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Hairstyle Section */}
      <section className="py-20 px-6 bg-luxury-soft-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-montserrat text-luxury-black mb-4">
              Подбор Причесок
            </h2>
            <p className="text-xl text-luxury-gray">
              Стрижки и укладки, идеально подходящие к вашему типу лица
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img 
                src="/img/350e797a-c2b8-42cc-a37f-f879d1993e3e.jpg" 
                alt="Hairstyle Consultation"
                className="w-full h-[500px] object-cover rounded-2xl shadow-xl"
              />
            </div>
            <div className="space-y-8">
              <h3 className="text-3xl font-bold font-montserrat text-luxury-black">
                Анализ типа лица
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {faceTypes.map((faceType, index) => (
                  <Card key={index} className="p-4 text-center hover:shadow-lg transition-all duration-300 group cursor-pointer">
                    <div className="w-16 h-16 bg-luxury-gold/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-luxury-gold transition-colors duration-300">
                      <Icon name="User" size={24} className="text-luxury-gold group-hover:text-white" />
                    </div>
                    <p className="text-sm font-medium text-luxury-black">{faceType}</p>
                  </Card>
                ))}
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Icon name="CheckCircle" size={24} className="text-luxury-gold flex-shrink-0" />
                  <span className="text-luxury-black">Определение типа лица по фотографии</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Icon name="CheckCircle" size={24} className="text-luxury-gold flex-shrink-0" />
                  <span className="text-luxury-black">Рекомендации по стрижкам и укладкам</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Icon name="CheckCircle" size={24} className="text-luxury-gold flex-shrink-0" />
                  <span className="text-luxury-black">Подбор цвета волос под цветотип</span>
                </div>
              </div>
              <Button size="lg" className="bg-luxury-black hover:bg-luxury-gold text-white hover:text-luxury-black transition-all duration-300">
                <Icon name="Camera" className="mr-2" size={20} />
                Анализировать лицо
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Stylist Consultation */}
      <section className="py-20 px-6 bg-luxury-black text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/img/2980660f-1a05-4e48-a88e-871f35bea403.jpg" 
                alt="Personal Stylist Consultation"
                className="w-full h-[500px] object-cover rounded-2xl"
              />
            </div>
            <div className="space-y-8">
              <h2 className="text-4xl font-bold font-montserrat mb-4">
                Персональные <span className="text-luxury-gold">Стилисты</span>
              </h2>
              <p className="text-xl text-luxury-gray leading-relaxed">
                Получите индивидуальную консультацию от профессионального стилиста. 
                Персонализированный подход к созданию вашего уникального стиля.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Icon name="CheckCircle" size={24} className="text-luxury-gold flex-shrink-0" />
                  <span>Анализ типа фигуры и цветотипа</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Icon name="CheckCircle" size={24} className="text-luxury-gold flex-shrink-0" />
                  <span>Персональные рекомендации по стилю</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Icon name="CheckCircle" size={24} className="text-luxury-gold flex-shrink-0" />
                  <span>Шопинг-сопровождение</span>
                </div>
              </div>
              <Button size="lg" className="bg-luxury-gold hover:bg-white text-luxury-black hover:text-luxury-black transition-all duration-300">
                <Icon name="Calendar" className="mr-2" size={20} />
                Записаться на консультацию
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-luxury-black text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-2xl font-bold font-montserrat mb-6">PERSONAL STYLING</h3>
              <p className="text-luxury-gray leading-relaxed">
                Премиальный сервис подбора одежды с использованием ИИ и 
                персональным подходом к каждому клиенту.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6">Услуги</h4>
              <ul className="space-y-3 text-luxury-gray">
                <li>Подбор одежды по параметрам</li>
                <li>Анализ личного гардероба</li>
                <li>Подбор причесок по типу лица</li>
                <li>Консультации стилистов</li>
                <li>Подбор макияжа и аксессуаров</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6">Контакты</h4>
              <div className="space-y-3 text-luxury-gray">
                <div className="flex items-center space-x-3">
                  <Icon name="Mail" size={18} />
                  <span>info@personalstyling.ru</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" size={18} />
                  <span>+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="MapPin" size={18} />
                  <span>Москва, Тверская 15</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-luxury-gray/30 mt-12 pt-8 text-center text-luxury-gray">
            <p>&copy; 2024 Personal Styling. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}