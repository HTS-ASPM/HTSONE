import React, { act } from 'react';
import { createRoot } from 'react-dom/client';
import ContactSalesDialog from './ContactSalesDialog';
import { pricingTiers } from './mock';
let root, host;
beforeEach(() => { global.IS_REACT_ACT_ENVIRONMENT = true; host = document.createElement('div'); document.body.append(host); root = createRoot(host); });
afterEach(() => { act(() => root.unmount()); host.remove(); jest.restoreAllMocks(); });
test('the four feature tiers have no prices or Free plan and Advanced has 300 repos', () => {
  expect(pricingTiers.map(t => t.name)).toEqual(['Basic','Pro','Advanced','Enterprise']);
  expect(pricingTiers.every(t => !t.price)).toBe(true);
  expect(pricingTiers[2].features).toContain('300 repositories · 20 cloud accounts');
});
async function submit(success) {
 global.fetch = jest.fn().mockResolvedValue({ok:true,json:async()=>({success})});
 act(()=>root.render(<ContactSalesDialog plan="Advanced" onClose={()=>{}}/>));
 for(const [name,value] of Object.entries({name:'Test Visitor',email:'test@example.com',company:'Example',message:'Please discuss our security needs.'})) document.querySelector(`[name="${name}"]`).value=value;
 await act(async()=>{document.querySelector('form').dispatchEvent(new Event('submit',{bubbles:true,cancelable:true}));});
}
test('sends selected plan and visitor details to the existing service',async()=>{
 await submit(true);
 expect(fetch.mock.calls[0][0]).toBe('https://api.web3forms.com/submit');
 expect(fetch.mock.calls[0][1].body.get('service')).toBe('HTSOne — Advanced');
 expect(document.body.textContent).toContain('Your enquiry has been received.');
});
test('retains details and shows an error if submission is not accepted',async()=>{
 await submit(false);
 expect(document.querySelector('[role="alert"]')).not.toBeNull();
 expect(document.querySelector('[name="email"]').value).toBe('test@example.com');
 expect(document.body.textContent).not.toContain('Your enquiry has been received.');
});
