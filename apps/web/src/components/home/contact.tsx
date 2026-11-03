import { ArrowUpRight, CheckCircle2, MapPin, Phone } from 'lucide-react';
import { useFormSubmission } from '@/hooks/use-form-submission';
import { submitWeb3Form } from '@/lib/web3forms';

export function Contact() {
  const form = useFormSubmission({
    submit: (values) =>
      submitWeb3Form(values, { subject: 'New supply enquiry — Al Daqa Al Mustadama for Foodstuff Importation' }),
  });
  return <section id="contact" className="contact-section section-rail">
    <div className="contact-intro">
      <p className="eyebrow dark-eyebrow">03 / CONTACT & ENQUIRIES</p>
      <h2>LET’S TALK<br/><span>SUPPLY.</span></h2>
      <p className="serif-lead">Your requirements.<br/>Our starting point.</p>
      <p>Al Daqa Al Mustadama for Foodstuff Importation is a company specializing in the import and supply of food products and livestock . Send an enquiry and tell us how we can help.</p>
      <div className="contact-detail"><MapPin size={24} strokeWidth={1.4}/><div><strong>Visit us</strong><p><a href="https://maps.google.com/?q=Al-Nawfaliyeen%2C+Al-Muhajireen+Street%2C+Tripoli%2C+Libya" target="_blank" rel="noreferrer">Al-Nawfaliyeen, Al-Muhajireen Street, Tripoli, Libya</a></p></div></div>
      <div className="contact-detail"><Phone size={24} strokeWidth={1.4}/><div><strong>Call us</strong><p><a href="tel:+218928000520">+218 92-8000520</a></p></div></div>
    </div>
    <form className="enquiry-form" onSubmit={form.onSubmit}>
      <h3>Send an enquiry</h3><p className="form-intro">Tell us a little about your supply requirements.</p>
      <input {...form.honeypotProps}/>
      <div className="form-grid">
        <div><label htmlFor="name">Full name <span>*</span></label><input id="name" name="name" autoComplete="name" placeholder="Your name" required maxLength={150}/>{form.fieldErrors.name && <p className="field-error">{form.fieldErrors.name}</p>}</div>
        <div><label htmlFor="organisation">Company / organisation</label><input id="organisation" name="organisation" autoComplete="organization" placeholder="Company name" maxLength={200}/></div>
        <div><label htmlFor="email">Email address <span>*</span></label><input id="email" name="email" type="email" autoComplete="email" placeholder="you@company.com" required/>{form.fieldErrors.email && <p className="field-error">{form.fieldErrors.email}</p>}</div>
        <div><label htmlFor="phone">Phone number</label><input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="Include country code" maxLength={60}/></div>
      </div>
      <label htmlFor="interest">Area of interest <span>*</span></label>
      <select id="interest" name="interest" required defaultValue=""><option value="" disabled>Select a supply area</option><option>Foodstuffs</option><option>Livestock</option><option>Meat</option><option>General enquiry</option></select>
      {form.fieldErrors.interest && <p className="field-error">{form.fieldErrors.interest}</p>}
      <label htmlFor="message">Your message <span>*</span></label>
      <textarea id="message" name="message" rows={4} placeholder="Tell us what you need, including quantities, specifications, or timing." required minLength={10} maxLength={5000}/>
      {form.fieldErrors.message && <p className="field-error">{form.fieldErrors.message}</p>}
      <label className="checkbox-label"><input type="checkbox" name="consent" value="true" required/><span>I agree to my details being used to respond to this enquiry. <a href="#privacy" onClick={() => { const details = document.getElementById('privacy') as HTMLDetailsElement | null; if (details) details.open = true; }}>Privacy information</a></span></label>
      <button className="button button-dark" disabled={form.isSubmitting}>{form.isSubmitting ? 'Sending enquiry…' : 'Send enquiry'}<ArrowUpRight size={19}/></button>
      <div aria-live="polite">{form.isSuccess && <p className="success-message"><CheckCircle2 size={18}/>Thank you. Your enquiry has been received.</p>}{form.isError && <p className="field-error">{form.errorStatus === 429 ? 'Too many requests. Please wait a few minutes and try again.' : 'Your enquiry could not be sent. Please check your details and try again.'}</p>}</div>
    </form>
  </section>;
}
