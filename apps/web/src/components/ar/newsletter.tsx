import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useFormSubmission } from '@/hooks/use-form-submission';
import { submitWeb3Form } from '@/lib/web3forms';

export function ArabicNewsletter() {
  const form = useFormSubmission({
    submit: (values) =>
      submitWeb3Form(values, { subject: 'تسجيل نشرة بريدية — شركة الدقة المستدامة لاستيراد المواد الغذائية' }),
  });
  return <section id="updates" className="newsletter"><div className="section-rail newsletter-inner"><div><p className="eyebrow">ابقَ على اطلاع</p><h2>أخبار شركتنا.<br/><span>في بريدك الإلكتروني.</span></h2><p>سجّل لتلقي أخبار الشركة وتحديثات التوريد.</p></div><form onSubmit={form.onSubmit}><input {...form.honeypotProps}/><label htmlFor="signup-email">البريد الإلكتروني</label><div className="signup-input"><input id="signup-email" name="email" type="email" autoComplete="email" placeholder="بريدك الإلكتروني" required/><button type="submit" disabled={form.isSubmitting} aria-label="التسجيل لتلقي التحديثات">{form.isSubmitting ? <span className="signup-loading">جارٍ الإرسال</span> : <ArrowRight size={23}/>}</button></div><label className="checkbox-label"><input type="checkbox" name="consent" value="true" required/><span>أوافق على تلقي تحديثات الشركة عبر البريد الإلكتروني. <a href="#privacy" onClick={() => { const details = document.getElementById('privacy') as HTMLDetailsElement | null; if (details) details.open = true; }}>معلومات الخصوصية</a></span></label><div aria-live="polite">{form.isSuccess && <p className="success-message"><CheckCircle2 size={17}/>شكراً لك. تم استلام تسجيل بريدك الإلكتروني.</p>}{form.isError && <p className="field-error">تعذر حفظ التسجيل. يرجى المحاولة مجدداً.</p>}</div></form></div></section>;
}
