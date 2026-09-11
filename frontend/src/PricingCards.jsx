import { ArrowRight, Check } from 'lucide-react';
import { pricingTiers } from './mock';
import './LandingRefinement.css';

export default function PricingCards({ onContact }) {
  return <div className="pricing-grid refined-pricing-grid">
    {pricingTiers.map(tier => {
      const capacityLine = tier.features.find(feature => /repositories/.test(feature)) || '';
      const cloudLine = tier.features.find(feature => /cloud accounts|CSPM/.test(feature)) || '';
      const unlimited = capacityLine.startsWith('Unlimited');
      const repositories = capacityLine.match(/(\d+) repositories/)?.[1];
      const cloudAccounts = cloudLine.match(/(\d+) (?:cloud )?accounts/)?.[1];
      const features = tier.features.filter(feature => feature !== capacityLine)
        .map(feature => feature.replace(/ — \d+ accounts$/, ''));
      return <article key={tier.name} className={`refined-plan ${tier.popular ? 'refined-plan-pro' : ''}`}>
        <div className="refined-plan-top">
          <div className="refined-plan-title"><h3>{tier.name}</h3>{tier.popular && <span>Recommended</span>}</div>
          <p className="refined-plan-description">{tier.description}</p>
          <div className="refined-capacity">
            {unlimited ? <div><strong>Unlimited</strong><span>repositories &amp; cloud accounts</span></div> : <>
              <div><strong>{repositories}</strong><span>repositories</span></div>
              <div><strong>{cloudAccounts}</strong><span>cloud accounts</span></div>
            </>}
          </div>
          <button className="refined-plan-cta" onClick={() => onContact(tier.name)}>Contact sales <ArrowRight size={16} /></button>
        </div>
        <div className="refined-plan-features">
          <p className="refined-plan-lead">{features[0]}</p>
          <ul>{features.slice(1).map(feature => <li key={feature} className={feature === 'By agreement:' ? 'refined-plan-subhead' : ''}>
            {feature !== 'By agreement:' && <Check size={16} aria-hidden="true" />}<span>{feature}</span>
          </li>)}</ul>
        </div>
        <p className="refined-plan-foot">{tier.buttonNote}</p>
      </article>;
    })}
  </div>;
}
