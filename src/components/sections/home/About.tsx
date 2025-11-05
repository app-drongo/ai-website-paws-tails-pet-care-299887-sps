'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Heart,
  Users,
  Award,
  Star,
  ArrowRight,
  Quote,
  Shield,
  Clock,
  Scissors,
  PawPrint,
} from 'lucide-react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_ABOUT = {
  badge: 'About PawPerfect',
  mainTitle: 'Caring for Your',
  mainTitleHighlight: 'Furry Family',
  mainDescription:
    "We're a passionate team of certified pet care professionals dedicated to providing the highest quality grooming, boarding, and training services for your beloved companions.",
  storyTitle: 'Our Story',
  storyParagraph1:
    'Founded in 2018 by lifelong animal lovers, we started PawPerfect because we saw a need for truly compassionate, professional pet care in our community.',
  storyParagraph2:
    'After years of working with pets and their families, we knew there had to be a place where every dog could receive the love, attention, and expert care they deserve.',
  storyParagraph3:
    "Today, we're proud to serve over 2,500 happy pets and their families, providing comprehensive care that keeps tails wagging and hearts full.",
  storyCTA: 'Read Our Full Story',
  storyCTAHref: '/about/story',
  quoteText:
    'Every pet deserves to be treated like family, with love, respect, and professional care.',
  quoteAuthor: 'Sarah Martinez, Founder & Head Groomer',
  stat1Value: '2018',
  stat1Label: 'Founded',
  stat2Value: '2.5K+',
  stat2Label: 'Happy Pets',
  stat3Value: '100%',
  stat3Label: 'Satisfaction',
  stat4Value: '15+',
  stat4Label: 'Years Experience',
  valuesTitle: 'Our Values',
  valuesDescription:
    'The principles that guide our care for every pet that walks through our doors.',
  value1Title: 'Compassionate Care',
  value1Description:
    "We treat every pet with the same love and attention we'd give our own, ensuring comfort and safety in all our services.",
  value2Title: 'Professional Excellence',
  value2Description:
    'Our certified groomers and trainers stay current with the latest techniques and safety standards in pet care.',
  value3Title: 'Family Focused',
  value3Description:
    "We understand pets are family members, and we work closely with you to meet your pet's unique needs and preferences.",
  value4Title: 'Trust & Safety',
  value4Description:
    "Your pet's wellbeing is our top priority, with secure facilities and proven safety protocols for every service.",
  teamTitle: 'Meet Our Team',
  teamDescription:
    'Certified professionals who share a genuine love for animals and commitment to exceptional pet care.',
  team1Name: 'Sarah Martinez',
  team1Role: 'Founder & Head Groomer',
  team1Bio:
    'Certified Master Groomer with 15+ years experience. Specializes in breed-specific cuts.',
  team2Name: 'Mike Thompson',
  team2Role: 'Senior Dog Trainer',
  team2Bio: 'Certified canine behaviorist. Expert in positive reinforcement training methods.',
  team3Name: 'Lisa Chen',
  team3Role: 'Boarding Manager',
  team3Bio: 'Veterinary technician background. Ensures safe, comfortable overnight stays.',
  team4Name: 'Alex Rivera',
  team4Role: 'Grooming Specialist',
  team4Bio: 'Creative groomer specializing in show cuts and therapeutic spa treatments.',
  teamCTA: 'Meet All Our Staff',
  teamCTAHref: '/team',
  testimonialQuote:
    'PawPerfect has been a blessing for our family. Our Golden Retriever Max always comes home looking amazing and so happy. The staff truly cares about each pet.',
  testimonialAuthorName: 'Jennifer Walsh',
  testimonialAuthorTitle: 'Pet Parent, Golden Retriever Owner',
} as const;

type AboutProps = Partial<typeof DEFAULT_ABOUT>;

export default function About(props: AboutProps) {
  const config = { ...DEFAULT_ABOUT, ...props };
  const navigate = useSmartNavigation();

  const values = [
    {
      icon: Heart,
      title: config.value1Title,
      description: config.value1Description,
    },
    {
      icon: Award,
      title: config.value2Title,
      description: config.value2Description,
    },
    {
      icon: Users,
      title: config.value3Title,
      description: config.value3Description,
    },
    {
      icon: Shield,
      title: config.value4Title,
      description: config.value4Description,
    },
  ];

  const stats = [
    { value: config.stat1Value, label: config.stat1Label, icon: Award },
    { value: config.stat2Value, label: config.stat2Label, icon: PawPrint },
    { value: config.stat3Value, label: config.stat3Label, icon: Star },
    { value: config.stat4Value, label: config.stat4Label, icon: Clock },
  ];

  const team = [
    {
      name: config.team1Name,
      role: config.team1Role,
      image: config.team1Name
        .split(' ')
        .map(n => n[0])
        .join(''),
      bio: config.team1Bio,
    },
    {
      name: config.team2Name,
      role: config.team2Role,
      image: config.team2Name
        .split(' ')
        .map(n => n[0])
        .join(''),
      bio: config.team2Bio,
    },
    {
      name: config.team3Name,
      role: config.team3Role,
      image: config.team3Name
        .split(' ')
        .map(n => n[0])
        .join(''),
      bio: config.team3Bio,
    },
    {
      name: config.team4Name,
      role: config.team4Role,
      image: config.team4Name
        .split(' ')
        .map(n => n[0])
        .join(''),
      bio: config.team4Bio,
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background via-muted/10 to-destructive/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge
            variant="outline"
            className="mb-4 px-4 py-2 border-destructive/30 text-destructive"
          >
            <PawPrint className="size-3 mr-2" />
            <span data-editable="badge">{config.badge}</span>
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span data-editable="mainTitle">{config.mainTitle}</span>
            <span className="block bg-gradient-to-r from-destructive via-primary to-destructive/80 bg-clip-text text-transparent">
              <span data-editable="mainTitleHighlight">{config.mainTitleHighlight}</span>
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            <span data-editable="mainDescription">{config.mainDescription}</span>
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">
              <span data-editable="storyTitle">{config.storyTitle}</span>
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p data-editable="storyParagraph1">{config.storyParagraph1}</p>
              <p data-editable="storyParagraph2">{config.storyParagraph2}</p>
              <p data-editable="storyParagraph3">{config.storyParagraph3}</p>
            </div>
            <Button
              className="group bg-gradient-to-r from-destructive to-primary hover:from-destructive/90 hover:to-primary/90 shadow-lg"
              onClick={() => navigate(config.storyCTAHref)}
              data-editable-href="storyCTAHref"
              data-href={config.storyCTAHref}
            >
              <span data-editable="storyCTA">{config.storyCTA}</span>
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          <div className="relative">
            <Card className="border-destructive/20 overflow-hidden shadow-xl">
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-destructive/10 via-background to-primary/10 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="size-16 mx-auto rounded-full bg-gradient-to-br from-destructive/20 to-primary/20 flex items-center justify-center">
                      <Quote className="size-8 text-destructive" />
                    </div>
                    <blockquote className="text-lg font-medium max-w-sm">
                      <span data-editable="quoteText">{config.quoteText}</span>
                    </blockquote>
                    <cite className="text-sm text-muted-foreground">
                      - <span data-editable="quoteAuthor">{config.quoteAuthor}</span>
                    </cite>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card
                key={index}
                className="text-center border-destructive/20 hover:border-destructive/40 transition-all duration-300 hover:shadow-lg"
              >
                <CardContent className="p-6">
                  <div className="size-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-destructive/10 to-primary/10 flex items-center justify-center">
                    <Icon className="size-6 text-destructive" />
                  </div>
                  <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-destructive to-primary bg-clip-text text-transparent">
                    <span data-editable={`stat${index + 1}Value`}>{stat.value}</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <span data-editable={`stat${index + 1}Label`}>{stat.label}</span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Values */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-bold mb-4">
              <span data-editable="valuesTitle">{config.valuesTitle}</span>
            </h3>
            <p className="text-muted-foreground">
              <span data-editable="valuesDescription">{config.valuesDescription}</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card
                  key={index}
                  className="border-destructive/20 hover:border-destructive/40 transition-all duration-300 group hover:shadow-lg"
                >
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="size-12 rounded-xl bg-gradient-to-br from-destructive/10 to-primary/10 flex items-center justify-center group-hover:from-destructive/20 group-hover:to-primary/20 transition-colors">
                        <Icon className="size-6 text-destructive" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold mb-3">
                          <span data-editable={`value${index + 1}Title`}>{value.title}</span>
                        </h4>
                        <p className="text-muted-foreground leading-relaxed">
                          <span data-editable={`value${index + 1}Description`}>
                            {value.description}
                          </span>
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Team */}
        <div className="text-center">
          <div className="max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-bold mb-4">
              <span data-editable="teamTitle">{config.teamTitle}</span>
            </h3>
            <p className="text-muted-foreground">
              <span data-editable="teamDescription">{config.teamDescription}</span>
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {team.map((member, index) => {
              return (
                <Card
                  key={index}
                  className="border-destructive/20 hover:border-destructive/40 transition-all duration-300 group hover:shadow-lg"
                >
                  <CardContent className="p-6 text-center">
                    <div className="size-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-destructive to-primary flex items-center justify-center text-primary-foreground font-bold text-xl shadow-lg">
                      {member.image}
                    </div>
                    <h4 className="font-semibold mb-1">
                      <span data-editable={`team${index + 1}Name`}>{member.name}</span>
                    </h4>
                    <p className="text-sm text-destructive mb-3 font-medium">
                      <span data-editable={`team${index + 1}Role`}>{member.role}</span>
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      <span data-editable={`team${index + 1}Bio`}>{member.bio}</span>
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="flex justify-center">
            <Button
              variant="outline"
              className="group border-destructive/30 text-destructive hover:bg-destructive hover:text-primary-foreground"
              onClick={() => navigate(config.teamCTAHref)}
              data-editable-href="teamCTAHref"
              data-href={config.teamCTAHref}
            >
              <span data-editable="teamCTA">{config.teamCTA}</span>
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-20">
          <Card className="border-destructive/20 bg-gradient-to-br from-destructive/5 via-background to-primary/5 shadow-xl">
            <CardContent className="p-8 lg:p-12 text-center">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-5 text-destructive fill-current" />
                ))}
              </div>
              <blockquote className="text-xl lg:text-2xl font-medium mb-6 max-w-3xl mx-auto">
                <span data-editable="testimonialQuote">{config.testimonialQuote}</span>
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div className="size-12 rounded-full bg-gradient-to-br from-destructive to-primary flex items-center justify-center text-primary-foreground font-bold">
                  {config.testimonialAuthorName
                    .split(' ')
                    .map(n => n[0])
                    .join('')}
                </div>
                <div className="text-left">
                  <div className="font-semibold">
                    <span data-editable="testimonialAuthorName">
                      {config.testimonialAuthorName}
                    </span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <span data-editable="testimonialAuthorTitle">
                      {config.testimonialAuthorTitle}
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
