'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  Heart,
} from 'lucide-react';

const DEFAULT_FOOTER = {
  logoText: 'PawPerfect',
  companyDescription:
    'Your trusted partner in pet care. We provide professional grooming, safe boarding, and expert training services to keep your furry friends happy and healthy. Serving pet families with love and care since 2020.',
  contactEmail: 'hello@pawperfect.com',
  contactPhone: '+1 (555) PAW-CARE',
  contactAddress: '123 Pet Care Lane, Happy Valley',
  newsletterTitle: 'Pet Care Tips',
  newsletterPlaceholder: 'Enter your email for tips',
  newsletterDisclaimer:
    'Get weekly pet care tips and special offers. No spam, unsubscribe anytime.',
  section1Title: 'Services',
  section2Title: 'Company',
  section3Title: 'Resources',
  section4Title: 'Legal',
  copyrightText: '© 2024 PawPerfect. All rights reserved.',
  madeWithText: 'with love for pets',
  socialText: 'Follow us:',
  social1Href: 'https://twitter.com/pawperfect',
  social2Href: 'https://facebook.com/pawperfect',
  social3Href: 'https://instagram.com/pawperfect',
  social4Href: 'https://linkedin.com/company/pawperfect',
  social5Href: 'https://youtube.com/pawperfect',
} as const;

type FooterProps = Partial<typeof DEFAULT_FOOTER>;

export default function Footer(props: FooterProps) {
  const config = { ...DEFAULT_FOOTER, ...props };

  // ✅ FIXED: Added editableId to all footer links
  const footerSections = [
    {
      title: config.section1Title,
      links: [
        { name: 'Dog Grooming', href: '/services/grooming', editableId: 'link-footer-grooming' },
        { name: 'Pet Boarding', href: '/services/boarding', editableId: 'link-footer-boarding' },
        { name: 'Dog Training', href: '/services/training', editableId: 'link-footer-training' },
        { name: 'Nail Trimming', href: '/services/nails', editableId: 'link-footer-nails' },
        { name: 'Pet Daycare', href: '/services/daycare', editableId: 'link-footer-daycare' },
        {
          name: 'Emergency Care',
          href: '/services/emergency',
          editableId: 'link-footer-emergency',
        },
      ],
    },
    {
      title: config.section2Title,
      links: [
        { name: 'About Us', href: '/about', editableId: 'link-footer-about' },
        { name: 'Our Team', href: '/team', editableId: 'link-footer-team' },
        { name: 'Careers', href: '/careers', editableId: 'link-footer-careers' },
        { name: 'Reviews', href: '/reviews', editableId: 'link-footer-reviews' },
        { name: 'News', href: '/news', editableId: 'link-footer-news' },
        { name: 'Contact', href: '/contact', editableId: 'link-footer-contact' },
      ],
    },
    {
      title: config.section3Title,
      links: [
        { name: 'Pet Care Guide', href: '/guide', editableId: 'link-footer-guide' },
        { name: 'FAQ', href: '/faq', editableId: 'link-footer-faq' },
        { name: 'Appointment Tips', href: '/tips', editableId: 'link-footer-tips' },
        { name: 'Pet Health', href: '/health', editableId: 'link-footer-health' },
        { name: 'Breed Info', href: '/breeds', editableId: 'link-footer-breeds' },
        { name: 'Support', href: '/support', editableId: 'link-footer-support' },
      ],
    },
    {
      title: config.section4Title,
      links: [
        { name: 'Privacy Policy', href: '/privacy', editableId: 'link-footer-privacy' },
        { name: 'Terms of Service', href: '/terms', editableId: 'link-footer-terms' },
        {
          name: 'Cancellation Policy',
          href: '/cancellation',
          editableId: 'link-footer-cancellation',
        },
        { name: 'Pet Safety', href: '/safety', editableId: 'link-footer-safety' },
        { name: 'Insurance', href: '/insurance', editableId: 'link-footer-insurance' },
        { name: 'Liability', href: '/liability', editableId: 'link-footer-liability' },
      ],
    },
  ];

  const socialLinks = [
    { name: 'Twitter', icon: Twitter, href: config.social1Href },
    { name: 'Facebook', icon: Facebook, href: config.social2Href },
    { name: 'Instagram', icon: Instagram, href: config.social3Href },
    { name: 'LinkedIn', icon: Linkedin, href: config.social4Href },
    { name: 'YouTube', icon: Youtube, href: config.social5Href },
  ];

  // ✅ FIXED: Added editableId to bottom bar links
  const bottomLinks = [
    { name: 'Sitemap', href: '/sitemap', editableId: 'link-footer-sitemap' },
    { name: 'Accessibility', href: '/accessibility', editableId: 'link-footer-accessibility' },
    { name: 'Pet Portal', href: '/portal', editableId: 'link-footer-portal' },
    { name: 'Emergency Line', href: '/emergency', editableId: 'link-footer-emergency-line' },
  ];

  return (
    <footer id="footer" className="bg-card border-t border-border/50">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <div className="size-10 rounded-lg bg-gradient-to-br from-primary to-destructive flex items-center justify-center shadow-md">
                  <span className="text-primary-foreground font-bold">
                    {config.logoText.charAt(0)}
                  </span>
                </div>
                <span className="font-bold text-xl" data-editable="logoText">
                  {config.logoText}
                </span>
              </Link>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                <span data-editable="companyDescription">{config.companyDescription}</span>
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground" data-editable="contactEmail">
                  {config.contactEmail}
                </span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground" data-editable="contactPhone">
                  {config.contactPhone}
                </span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground" data-editable="contactAddress">
                  {config.contactAddress}
                </span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-3">
              <h4 className="font-semibold text-sm" data-editable="newsletterTitle">
                {config.newsletterTitle}
              </h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder={config.newsletterPlaceholder}
                  className="flex-1 px-3 py-2 text-sm border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
                <Button
                  size="sm"
                  className="px-3 bg-gradient-to-r from-primary to-destructive hover:from-primary/90 hover:to-destructive/90"
                >
                  <ArrowRight className="size-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                <span data-editable="newsletterDisclaimer">{config.newsletterDisclaimer}</span>
              </p>
            </div>
          </div>

          {/* Footer Links */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h4
                  className="font-semibold text-sm text-foreground"
                  data-editable={`section${index + 1}Title`}
                >
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        data-editable-href={link.editableId}
                        data-original-href={link.href}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/50 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span data-editable="copyrightText">{config.copyrightText}</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline flex items-center gap-1">
                Made <Heart className="size-3 text-destructive fill-current" />
                <span data-editable="madeWithText">{config.madeWithText}</span>
              </span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground mr-2" data-editable="socialText">
                {config.socialText}
              </span>
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={index}
                    href={social.href}
                    aria-label={social.name}
                    className="size-8 rounded-md bg-muted hover:bg-primary/20 flex items-center justify-center transition-colors duration-200 group"
                    data-editable-href={`social${index + 1}Href`}
                    data-original-href={social.href}
                  >
                    <Icon className="size-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Additional Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-4 pt-4 border-t border-border/30">
            {bottomLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                data-editable-href={link.editableId}
                data-original-href={link.href}
                className="text-xs text-muted-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
