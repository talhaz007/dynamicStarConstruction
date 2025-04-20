"use client"

import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Mail, MapPin, Phone, MessageCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Navbar } from "@/components/navbar"
import { ServiceCard } from "@/components/service-card"
import { TestimonialSlider } from "@/components/testimonial-slider"
import { AnimatedSection } from "@/components/animated-section"
import { ServicesSection } from "@/components/services-section"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <Navbar />

      {/* WhatsApp Button */}
      <a 
        href="https://wa.me/19296017847" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-transform hover:scale-110 hover:bg-green-600"
        aria-label="Chat on WhatsApp"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="28" 
          height="28" 
          viewBox="0 0 24 24" 
          fill="currentColor"
          className="h-7 w-7"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>

      {/* Call Button */}
      <a 
        href="tel:+19296017847" 
        className="fixed bottom-6 right-24 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-blue-500 text-white shadow-lg transition-transform hover:scale-110 hover:bg-blue-600"
        aria-label="Call us"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="h-7 w-7"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      </a>

{/* Hero Section */}
<section id="home" className="relative bg-white">
  <div className="absolute inset-0 z-0 bg-steel-900/95 md:bg-steel-900/95">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(132,204,22,0.1),transparent_50%)]"></div>
    {/* Mobile background image - Only visible on mobile */}
    <div 
      className="absolute inset-0 md:hidden" 
      style={{
        backgroundImage: "url('/images/renovation-in-progress-1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: 0.7,
        mixBlendMode: "overlay"
      }}
    ></div>
  </div>

  <div className="container relative z-10 flex min-h-[90vh] items-center px-4 py-20">
    <div className="grid items-center gap-16 md:grid-cols-2 lg:grid-cols-2 w-full max-w-7xl mx-auto">
      <div className="max-w-xl">
        <div className="mb-6 inline-flex items-center rounded-full bg-lime-500/20 px-4 py-2 backdrop-blur-sm">
          <span className="mr-2 h-2 w-2 rounded-full bg-lime-400"></span>
          <span className="text-sm font-medium text-white">Transform Your Home</span>
        </div>

        <h1 className="font-display text-5xl font-bold leading-tight tracking-tight text-white md:text-6xl lg:text-7xl">
          We Build <span className="text-lime-400">Beautiful</span> Exteriors
        </h1>

        <p className="mt-6 text-xl leading-relaxed text-gray-300">
          Professional renovation services that transform your property with expert craftsmanship and premium
          materials.
        </p>

        <div className="mt-10 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
          <Link href="#contact">
            <Button size="lg" className="h-14 rounded-md bg-lime-500 px-8 text-base hover:bg-lime-600">
              Get a Free Estimate
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Link href="#services">
            <Button
              variant="outline"
              size="lg"
              className="h-14 rounded-md border-white/20 bg-transparent px-8 text-base text-white hover:bg-white/10"
            >
              View Our Work
            </Button>
          </Link>
        </div>

        <div className="mt-12 flex items-center space-x-8">
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-white">20+</span>
            <span className="text-sm text-gray-400">Years Experience</span>
          </div>
          <div className="h-12 w-px bg-gray-700"></div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-white">1500+</span>
            <span className="text-sm text-gray-400">Projects Completed</span>
          </div>
          <div className="h-12 w-px bg-gray-700"></div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-white">100%</span>
            <span className="text-sm text-gray-400">Satisfaction</span>
          </div>
        </div>
      </div>

      <div className="relative hidden md:block">
        <div className="relative h-[450px] w-full overflow-hidden rounded-2xl">
          <Image
            src="/images/renovation-in-progress-1.jpg"
            alt="Renovation in progress"
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute bottom-4 left-4 rounded-full bg-steel-800/80 px-3 py-1 text-sm font-medium text-white backdrop-blur-sm">
            During Renovation
          </div>
        </div>

        <div className="absolute -bottom-6 -left-6 w-64 rounded-lg bg-white p-4 shadow-xl">
          <div className="flex items-center space-x-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-lime-100">
              <svg className="h-6 w-6 text-lime-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <div className="text-sm font-medium text-steel-600">Trusted by</div>
              <div className="text-xl font-bold text-steel-900">1,500+ Homeowners</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent"></div>
</section>

      {/* Services Section */}
      <AnimatedSection id="services" className="py-24">
        <div className="container px-4">
          <div className="mb-16 text-center">
            <div className="mb-3 inline-flex items-center justify-center rounded-full bg-lime-100 px-3 py-1 text-sm font-medium text-lime-600">
              Our Services
            </div>
            <h2 className="mb-6 font-display text-4xl font-bold tracking-tight text-steel-900 md:text-5xl">
              Comprehensive Exterior Solutions
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-steel-600">
              We provide premium exterior home improvement services with quality materials and expert installation to
              protect and beautify your home.
            </p>
          </div>

          <ServicesSection />
        </div>
      </AnimatedSection>

      {/* About Us Section */}
      <AnimatedSection id="about" className="py-24 bg-white overflow-hidden">
        <div className="container px-4">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-16 md:grid-cols-2">
              <div className="flex items-center">
                <div className="relative mx-auto md:mx-0">
                  <div className="absolute -left-5 -top-5 h-24 w-24 rounded-lg bg-lime-400/20"></div>
                  <div className="absolute -bottom-5 -right-5 h-24 w-24 rounded-lg bg-steel-600/10"></div>
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                    <Image
                      src="/images/pic4.png"
                      alt="Our team at work"
                      width={600}
                      height={450}
                      className="w-full object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <div className="mb-3 inline-flex items-center rounded-full bg-lime-100 px-3 py-1 text-sm font-medium text-lime-600 md:justify-start">
                  About Us
                </div>
                <h2 className="mb-6 font-display text-4xl font-bold tracking-tight text-steel-900 md:text-5xl">
                  Elevating Home Exteriors Since 2003
                </h2>
                <p className="mb-6 text-lg text-steel-600">
                  With over 20 years of experience in exterior home improvements, our licensed and insured team has
                  built a reputation for quality craftsmanship and exceptional customer service.
                </p>
                <p className="mb-8 text-lg text-steel-600">
                  We take pride in our work and stand behind every project with industry-leading warranties. Our
                  customer-first approach means we listen to your needs and deliver solutions that exceed your
                  expectations.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <Card className="overflow-hidden border-none bg-gradient-to-br from-white to-gray-50 shadow-lg transition-all duration-300 hover:shadow-xl">
                    <CardContent className="flex flex-col items-center p-6">
                      <span className="mb-2 font-display text-4xl font-bold text-lime-500">20+</span>
                      <span className="text-center text-sm font-medium text-steel-700">Years Experience</span>
                    </CardContent>
                  </Card>
                  <Card className="overflow-hidden border-none bg-gradient-to-br from-white to-gray-50 shadow-lg transition-all duration-300 hover:shadow-xl">
                    <CardContent className="flex flex-col items-center p-6">
                      <span className="mb-2 font-display text-4xl font-bold text-lime-500">1,500+</span>
                      <span className="text-center text-sm font-medium text-steel-700">Projects Completed</span>
                    </CardContent>
                  </Card>
                  <Card className="overflow-hidden border-none bg-gradient-to-br from-white to-gray-50 shadow-lg transition-all duration-300 hover:shadow-xl">
                    <CardContent className="flex flex-col items-center p-6">
                      <span className="mb-2 font-display text-4xl font-bold text-lime-500">100%</span>
                      <span className="text-center text-sm font-medium text-steel-700">Licensed & Insured</span>
                    </CardContent>
                  </Card>
                  <Card className="overflow-hidden border-none bg-gradient-to-br from-white to-gray-50 shadow-lg transition-all duration-300 hover:shadow-xl">
                    <CardContent className="flex flex-col items-center p-6">
                      <span className="mb-2 font-display text-4xl font-bold text-lime-500">5-Star</span>
                      <span className="text-center text-sm font-medium text-steel-700">Customer Rating</span>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Testimonials Section */}
      <AnimatedSection id="testimonials" className="bg-steel-900 py-24 text-white">
        <div className="container px-4">
          <div className="mb-16 text-center">
            <div className="mb-3 inline-flex items-center justify-center rounded-full bg-lime-400/20 px-3 py-1 text-sm font-medium text-lime-300">
              Testimonials
            </div>
            <h2 className="mb-6 font-display text-4xl font-bold tracking-tight text-white md:text-5xl">
              What Our Clients Say
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-300">
              Don't just take our word for it. Here's what our satisfied customers have to say about our work.
            </p>
          </div>

          <div className="mx-auto max-w-5xl">
            <TestimonialSlider />
          </div>
        </div>
      </AnimatedSection>

      {/* Contact Section */}
      <AnimatedSection id="contact" className="bg-white py-24">
        <div className="container px-4">
          <div className="mx-auto max-w-6xl">
            <div className="mb-16 text-center">
              <div className="mb-3 inline-flex items-center justify-center rounded-full bg-lime-100 px-3 py-1 text-sm font-medium text-lime-600">
                Get In Touch
              </div>
              <h2 className="mb-6 font-display text-4xl font-bold tracking-tight text-steel-900 md:text-5xl">
                Ready to Transform Your Home?
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-steel-600">
                Contact our team for a free consultation and estimate. We're here to bring your vision to life.
              </p>
            </div>

            <div className="grid gap-12 md:grid-cols-2">
              <Card className="overflow-hidden border-none bg-white shadow-xl">
                <CardHeader>
                  <CardTitle className="font-display text-2xl text-steel-900">Send Us a Message</CardTitle>
                  <CardDescription className="text-steel-600">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form 
                    className="space-y-5" 
                    onSubmit={async (e) => {
                      e.preventDefault();
                      const form = e.currentTarget;
                      const submitBtn = form.querySelector('button[type="submit"]') as HTMLButtonElement;
                      const formData = new FormData(form);
                      
                      // Disable button and show loading state
                      if (submitBtn) {
                        submitBtn.disabled = true;
                        submitBtn.innerText = 'Sending...';
                      }
                      
                      try {
                        const response = await fetch('/api/contact', {
                          method: 'POST',
                          body: formData,
                        });
                        
                        const data = await response.json();
                        
                        if (data.success) {
                          // Show success message
                          alert('Thank you for your message! We will get back to you soon.');
                          form.reset();
                        } else {
                          // Show error message
                          alert(data.message || 'There was an error submitting your form. Please try again.');
                        }
                      } catch (error) {
                        console.error('Error submitting form:', error);
                        alert('There was an error submitting your form. Please try again.');
                      } finally {
                        // Reset button state
                        if (submitBtn) {
                          submitBtn.disabled = false;
                          submitBtn.innerText = 'Submit Request';
                        }
                      }
                    }}
                  >
                    <div className="grid gap-5 md:grid-cols-2">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-steel-700">
                          Name
                        </label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Your name"
                          required
                          className="border-gray-200 bg-gray-50 focus:border-lime-500 focus:ring-lime-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium text-steel-700">
                          Phone
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          placeholder="Your phone number"
                          required
                          className="border-gray-200 bg-gray-50 focus:border-lime-500 focus:ring-lime-500"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-steel-700">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Your email address"
                        required
                        className="border-gray-200 bg-gray-50 focus:border-lime-500 focus:ring-lime-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="address" className="text-sm font-medium text-steel-700">
                        Address
                      </label>
                      <Input
                        id="address"
                        name="address"
                        placeholder="Your address"
                        className="border-gray-200 bg-gray-50 focus:border-lime-500 focus:ring-lime-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-steel-700">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us about your project"
                        rows={4}
                        required
                        className="border-gray-200 bg-gray-50 focus:border-lime-500 focus:ring-lime-500"
                      />
                    </div>
                    <Button type="submit" className="w-full bg-lime-500 text-white hover:bg-lime-600">Submit Request</Button>
                  </form>
                </CardContent>
              </Card>

              <div className="flex flex-col justify-center space-y-10">
                <div className="rounded-2xl bg-gray-50 p-8 shadow-lg">
                  <h3 className="mb-6 font-display text-xl font-semibold text-steel-900">Our Location</h3>
                  <div className="flex items-start space-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-lime-100">
                      <MapPin className="h-6 w-6 text-lime-600" />
                    </div>
                    <div>
                      <p className="font-medium text-steel-900">Dynamic Star Construction</p>
                      <p className="text-steel-600">2939 Avenue Y</p>
                      <p className="text-steel-600">Brooklyn, NY 11235</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl bg-gray-50 p-8 shadow-lg">
                  <h3 className="mb-6 font-display text-xl font-semibold text-steel-900">Contact Information</h3>
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-lime-100">
                        <Phone className="h-6 w-6 text-lime-600" />
                      </div>
                      <div>
                        <p className="font-medium text-steel-900">Phone</p>
                        <p className="text-steel-600"><a href="tel:+17185020444" className="hover:text-lime-600 transition-colors">+1-718-502-0444</a></p>
                        <p className="text-steel-600"><a href="tel:+19296017847" className="hover:text-lime-600 transition-colors">+1-929-601-7847</a></p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-lime-100">
                        <Mail className="h-6 w-6 text-lime-600" />
                      </div>
                      <div>
                        <p className="font-medium text-steel-900">Email</p>
                        <p className="text-steel-600"><a href="mailto:Dynamicstarcons@gmail.com" className="hover:text-lime-600 transition-colors">Dynamicstarcons@gmail.com</a></p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl bg-gray-50 p-8 shadow-lg">
                  <h3 className="mb-6 font-display text-xl font-semibold text-steel-900">Business Hours</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-steel-600">Monday - Friday</span>
                      <span className="font-medium text-steel-900">8:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-steel-600">Saturday</span>
                      <span className="font-medium text-steel-900">9:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-steel-600">Sunday</span>
                      <span className="font-medium text-steel-900">Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Footer */}
      <footer className="bg-steel-900 py-16 text-white">
        <div className="container px-4">
          <div className="mb-12 flex flex-col items-center justify-between gap-6 border-b border-gray-700 pb-10 md:flex-row">
            <div className="flex items-center">
              <div className="relative h-16 w-48 mr-3">
                <Image 
                  src="/images/logo.png" 
                  alt="DS Construction Logo" 
                  fill
                  className="object-cover"
                />
              </div>
              <span className="font-display text-2xl font-bold">Dynamic Star Construction</span>
            </div>
            
            <div className="flex space-x-4">
              {/* Facebook link hidden
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-700 transition-colors hover:bg-lime-500">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                </svg>
              </a>
              */}
              {/* Twitter link hidden
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-700 transition-colors hover:bg-lime-500">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
              */}
              <a href="https://www.instagram.com/dynamicstarcons?igsh=b2xtZG9kZDB0czI=" className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-700 transition-colors hover:bg-lime-500">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                </svg>
              </a>
              {/* YouTube link hidden
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-700 transition-colors hover:bg-lime-500">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                </svg>
              </a>
              */}
            </div>
          </div>
          
          <div className="grid gap-10 md:grid-cols-4">
            <div>
              <h3 className="mb-6 font-display text-xl font-semibold text-white">About Us</h3>
              <p className="text-gray-300">
                Transforming homes with quality craftsmanship and exceptional service since 2003. Licensed, insured, and dedicated to excellence.
              </p>
              <div className="mt-6 flex items-center space-x-3">
                <Phone className="h-5 w-5 text-lime-400" />
                <a href="tel:+17185020444" className="text-gray-300 hover:text-lime-400 transition-colors">+1-718-502-0444</a>
              </div>
              <div className="mt-6 flex items-center space-x-3">
                <Phone className="h-5 w-5 text-lime-400" />
                <a href="tel:+19296017847" className="text-gray-300 hover:text-lime-400 transition-colors">+1-929-601-7847</a>
              </div>
              <div className="mt-3 flex items-center space-x-3">
                <Mail className="h-5 w-5 text-lime-400" />
                <a href="mailto:Dynamicstarcons@gmail.com" className="text-gray-300 hover:text-lime-400 transition-colors">Dynamicstarcons@gmail.com</a>
              </div>
            </div>
            
            <div>
              <h3 className="mb-6 font-display text-xl font-semibold text-white">Our Services</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="flex items-center text-gray-300 transition-colors hover:text-lime-400">
                    <ChevronRight className="mr-2 h-4 w-4 text-lime-400" />
                    Siding Installation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="flex items-center text-gray-300 transition-colors hover:text-lime-400">
                    <ChevronRight className="mr-2 h-4 w-4 text-lime-400" />
                    Roofing & Gutters
                  </Link>
                </li>
                <li>
                  <Link href="#" className="flex items-center text-gray-300 transition-colors hover:text-lime-400">
                    <ChevronRight className="mr-2 h-4 w-4 text-lime-400" />
                    Window Replacement
                  </Link>
                </li>
                <li>
                  <Link href="#" className="flex items-center text-gray-300 transition-colors hover:text-lime-400">
                    <ChevronRight className="mr-2 h-4 w-4 text-lime-400" />
                    Brickwork & Masonry
                  </Link>
                </li>
                <li>
                  <Link href="#" className="flex items-center text-gray-300 transition-colors hover:text-lime-400">
                    <ChevronRight className="mr-2 h-4 w-4 text-lime-400" />
                    Exterior Painting
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="mb-6 font-display text-xl font-semibold text-white">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#home" className="flex items-center text-gray-300 transition-colors hover:text-lime-400">
                    <ChevronRight className="mr-2 h-4 w-4 text-lime-400" />
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="flex items-center text-gray-300 transition-colors hover:text-lime-400">
                    <ChevronRight className="mr-2 h-4 w-4 text-lime-400" />
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="flex items-center text-gray-300 transition-colors hover:text-lime-400">
                    <ChevronRight className="mr-2 h-4 w-4 text-lime-400" />
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#testimonials" className="flex items-center text-gray-300 transition-colors hover:text-lime-400">
                    <ChevronRight className="mr-2 h-4 w-4 text-lime-400" />
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="flex items-center text-gray-300 transition-colors hover:text-lime-400">
                    <ChevronRight className="mr-2 h-4 w-4 text-lime-400" />
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="mb-6 font-display text-xl font-semibold text-white">Service Areas</h3>
              <p className="mb-4 text-gray-300">
                Proudly serving Hometown and surrounding areas:
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-gray-700 px-3 py-1 text-sm text-gray-300">Hometown</span>
                <span className="rounded-full bg-gray-700 px-3 py-1 text-sm text-gray-300">Springfield</span>
                <span className="rounded-full bg-gray-700 px-3 py-1 text-sm text-gray-300">Riverdale</span>
                <span className="rounded-full bg-gray-700 px-3 py-1 text-sm text-gray-300">Oakwood</span>
                <span className="rounded-full bg-gray-700 px-3 py-1 text-sm text-gray-300">Pine Hills</span>
                <span className="rounded-full bg-gray-700 px-3 py-1 text-sm text-gray-300">Westview</span>
              </div>
            </div>
          </div>
          
          <div className="mt-16 border-t border-gray-700 pt-8">
            <div className="flex flex-col items-center justify-between gap-4 text-sm text-gray-400 md:flex-row">
              <p>© {new Date().getFullYear()} Dynamic Star Construction. All rights reserved.</p>
              <div className="flex space-x-6">
                <Link href="#" className="hover:text-lime-400">Privacy Policy</Link>
                <Link href="#" className="hover:text-lime-400">Terms of Service</Link>
                <Link href="#" className="hover:text-lime-400">Sitemap</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
