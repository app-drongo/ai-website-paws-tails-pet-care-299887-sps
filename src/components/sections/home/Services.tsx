'use client';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ArrowRight, CheckCircle2, Star, Scissors, Home, GraduationCap, Heart } from 'lucide-react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_SERVICES_LIST_DESCRIPTIONS = {
  badge: 'Premium Pet Care Services',
  mainTitle: 'Everything Your Pet Needs for',
  mainTitleHighlight: 'Health & Happiness',
  mainDescription:
    'Professional pet care services designed to keep your furry family members healthy, happy, and looking their absolute best.',
  service1Title: 'Professional Grooming',
  service1Description: 'Complete grooming services for dogs and cats of all sizes',
  service1LongDescription:
    'Our certified groomers provide full-service grooming including bathing, brushing, nail trimming, ear cleaning, and styling. We use only premium, pet-safe products and maintain the highest standards of cleanliness and care.',
  service1Badge: 'Most Popular',
  service1Pricing: 'Starting at $45',
  service1Timeline: '2-3 hours per session',
  service1CTA: 'Book Grooming',
  service1CTAHref: '/booking/grooming',
  service2Title: 'Pet Boarding & Daycare',
  service2Description: 'Safe, comfortable boarding with 24/7 care and supervision',
  service2LongDescription:
    "Our modern boarding facility provides a home-away-from-home experience for your pets. With spacious accommodations, regular exercise, and constant supervision, your pets will be happy and secure while you're away.",
  service2Pricing: 'Starting at $35/night',
  service2Timeline: 'Flexible stays available',
  service2CTA: 'Reserve Stay',
  service2CTAHref: '/booking/boarding',
  service3Title: 'Training & Behavior',
  service3Description: 'Professional training programs for puppies and adult dogs',
  service3LongDescription:
    'Our certified trainers offer comprehensive training programs including basic obedience, behavioral modification, and specialized training. We use positive reinforcement techniques to help your dog become a well-behaved family member.',
  service3Pricing: 'Starting at $80/session',
  service3Timeline: '4-8 week programs',
  service3CTA: 'Start Training',
  service3CTAHref: '/booking/training',
  service4Title: 'Wellness & Health Care',
  service4Description: 'Preventive care and health monitoring services',
  service4LongDescription:
    "Partner with us for your pet's ongoing health and wellness. We offer nail trimming, dental care, flea and tick prevention, and health monitoring to keep your pet in optimal condition between vet visits.",
  service4Badge: 'Essential',
  service4Pricing: 'Custom packages available',
  service4Timeline: 'Ongoing care plans',
  service4CTA: 'Learn More',
  service4CTAHref: '/services/wellness',
  bottomTitle: 'Need a Custom Care Plan?',
  bottomDescription:
    "Every pet is unique. Let us create a personalized care plan that meets your pet's specific needs and your family's schedule.",
  bottomCTA: 'Schedule Consultation',
  bottomCTAHref: '/consultation',
} as const;

type ServicesListDescriptionsProps = Partial<typeof DEFAULT_SERVICES_LIST_DESCRIPTIONS>;

export default function Services(props: ServicesListDescriptionsProps) {
  const config = { ...DEFAULT_SERVICES_LIST_DESCRIPTIONS, ...props };
  const navigate = useSmartNavigation();

  const services = [
    {
      id: 'grooming',
      title: config.service1Title,
      description: config.service1Description,
      longDescription: config.service1LongDescription,
      icon: Scissors,
      benefits: [
        'Full-service bathing and brushing',
        'Professional nail trimming and filing',
        'Ear cleaning and dental care',
        'Breed-specific styling and cuts',
      ],
      pricing: config.service1Pricing,
      timeline: config.service1Timeline,
      featured: true,
      badge: config.service1Badge,
      cta: config.service1CTA,
      ctaHref: config.service1CTAHref,
    },
    {
      id: 'boarding',
      title: config.service2Title,
      description: config.service2Description,
      longDescription: config.service2LongDescription,
      icon: Home,
      benefits: [
        'Climate-controlled indoor facilities',
        'Daily exercise and playtime',
        'Regular feeding and medication',
        '24/7 monitoring and care',
      ],
      pricing: config.service2Pricing,
      timeline: config.service2Timeline,
      featured: false,
      badge: null,
      cta: config.service2CTA,
      ctaHref: config.service2CTAHref,
    },
    {
      id: 'training',
      title: config.service3Title,
      description: config.service3Description,
      longDescription: config.service3LongDescription,
      icon: GraduationCap,
      benefits: [
        'Basic obedience and house training',
        'Behavioral modification programs',
        'Socialization and confidence building',
        'Advanced tricks and commands',
      ],
      pricing: config.service3Pricing,
      timeline: config.service3Timeline,
      featured: false,
      badge: null,
      cta: config.service3CTA,
      ctaHref: config.service3CTAHref,
    },
    {
      id: 'wellness',
      title: config.service4Title,
      description: config.service4Description,
      longDescription: config.service4LongDescription,
      icon: Heart,
      benefits: [
        'Regular health check-ups',
        'Preventive flea and tick treatment',
        'Dental hygiene maintenance',
        'Nutritional guidance and support',
      ],
      pricing: config.service4Pricing,
      timeline: config.service4Timeline,
      featured: false,
      badge: config.service4Badge,
      cta: config.service4CTA,
      ctaHref: config.service4CTAHref,
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <Badge
            variant="outline"
            className="mb-4 px-4 py-2 border-destructive/30 text-destructive"
          >
            <span data-editable="badge">{config.badge}</span>
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span data-editable="mainTitle">{config.mainTitle}</span>
            <span className="block bg-gradient-to-r from-destructive to-primary bg-clip-text text-transparent">
              <span data-editable="mainTitleHighlight">{config.mainTitleHighlight}</span>
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            <span data-editable="mainDescription">{config.mainDescription}</span>
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div key={service.id}>
                <div
                  className={`
                  group relative overflow-hidden rounded-2xl shadow-lg
                  ${
                    service.featured
                      ? 'border-2 border-destructive/20 bg-gradient-to-r from-destructive/5 via-primary/5 to-transparent p-8'
                      : 'border border-border/50 p-8 hover:border-destructive/20 hover:shadow-xl transition-all duration-300'
                  }
                `}
                >
                  {/* Service Content */}
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div
                        className={`
                        size-14 rounded-xl flex items-center justify-center shadow-lg
                        ${
                          service.featured
                            ? 'bg-gradient-to-r from-destructive to-primary text-primary-foreground'
                            : 'bg-destructive/10 text-destructive hover:bg-destructive/20 transition-colors'
                        }
                      `}
                      >
                        <Icon className="size-7" />
                      </div>
                    </div>

                    {/* Main Content */}
                    <div className="flex-grow space-y-4">
                      {/* Title and Badges */}
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-2xl font-semibold">
                          <span data-editable={`service${index + 1}Title`}>{service.title}</span>
                        </h3>
                        {service.badge && (
                          <Badge
                            variant={service.featured ? 'default' : 'secondary'}
                            className={
                              service.featured ? 'bg-destructive hover:bg-destructive/90' : ''
                            }
                          >
                            <span data-editable={`service${index + 1}Badge`}>{service.badge}</span>
                          </Badge>
                        )}
                        {service.featured && (
                          <div className="flex items-center gap-0.5">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="size-4 fill-yellow-500 text-yellow-500" />
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Descriptions */}
                      <p className="text-lg text-muted-foreground">
                        <span data-editable={`service${index + 1}Description`}>
                          {service.description}
                        </span>
                      </p>

                      {service.longDescription && (
                        <p className="text-muted-foreground">
                          <span data-editable={`service${index + 1}LongDescription`}>
                            {service.longDescription}
                          </span>
                        </p>
                      )}

                      {/* Benefits Grid */}
                      <div className="grid sm:grid-cols-2 gap-3 pt-2">
                        {service.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="size-5 text-destructive mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{benefit}</span>
                          </div>
                        ))}
                      </div>

                      {/* Pricing and Timeline */}
                      <div className="flex flex-wrap gap-6 pt-4">
                        {service.pricing && (
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-muted-foreground">Pricing:</span>
                            <span className="text-sm font-semibold text-destructive">
                              <span data-editable={`service${index + 1}Pricing`}>
                                {service.pricing}
                              </span>
                            </span>
                          </div>
                        )}
                        {service.timeline && (
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-muted-foreground">Timeline:</span>
                            <span className="text-sm font-semibold text-primary">
                              <span data-editable={`service${index + 1}Timeline`}>
                                {service.timeline}
                              </span>
                            </span>
                          </div>
                        )}
                      </div>

                      {/* CTA Button */}
                      <div className="pt-4">
                        <Button
                          variant={service.featured ? 'default' : 'outline'}
                          className={`group/btn shadow-lg ${service.featured ? 'bg-gradient-to-r from-destructive to-primary hover:from-destructive/90 hover:to-primary/90' : 'border-destructive/30 text-destructive hover:bg-destructive/10'}`}
                          onClick={() => navigate(service.ctaHref)}
                          data-editable-href={`service${index + 1}CTAHref`}
                          data-href={service.ctaHref}
                        >
                          <span data-editable={`service${index + 1}CTA`}>{service.cta}</span>
                          <ArrowRight className="ml-2 size-4 transition-transform group-hover/btn:translate-x-1" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Separator between items */}
                {index < services.length - 1 && <Separator className="my-8 opacity-30" />}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-muted/50 to-destructive/5 text-center border border-destructive/10 shadow-lg">
          <h3 className="text-2xl font-semibold mb-3">
            <span data-editable="bottomTitle">{config.bottomTitle}</span>
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            <span data-editable="bottomDescription">{config.bottomDescription}</span>
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-destructive to-primary hover:from-destructive/90 hover:to-primary/90 shadow-lg"
            onClick={() => navigate(config.bottomCTAHref)}
            data-editable-href="bottomCTAHref"
            data-href={config.bottomCTAHref}
          >
            <span data-editable="bottomCTA">{config.bottomCTA}</span>
            <ArrowRight className="ml-2 size-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
