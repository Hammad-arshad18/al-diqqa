import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useFormSubmission } from '@/hooks/use-form-submission';
import { submitWeb3Form } from '@/lib/web3forms';

export function Newsletter() {
  const form = useFormSubmission({
    submit: (values) =>
      submitWeb3Form(values, { subject: 'Newsletter signup — Al Daqa Al Mustadama for Foodstuff Importation' }),
  });
  return <section id="updates" className="newsletter"><div className="section-rail newsletter-inner"><div><p className="eyebrow">STAY IN THE LOOP</p><h2>OUR COMPANY.<br/><span>IN YOUR INBOX.</span></h2><p>Sign up for company news and supply updates.</p></div><form onSubmit={form.onSubmit}><input {...form.honeypotProps}/><label htmlFor="signup-email">Email address</label><div className="signup-input"><input id="signup-email" name="email" type="email" autoComplete="email" placeholder="Your email address" required/><button type="submit" disabled={form.isSubmitting} aria-label="Sign up for email updates">{form.isSubmitting ? <span className="signup-loading">Sending</span> : <ArrowRight size={23}/>}</button></div><label className="checkbox-label"><input type="checkbox" name="consent" value="true" required/><span>I agree to receive company email updates. <a href="#privacy" onClick={() => { const details = document.getElementById('privacy') as HTMLDetailsElement | null; if (details) details.open = true; }}>Privacy information</a></span></label><div aria-live="polite">{form.isSuccess && <p className="success-message"><CheckCircle2 size={17}/>Thank you. Your email sign-up has been received.</p>}{form.isError && <p className="field-error">{form.fieldErrors.email || 'We couldn’t save your sign-up. Please try again.'}</p>}</div></form></div></section>;
}
