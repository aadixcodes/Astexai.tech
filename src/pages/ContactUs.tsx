
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Header from '../components/Header';
import FinalCTA from '../components/FinalCTA';
import FAQ from '../components/FAQ';



interface ContactFormData {
  name: string;
  email: string;
  companyName: string;
  service: string;
  budget: string;
  projectDetails: string;
}

const ContactUs = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<ContactFormData>();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = (data: ContactFormData) => {
    console.log('Form submitted:', data);
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <section className="py-24 mt-10 bg-black dot-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-medium mb-4">Let's Talk</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              We're Here To Help
            </h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Our team is ready to support you with expert advice & solutions.
            </p>
          </div>

          <div className="bg-astex-gray/30 border border-white/10 rounded-2xl p-8 md:p-12 mb-12">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name" className="text-white mb-2 block">
                    Name <span className="text-primary">*</span>
                  </Label>
                  <Input
                    id="name"
                    placeholder="David Johnson"
                    className="bg-astex-gray/50 border-white/20 text-white placeholder:text-white/50"
                    {...register('name', { required: 'Name is required' })}
                  />
                  {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>}
                </div>

                <div>
                  <Label htmlFor="email" className="text-white mb-2 block">
                    Email <span className="text-primary">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="example@email.com"
                    className="bg-astex-gray/50 border-white/20 text-white placeholder:text-white/50"
                    {...register('email', { 
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address'
                      }
                    })}
                  />
                  {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>}
                </div>
              </div>

              <div>
                <Label htmlFor="companyName" className="text-white mb-2 block">
                  Company Name <span className="text-primary">*</span>
                </Label>
                <Input
                  id="companyName"
                  placeholder="Ex. StaticMania"
                  className="bg-astex-gray/50 border-white/20 text-white placeholder:text-white/50"
                  {...register('companyName', { required: 'Company name is required' })}
                />
                {errors.companyName && <p className="text-red-400 text-sm mt-1">{errors.companyName.message}</p>}
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="service" className="text-white mb-2 block">
                    Select Service <span className="text-primary">*</span>
                  </Label>
                  <select
                    id="service"
                    className="w-full h-10 px-3 py-2 bg-astex-gray/50 border border-white/20 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    {...register('service', { required: 'Please select a service' })}
                  >
                    <option value="" className="bg-astex-gray text-white/50">Select Your Service</option>
                    <option value="ai-agents" className="bg-astex-gray text-white">AI Agents</option>
                    <option value="web-development" className="bg-astex-gray text-white">Web Development</option>
                    <option value="app-development" className="bg-astex-gray text-white">App Development</option>
                    <option value="graphic-design" className="bg-astex-gray text-white">Graphic Design</option>
                    <option value="automation" className="bg-astex-gray text-white">Automation</option>
                  </select>
                  {errors.service && <p className="text-red-400 text-sm mt-1">{errors.service.message}</p>}
                </div>

                <div>
                  <Label htmlFor="budget" className="text-white mb-2 block">
                    Project Budget <span className="text-primary">*</span>
                  </Label>
                  <select
                    id="budget"
                    className="w-full h-10 px-3 py-2 bg-astex-gray/50 border border-white/20 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    {...register('budget', { required: 'Please select a budget range' })}
                  >
                    <option value="" className="bg-astex-gray text-white/50">Select Your Range</option>
                    <option value="5k-10k" className="bg-astex-gray text-white">$5K - $10K</option>
                    <option value="10k-25k" className="bg-astex-gray text-white">$10K - $25K</option>
                    <option value="25k-50k" className="bg-astex-gray text-white">$25K - $50K</option>
                    <option value="50k+" className="bg-astex-gray text-white">$50K+</option>
                  </select>
                  {errors.budget && <p className="text-red-400 text-sm mt-1">{errors.budget.message}</p>}
                </div>
              </div>

              <div>
                <Label htmlFor="projectDetails" className="text-white mb-2 block">
                  Project Details
                </Label>
                <Textarea
                  id="projectDetails"
                  placeholder="Tell us more about your project"
                  rows={5}
                  className="bg-astex-gray/50 border-white/20 text-white placeholder:text-white/50 resize-none"
                  {...register('projectDetails')}
                />
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <button
                className="relative w-[10rem] px-4 py-2 rounded-[7px] transition-all duration-200  mb-8 group overflow-hidden"
                style={{
                  border: "1px solid rgb(255, 177, 104)",
                  background:
                    "radial-gradient(50% 50% at 50% 100%, rgb(255, 177, 104) 0%, rgb(227, 109, 0) 100%)",
                }}
              >
                <div className="flex items-center justify-center gap-2">
                  <span className="text-white font-medium">Submit</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white transition-transform group-hover:translate-x-1"
                  >
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </div>

                {/* Optional hover overlay effect */}
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300"></div>
              </button>
                
                <p className="text-white/60 text-sm">
                  We will contact you within 24 business hours.
                </p>
              </div>
            </form>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7M3 7C3 5.89543 3.89543 5 5 5H19C20.1046 5 21 5.89543 21 7M3 7L12 13L21 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-2">Head Office</h3>
              <p className="text-white/70 text-sm">5899 Alexys Highway Suite</p>
              <p className="text-white/70 text-sm">678, NR, Nevada, USA</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 16.92V19.92C22 20.52 21.52 21.01 20.92 21.01C9.41 21.01 0 11.6 0 0.0799995C0 -0.520001 0.49 -1.01 1.08 -1.01H4.09C4.69 -1.01 5.18 -0.52 5.18 0.0799995C5.18 1.26 5.35 2.42 5.68 3.52C5.79 3.85 5.68 4.19 5.43 4.44L3.12 6.75C4.57 9.76 7.24 12.43 10.25 13.88L12.56 11.57C12.81 11.32 13.15 11.21 13.48 11.32C14.58 11.65 15.74 11.82 16.92 11.82C17.52 11.82 18.01 12.31 18.01 12.91V15.92C18.01 16.52 17.52 17.01 16.92 17.01C16.3 17.01 15.81 16.52 15.81 15.92V14.4C14.9 14.27 14.02 14.02 13.18 13.66L11.25 15.59C10.76 16.08 9.96 16.08 9.47 15.59C6.45 14.14 3.86 11.55 2.41 8.53C1.92 8.04 1.92 7.24 2.41 6.75L4.34 4.82C3.98 3.98 3.73 3.1 3.6 2.18H2.08C1.48 2.18 0.99 1.69 0.99 1.09V-1.92C0.99 -2.52 1.48 -3.01 2.08 -3.01H5.09C5.69 -3.01 6.18 -2.52 6.18 -1.92C6.18 -0.74 6.35 0.42 6.68 1.52C6.79 1.85 6.68 2.19 6.43 2.44L4.12 4.75C5.57 7.76 8.24 10.43 11.25 11.88L13.56 9.57C13.81 9.32 14.15 9.21 14.48 9.32C15.58 9.65 16.74 9.82 17.92 9.82C18.52 9.82 19.01 10.31 19.01 10.91V13.92C19.01 14.52 18.52 15.01 17.92 15.01H16.92Z" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-2">Phone</h3>
              <p className="text-white/70 text-sm">+1 234 567 890</p>
              <p className="text-white/70 text-sm">+1 234 567 890</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-2">Email</h3>
              <p className="text-white/70 text-sm">customer@automx.com</p>
              <p className="text-white/70 text-sm">client@automx.com</p>
            </div>
          </div>
        </div>
      </section>
      <FAQ />
      <FinalCTA />
    </div>
  );
};

export default ContactUs;
