import { useRef, useState } from 'react';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import './ContactSalesDialog.css';

// Public form identifier already used by the live hts.consulting contact form.
const CONTACT_ENDPOINT = 'https://api.web3forms.com/submit';
const CONTACT_FORM_KEY = 'c167b592-b19b-46df-9900-1a9d381f91c8';

export default function ContactSalesDialog({ plan, onClose }) {
  const [status, setStatus] = useState('idle');
  const submitting = useRef(false);
  async function submit(event) {
    event.preventDefault();
    if (submitting.current) return;
    const data = new FormData(event.currentTarget);
    for (const key of ['name', 'email', 'company', 'message']) data.set(key, String(data.get(key) || '').trim());
    if (!data.get('name') || !data.get('company') || !data.get('message')) { setStatus('error'); return; }
    submitting.current = true;
    setStatus('sending');
    data.set('access_key', CONTACT_FORM_KEY);
    data.set('subject', `HTSOne sales enquiry${plan ? ` — ${plan}` : ''}`);
    data.set('from_name', 'HTSOne Website');
    data.set('service', plan ? `HTSOne — ${plan}` : 'HTSOne');
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 20000);
    try {
      const response = await fetch(CONTACT_ENDPOINT, { method: 'POST', body: data, signal: controller.signal });
      const result = await response.json();
      if (!response.ok || result.success !== true) throw new Error('Submission not accepted');
      setStatus('success');
    } catch { setStatus('error'); }
    finally { clearTimeout(timeout); submitting.current = false; }
  }
  return <Dialog open onOpenChange={(open) => { if (!open && !submitting.current) onClose(); }}>
    <DialogContent className="hts-sales-dialog" showCloseIcon={status !== 'sending'}>
      <span className="hts-sales-eyebrow">CONTACT SALES{plan && ` · ${plan}`}</span>
      <DialogTitle>{status === 'success' ? 'Thanks for reaching out.' : 'Let’s secure your stack.'}</DialogTitle>
      <DialogDescription>{status === 'success' ? 'Your enquiry has been received. Our team will be in touch.' : 'Tell us about your team and what you want to secure.'}</DialogDescription>
      {status === 'success' ? <div role="status" className="hts-sales-actions"><button className="hts-sales-primary" onClick={onClose}>Done</button></div> :
        <form onSubmit={submit}>
          <fieldset disabled={status === 'sending'}>
            <div className="hts-sales-fields">
              <label>Name<input name="name" autoComplete="name" required minLength={2} maxLength={100} /></label>
              <label>Email<input name="email" type="email" autoComplete="email" required maxLength={100} /></label>
              <label className="hts-sales-wide">Company<input name="company" autoComplete="organization" required maxLength={100} /></label>
              <label className="hts-sales-wide">Message<textarea name="message" required minLength={10} maxLength={2000} rows={4} placeholder="What would you like to discuss?" /></label>
            </div>
            <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" className="hts-sales-honeypot" aria-hidden="true" />
            {status === 'error' && <p role="alert" className="hts-sales-error">We couldn’t confirm your submission. Please check your details and try again, or email contact@hts.consulting.</p>}
            <p className="hts-sales-note">We’ll use these details to respond to your enquiry.</p>
            <div className="hts-sales-actions"><button type="button" className="hts-sales-cancel" onClick={onClose}>Cancel</button><button type="submit" className="hts-sales-primary">{status === 'sending' ? 'Sending…' : 'Send enquiry'}</button></div>
          </fieldset>
        </form>}
    </DialogContent>
  </Dialog>;
}
